require('dotenv').config();
// const mysql = require('mysql2');
const express = require('express');
const cors = require('cors');
const router = require('./routes');
const PORT = process.env.PORT || 3001;
const sequelize = require('./utils/databaseConnect');

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api', router);

const start = async () => {
    await sequelize.authenticate();
    await sequelize.sync();
    app.listen(PORT, function(){
        console.log(`Сервер ожидает подключения на порте ${PORT}...`);
    });
}
start().then();