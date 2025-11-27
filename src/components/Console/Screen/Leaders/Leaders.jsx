import styles from './Leaders.module.scss';
import LeadersList from './LeadersList/LeadersList';

const Leaders = () => {
    return (
        <div className={styles.leaders}>
            <div className={styles.leaders__inner}>
                <h2 className={styles.leaders__title}>ТАБЛИЦА ЛИДЕРОВ</h2>
                <LeadersList />
            </div>
        </div>
    );
};

export default Leaders;
