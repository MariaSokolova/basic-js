module.exports = function repeater(str, options) {
    options.separator = options.separator || '+';
    options.additionSeparator = options.additionSeparator || '|';

    let additionString = '';
    if (options.addition !== undefined) {
        additionString = options.addition;

        for (let i = 1; i < options.additionRepeatTimes; i++) {
            additionString += options.additionSeparator + options.addition;
        }
    }

    let fullStr = str + additionString;
    let result = fullStr;

    for (let i = 1; i < options.repeatTimes; i++) {
        result += options.separator + fullStr;
    }

    return result;

// {repeatTimes,
// separator,
// addition,
// additionRepeatTimes,
// additionSeparator}


};
