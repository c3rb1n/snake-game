import {useEffect} from 'react';
import Game from '../../../../game/Game';

const GameField = () => {
    useEffect(() => {
        const customFont = new FontFace('PressStart2P', `url(/fonts/PressStart2P-Regular.woff2)`);

        customFont.load().then(font => {
            const canvas = document.querySelector('canvas');
            const game = new Game(canvas);

            document.fonts.add(font);

            game.start();
        });
    }, []);

    return (
        <canvas width={460} height={300}></canvas>
    );
};

export default GameField;
