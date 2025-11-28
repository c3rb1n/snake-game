import styles from './Screen.module.scss';
import GameField from './GameField/GameField';
import Leaders from './Leaders/Leaders';
import Info from './Info/Info';
import Levels from './Levels/Levels';

const Screen = ({
    currentLevelId,
    setCurrentLevelId,
    mode,
    setMode,
    selectedInfoMarkerId,
    setSelectedInfoMarkerId,
    setGameBtnHandler
}) => {
    return (
        <div className={styles.screen}>
            {
                mode === 'СТАРТ' ?
                <GameField currentLevelId={currentLevelId} setGameBtnHandler={setGameBtnHandler} /> :
                mode === 'ЛИДЕРЫ' ?
                <Leaders /> :
                mode === 'ИНФО' ?
                <Info selectedInfoMarkerId={selectedInfoMarkerId} setSelectedInfoMarkerId={setSelectedInfoMarkerId} /> :
                mode === 'УРОВНИ' ?
                <Levels currentLevelId={currentLevelId} setCurrentLevelId={setCurrentLevelId} setMode={setMode} /> :
                <div>Пауза</div>
            }
        </div>
    );
};

export default Screen;
