const moment = require('moment');

//rewrite


function getFreeDay() {
    return ['09:00 am', '09:30 am', '10:00 am', '10:30 am', '11:00 am', '11:30 am',
        '12:00 am', '01:00 pm', '01:30 pm', '02:00 pm', '02:30 pm', '03:00 pm',
        '03:30 pm', '04:00 pm', '04:30 pm', '05:00 pm', '05:30 pm', '06:00 pm'
    ]
}

function filterTimes(times, requestDate) {
    if (requestDate.date === moment().date() && requestDate.months === moment().month() && requestDate.years === moment().year()) {
        return times.filter(elem => compare(elem))
    }
    return times;
}


function compare(elem) {
    let timeH = moment(elem, ['HH:mm a']).hours();
    let timeM = moment(elem, ['HH:mm a']).minutes();
    if (timeH === 0) timeH = 12;
    return moment().hour() > timeH ? false :
        moment().hour() === timeH && moment().minutes() > timeM ? false : true
}

function avaliableTimes(times, date) {

    let timesRes = (!!times.length) ? times : getFreeDay();
    let result = getFreeDay().filter((el) => !timesRes.includes(el));
    const ret = (!!result.length) ? result : getFreeDay();
    return filterTimes(ret, date);
}


module.exports = {
    getFreeDay,
    filterTimes,
    avaliableTimes
}