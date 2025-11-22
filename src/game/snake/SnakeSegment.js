import Block from '../block/Block';

class SnakeSegment extends Block {
    constructor(col, row, ctx) {
        super(col, row, ctx);
    }

    draw(isHead) {
        const x = this.col * this.blockSize;
        const y = this.row * this.blockSize;

        this.ctx.strokeRect(x, y, this.blockSize, this.blockSize);

        if (isHead) {
            this.drawHeadSegment(x, y);
        } else {
            this.drawBodySegment(x, y);
        }
    }

    drawHeadSegment(x, y) {
        this.ctx.fillRect(x, y, this.blockSize, this.blockSize);
    }

    drawBodySegment(x, y) {
        const centerX = x + this.blockSize / 4;
        const centerY = y + this.blockSize / 4;
        const centerSize = this.blockSize - this.blockSize / 2;

        this.ctx.fillRect(centerX, centerY, centerSize, centerSize);
    }
}

export default SnakeSegment;
