import styles from './Screen.module.scss';
import GameField from './GameField/GameField';
import HighScores from './HighScores/HighScores';
import Levels from './Levels/Levels';

const Screen = () => {
    return (
        <div className={styles.screen}>
            <GameField />
            {/* <HighScores /> */}
            {/* <Levels /> */}
        </div>
    );
};

export default Screen;
