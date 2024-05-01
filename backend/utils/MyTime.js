const DAY_TIME = 24*3600000
const HOUR_TIME = 3600000

class MyTime{

    static nowDate() {
        return new Date(Date.now() + 4*HOUR_TIME);
    }
    static nowTime() {
        return Date.now();
    }
    getWeekDay(d) {
        let day = (d ? d.getDay() : this.now().getDay());
        return (day + 6)%7 + 1;
    }
    getMonthNum(d) {
        return d ? d.getMonth() + 1: this.now().getMonth() + 1;
    }
    getWeek(d) {
        let t =  ((d ? d.getTime() : Date.now()) - this.const_SEMESTER_BEGIN().getTime())/ this.const_WEEK_TIME();
        return (t > 0 ? Math.floor(t) : Math.round(t)) + 1;
    }
}

module.exports = MyTime;