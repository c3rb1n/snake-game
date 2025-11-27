import Apple from './apple/Apple';
import Snake from './snake/Snake';
import SnakeSegment from './snake/SnakeSegment';

class Game {
    constructor(canvas, currentLevelId) {
        this.directions = {
            w: 'up', W: 'up',
            d: 'right', D: 'right',
            s: 'down', S: 'down',
            a: 'left', A: 'left',
        };
        this.levelSettings = {
            1: {scoresModifier: 1, speedModifier: 100},
            2: {scoresModifier: 5, speedModifier: 70},
            3: {scoresModifier: 10, speedModifier: 50}
        };
        this.ctx = canvas.getContext('2d');
        this.width = canvas.width;
        this.height = canvas.height;
        this.blockSize = 20;
        this.widthInBlocks = this.width / this.blockSize;
        this.heightInBlocks = this.height / this.blockSize;
        this.scores = 0;
        this.scoresModifier = this.levelSettings[currentLevelId].scoresModifier;
        this.speedModifier = this.levelSettings[currentLevelId].speedModifier;

        this.ctx.fillStyle = '#292E40';
        this.ctx.strokeStyle = '#292E40';

        this.apple = new Apple(10, 10, this.ctx);
        this.snake = new Snake(this.ctx);
    }

    moveApple() {
        const randomCol = Math.floor(Math.random() * (this.widthInBlocks - 1)) + 1;
        const randomRow = Math.floor(Math.random() * (this.heightInBlocks - 1)) + 1;

        this.apple = new Apple(randomCol, randomRow, this.ctx);
    }

    moveSnake() {
        const [head] = this.snake.segments;
        let newHead;

        this.snake.direction = this.snake.nextDirection;

        if (this.snake.direction === 'right') {
            newHead = new SnakeSegment(head.col + 1, head.row, this.ctx);
        } else if (this.snake.direction === 'down') {
            newHead = new SnakeSegment(head.col, head.row + 1, this.ctx);
        } else if (this.snake.direction === 'left') {
            newHead = new SnakeSegment(head.col - 1, head.row, this.ctx);
        } else if (this.snake.direction === 'up') {
            newHead = new SnakeSegment(head.col, head.row - 1, this.ctx);
        }

        if (this.checkSnakeCollision(newHead)) {
            return true;
        }

        this.snake.segments.unshift(newHead);

        if (newHead.equal(this.apple)) {
            this.scores += this.scoresModifier;
            let i = 0;

            while (i < this.snake.segments.length) {
                if (this.snake.segments[i].equal(this.apple)) {
                    this.moveApple();
                    i = 0;
                } else {
                    i++;
                }
            }
        } else {
            this.snake.segments.pop();
        }

        return false;
    }

    checkSnakeCollision(snakeHead) {
        const leftCollision = snakeHead.col === -1;
        const topCollision = snakeHead.row === -1;
        const rightCollision = snakeHead.col === this.widthInBlocks;
        const bottomCollision = snakeHead.row === this.heightInBlocks;
        const wallCollision = leftCollision || topCollision || rightCollision || bottomCollision;
        let selfCollision = false;

        this.snake.segments.forEach(segment => {
            if (snakeHead.equal(segment)) {
                selfCollision = true;
            }
        });

        return wallCollision || selfCollision;
    }

    drawScore() {
        this.ctx.font = '20px PressStart2P';
        this.ctx.textAlign = 'left';
        this.ctx.textBaseline = 'top';
        this.ctx.fillText(`Счёт:${this.scores}`, 10, 10);
    }

    gameOver(intervalId) {
        clearInterval(intervalId);

        this.ctx.font = '40px PressStart2P';
        this.ctx.textBaseline = 'middle';
        this.ctx.textAlign = 'center';
        this.ctx.fillText('Конец игры', this.width / 2, this.height / 2);

        document.querySelector('body').removeEventListener('keydown', this.keydownHandler);
    }

    keydownHandler = event => {
        const newDirection = this.directions[event.key];

        if (newDirection) {
            this.snake.setDirection(newDirection);
        }
    };

    start() {
        document.querySelector('body').addEventListener('keydown', this.keydownHandler);

        const intervalId = setInterval(() => {
            this.ctx.clearRect(0, 0, this.width, this.height);
            this.drawScore();

            const isCollision = this.moveSnake();

            if (isCollision) {
                this.gameOver(intervalId);
            }

            this.snake.draw();
            this.apple.draw();
        }, this.speedModifier);
    }
}

export default Game;
