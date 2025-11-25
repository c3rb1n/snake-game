import {useEffect} from 'react';
import styles from './LevelsList.module.scss';
import LevelsListItem from './LevelsListItem/LevelsListItem';

const LevelsList = ({currentLevelId, setCurrentLevelId, setMode}) => {
    const levels = [
        {id: 1, text: 'ЛЕГКО'},
        {id: 2, text: 'СРЕДНЕ'},
        {id: 3, text: 'СЛОЖНО'}
    ];

    useEffect(() => {
        const keydownHandler = event => {
            if (event.key === 'ArrowRight') {
                setCurrentLevelId(i => i + 1 > 3 ? 1 : i + 1);
            } else if (event.key === 'ArrowLeft') {
                setCurrentLevelId(i => i - 1 < 1 ? 3 : i - 1);
            } else if (event.key === 'Enter') {
                setMode('СТАРТ');
            }
        };

        document.querySelector('body').addEventListener('keydown', keydownHandler);

        return () => document.querySelector('body').removeEventListener('keydown', keydownHandler);
    }, [currentLevelId]);

    return (
        <div className={styles.levelsList}>
            {levels.map(({id, text}) => (
                <LevelsListItem key={id} text={text} selected={id === currentLevelId} />
            ))}
        </div>
    );
};

export default LevelsList;
