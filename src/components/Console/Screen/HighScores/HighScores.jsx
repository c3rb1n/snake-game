import styles from './HighScores.module.scss';
import HighScoresList from './HighScoresList/HighScoresList';

const HighScores = () => {
    return (
        <div className={styles.highScores}>
            <div className={styles.highScores__inner}>
                <h2 className={styles.highScores__title}>ТАБЛИЦА РЕКОРДОВ</h2>
                <HighScoresList />
            </div>
        </div>
    );
};

export default HighScores;
