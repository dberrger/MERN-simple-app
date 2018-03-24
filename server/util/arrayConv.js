module.exports = function convertObjToArr(dbObj) {
    return dbObj.map(el => {
        return el.date.time;
    })
}