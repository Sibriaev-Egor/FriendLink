const pool = require('../utils/databaseConnect');

const User = new class UserEntity {
    async find_id_by_email(email) {
        const data = await pool.query(`SELECT id from user_table WHERE email=$1`, [email])
        return data.rows[0]
    }
    async find_id_by_nick(nick) {
        const data = await pool.query(`SELECT id, nick from user_table WHERE LOWER(nick) LIKE LOWER($1)`, [nick])
        return data.rows
    }
    async create(email, hashpassword, nick) {
        const data = await pool.query(`INSERT INTO user_table (email, pass, nick) VALUES ($1, $2, $3) RETURNING id`, [email, hashpassword, nick])
        return data.rows[0].id
    }
    async find_user_by_email(email) {
        const data = await pool.query(`SELECT pass, id, role FROM user_table WHERE email=$1`, [email])
        return data.rows[0]
    }
    async reset_password(hashpassword, id) {
        await pool.query(`UPDATE user_table SET pass=$1 WHERE id=$2`, [hashpassword, id])
    }
    async get_user_by_id(id) {
        const data = await pool.query(`SELECT id, description, nick FROM user_table WHERE id=$1`, [id])
        return data.rows[0]
    }
    async get_user_by_nick(nick) {
        const data = await pool.query(`SELECT id, nick FROM user_table WHERE LOWER(nick) LIKE LOWER($1)`, [nick])
        return data.rows
    }
    async edit_description(description, id) {
        await pool.query(`UPDATE user_table SET description=$1 WHERE id=$2`, [description, id])
    }
    async edit_nick(nick, id) {
        await pool.query(`UPDATE user_table SET nick=$1 WHERE id=$2`, [nick, id])
    }
    async delete(id) {
        await pool.query(`DELETE FROM user_table WHERE id=$1`, [id])
    }
}
const Post = new class PostEntity {
    async get_all(postUserId, userId) {
        const data = await pool.query(`SELECT post_table.*, COALESCE(t.amount, 0) as likes_amount,
            (select count(*)=1 from like_table where user_id=$2 and post_id = t.post_id) as is_like
            FROM post_table left join 
            (select count(*) as amount, post_id from like_table where post_id in 
            (select id from post_table where user_id=$1) group by post_id) as t 
            on post_table.id = t.post_id WHERE user_id=$1 order by post_table.date desc`, [postUserId, userId])
        return data.rows
    }
    async get_one(id) {
        const data = await pool.query(`select post_table.*, (select count(*) from like_table where post_id = $1) 
            as likes_amount from post_table where id = $1`, [id])
        return data.rows[0]
    }
    async create(userId, text, date) {
        const data = await pool.query(`INSERT INTO post_table (user_id, text, date) VALUES ($1, $2, $3) RETURNING *`,
            [userId, text, date])
        return data.rows[0]
    }
    async edit(text, id, userId) {
        await pool.query(`UPDATE post_table SET text=$1 WHERE id=$2 AND user_id=$3`, [text, id, userId])
    }
    async delete(userId, id) {
        if (userId) {
            await pool.query(`DELETE FROM post_table WHERE user_id=$1 AND id=$2`, [userId, id])
        }
        else {
            await pool.query(`DELETE FROM post_table WHERE id=$1`, [id])
        }

    }
    async change_role(role, id) {
        await pool.query(`UPDATE user_table SET role=$1 WHERE id=$2`, [role, id])
    }

}
const Like = new class LikeEntity {
    async like(userId, id) {
        await pool.query(`INSERT INTO like_table VALUES ($1, $2) ON CONFLICT DO NOTHING`, [userId, id])
    }
    async dislike(userId, id) {
        await pool.query(`DELETE FROM like_table WHERE user_id=$1 AND post_id=$2`, [userId, id])
    }
}

const Claim = new class ClaimEntity {
    async create(userId, id, description) {
        await pool.query(`INSERT INTO claim_table VALUES ($1, $2, $3) ON CONFLICT (user_id, post_id) DO UPDATE set description=$3`,
            [userId, id, description]);
    }
    async get() {
        const data = await pool.query(`SELECT * FROM claim_table LIMIT 20`);
        return data.rows
    }
    async delete(id) {
        await pool.query(`DELETE FROM claim_table WHERE post_id=$1`, [id])
    }
}

const Friends = new class FriendsEntity {
    async friends(id) {
        const data = await pool.query(`select id, nick from user_table where id in (select friends_table.user2_id 
            from friends_table join friends_table as t2 on 
            friends_table.user1_id = t2.user2_id and friends_table.user2_id = t2.user1_id 
            and friends_table.ban = t2.ban where friends_table.user1_id = $1 and friends_table.ban = 'false')`, [id]);
        return data.rows
    }
    async subs(id) {
        const data = await pool.query(`select id, nick from user_table where id in (select user1_id from friends_table 
                where user2_id = $1 and ban = 'false'
                and user1_id not in (select user2_id from friends_table where user1_id = $1))`, [id]);
        return data.rows
    }
    async subscriptions(id) {
        const data = await pool.query(`select id, nick from user_table where id in (select user2_id from friends_table 
                where user1_id = $1 and ban = 'false'
                and user2_id not in (select user1_id from friends_table where user2_id = $1))`, [id])
        return data.rows
    }
    async banList(id) {
        const data = await pool.query(`select id, nick from user_table where id in (select user2_id from friends_table 
            where user1_id=$1 and ban='true')`, [id])
        return data.rows
    }
    async doAction(id1, id2, ban) {
        await pool.query(`INSERT into friends_table values($1, $2, $3) ON CONFLICT (user1_id, user2_id) DO UPDATE set ban=$3`,
            [id1, id2, ban])
    }
    async delete(id1, id2) {
        await pool.query(`delete from friends_table where user1_id=$1 and user2_id=$2`, [id1, id2])
    }
}

module.exports = {
    User,
    Post,
    Like,
    Claim,
    Friends
}