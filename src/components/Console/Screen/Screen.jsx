import styles from './Screen.module.scss';
import GameField from './GameField/GameField';
import HighScores from './HighScores/HighScores';
import Levels from './Levels/Levels';

const Screen = ({currentLevelId, setCurrentLevelId, mode, setMode}) => {
    return (
        <div className={styles.screen}>
            {
                mode === 'СТАРТ' ?
                <GameField /> : (
                <Levels
                    currentLevelId={currentLevelId}
                    setCurrentLevelId={setCurrentLevelId}
                    setMode={setMode}
                />
              )
            }
            {/* <HighScores /> */}
        </div>
    );
};

export default Screen;
