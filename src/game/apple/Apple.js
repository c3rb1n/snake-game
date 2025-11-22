import Block from '../block/Block';

class Apple extends Block {
    constructor(col, row, ctx) {
        super(col, row, ctx);
    }

    draw() {
        const centerX = this.col * this.blockSize + this.blockSize / 2;
        const centerY = this.row * this.blockSize + this.blockSize / 2;

        this.ctx.beginPath();

        this.ctx.arc(centerX, centerY, this.blockSize / 2, 0, Math.PI * 2, false);
        this.ctx.fill();
    }
}

export default Apple;
