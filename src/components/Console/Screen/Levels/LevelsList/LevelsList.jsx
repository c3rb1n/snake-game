import styles from './LevelsList.module.scss';
import LevelsListItem from './LevelsListItem/LevelsListItem';

const LevelsList = () => {
    const levels = [
        {text: 'ЛЕГКО', selected: false},
        {text: 'СРЕДНЕ', selected: true},
        {text: 'СЛОЖНО', selected: false}
    ];
    return (
        <div className={styles.levelsList}>
            {levels.map(({text, selected}, i) => <LevelsListItem key={i} text={text} selected={selected} />)}
        </div>
    );
};

export default LevelsList;
