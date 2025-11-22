import SnakeSegment from './SnakeSegment';

class Snake {
    constructor(ctx) {
        this.ctx = ctx;
        this.direction = 'right';
        this.nextDirection = 'right';
        this.segments = [
            new SnakeSegment(7, 5, this.ctx),
            new SnakeSegment(6, 5, this.ctx),
            new SnakeSegment(5, 5, this.ctx),
        ];
    }

    draw() {
        this.segments.forEach((segment, i) => {
            segment.draw(i === 0);
        });
    }

    setDirection(newDirection) {
        const upCollision = this.direction === 'up' && newDirection === 'down';
        const rightCollision = this.direction === 'right' && newDirection === 'left';
        const downCollision = this.direction === 'down' && newDirection === 'up';
        const leftCollision = this.direction === 'left' && newDirection === 'right';
        const collision = upCollision || rightCollision || downCollision || leftCollision;

        if (collision) {
            return;
        }

        this.nextDirection = newDirection;
    }
}

export default Snake;
