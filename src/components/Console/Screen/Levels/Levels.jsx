import styles from './Levels.module.scss';
import LevelsList from './LevelsList/LevelsList';

const Levels = () => {
    return (
        <div className={styles.levels}>
            <div className={styles.levels__inner}>
                <h2 className={styles.levels__title}>Змейка</h2>
                <p className={styles.levels__description}>ВЫБЕРИТЕ УРОВЕНЬ СЛОЖНОСТИ</p>
                <LevelsList />
            </div>
        </div>
    );
};

export default Levels;
