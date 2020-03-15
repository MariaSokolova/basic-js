module.exports = class DepthCalculator {
    calculateDepth(arr) {
        if (!Array.isArray(arr)) {
            return 0;
        }
        if (arr.length === 0) {
            return 1;
        }
        return 1 + Math.max(...arr.map(el => this.calculateDepth(el)));
    }
};
