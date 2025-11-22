class Block {
    constructor(col, row, ctx) {
        this.col = col;
        this.row = row;
        this.blockSize = 20;
        this.ctx = ctx;
    }

    equal(otherBlock) {
        return this.col === otherBlock.col && this.row === otherBlock.row;
    }
}

export default Block;
