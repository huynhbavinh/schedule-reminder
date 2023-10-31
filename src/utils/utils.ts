const getClosestDate = (listDate: Array<Date>) => {
    return listDate.map(date => {
        return new Date(date).getTime();
    }).sort(function (a, b) {
        return a - b;
    });
}

export {
    getClosestDate,
}