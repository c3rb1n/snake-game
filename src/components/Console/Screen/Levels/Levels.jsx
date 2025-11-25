import styles from './Levels.module.scss';
import LevelsList from './LevelsList/LevelsList';

const Levels = ({currentLevelId, setCurrentLevelId, setMode}) => {
    return (
        <div className={styles.levels}>
            <div className={styles.levels__inner}>
                <h2 className={styles.levels__title}>Змейка</h2>
                <p className={styles.levels__description}>ВЫБЕРИТЕ УРОВЕНЬ СЛОЖНОСТИ</p>
                <LevelsList currentLevelId={currentLevelId} setCurrentLevelId={setCurrentLevelId} setMode={setMode} />
            </div>
        </div>
    );
};

export default Levels;
