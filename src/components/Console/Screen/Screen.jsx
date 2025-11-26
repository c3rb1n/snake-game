import styles from './Screen.module.scss';
import GameField from './GameField/GameField';
import Leaders from './Leaders/Leaders';
import Levels from './Levels/Levels';

const Screen = ({currentLevelId, setCurrentLevelId, mode, setMode}) => {
    return (
        <div className={styles.screen}>
            {
                mode === 'СТАРТ' ?
                <GameField /> :
                mode === 'ЛИДЕРЫ' ?
                <Leaders /> :
                mode === 'ИНФО' ?
                <div>Инфо</div> :
                mode === 'УРОВНИ' ?
                <Levels currentLevelId={currentLevelId} setCurrentLevelId={setCurrentLevelId} setMode={setMode} /> :
                <div>Пауза</div>
            }
        </div>
    );
};

export default Screen;
