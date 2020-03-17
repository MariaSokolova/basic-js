const chainMaker = {
    arr: [],
    getLength() {
        return this.arr.length;
    },
    addLink(value) {
        this.arr.push(value);
        return this;
    },
    removeLink(position) {
        if (position <= 0 || position > this.arr.length - 1 || typeof (position) !== 'number') {
          this.arr = [];
            throw new Error();
        }
        this.arr.splice(position - 1, 1);
        return this;
    },
    reverseChain() {
        this.arr.reverse();
        return this;
    },
    finishChain() {
        let chain = '';
        for (let i = 0; i < this.arr.length - 1; i++) {
            chain += `( ${this.arr[i]} )~~`;
        }
        let fullChain = chain + `( ${this.arr[this.arr.length - 1]} )`;
        this.arr = [];
        return fullChain;
    }
};

module.exports = chainMaker;
