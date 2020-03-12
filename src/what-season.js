module.exports = function getSeason(date) {
    if (!date) {
        return 'Unable to determine the time of year!';
    }
    if (!(date instanceof Date)) {
        throw new Error();
    }
    date.toLocaleString();

    const month = date.getMonth();

    if (month < 2 || month === 11) {
        return 'winter';
    } else if (month < 5) {
        return 'spring';
    } else if (month < 8) {
        return 'summer';
    } else if (month < 11) {
        return 'fall';
    }
};
