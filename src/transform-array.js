module.exports = function transform(arr) {

    if (!Array.isArray(arr)) {
        throw new Error();
    }

    let newArr = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === '--double-next' && i === arr.length - 1) {
            continue;
        } else if (arr[i] === '--double-next') {
            newArr.push(arr[i + 1]);
            continue;
        }

        if (arr[i] === '--discard-next') {
            i++;
            continue;
        }
        if (arr[i] === '--double-prev' && i === 0) {
            continue;
        } else if (arr[i] === '--double-prev') {
            newArr.push(arr[i - 1]);
            continue;
        }
        if (arr[i] === '--discard-prev') {
            newArr.pop();
            continue;
        }
        newArr.push(arr[i]);
    }
    return newArr;
};
