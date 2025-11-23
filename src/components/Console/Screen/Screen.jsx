import styles from './Screen.module.scss';
import GameField from './GameField/GameField';
import HighScores from './HighScores/HighScores';
import Levels from './Levels/Levels';

const Screen = ({level, setLevel}) => {
    return (
        <div className={styles.screen}>
            {level ? <GameField /> : <Levels setLevel={setLevel} />}
            {/* <HighScores /> */}
        </div>
    );
};

export default Screen;
