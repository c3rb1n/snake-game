import styles from './LevelInfo.module.scss';
import LevelInfoItem from './LevelInfoItem/LevelInfoItem';

const LevelInfo = () => {
    const levels = [
        {id: 1, text: 'Легко', selected: false},
        {id: 2, text: 'Средне', selected: true},
        {id: 3, text: 'Сложно', selected: false}
    ];

    return (
        <div className={styles.levelInfo}>
            <div className={styles.levelInfo__inner}>
                {levels.map(({id, text, selected}) => <LevelInfoItem key={id} text={text} selected={selected} />)}
            </div>
        </div>
    );
};

export default LevelInfo;
