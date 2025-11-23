import styles from './LevelInfo.module.scss';
import LevelInfoItem from './LevelInfoItem/LevelInfoItem';

const LevelInfo = ({level}) => {
    const selectedLevel = level;
    const levels = [
        {id: 1, text: 'Легко'},
        {id: 2, text: 'Средне'},
        {id: 3, text: 'Сложно'}
    ];

    return (
        <div className={styles.levelInfo}>
            <div className={styles.levelInfo__inner}>
                {levels.map(({id, text}) => <LevelInfoItem key={id} text={text} selected={selectedLevel === text} />)}
            </div>
        </div>
    );
};

export default LevelInfo;
