import {useEffect, useState} from 'react';
import styles from './LevelsList.module.scss';
import LevelsListItem from './LevelsListItem/LevelsListItem';

const LevelsList = ({setLevel}) => {
    const [selectedLevelIndex, setSelectedLevelIndex] = useState(0);
    const levels = [
        {text: 'ЛЕГКО'},
        {text: 'СРЕДНЕ'},
        {text: 'СЛОЖНО'}
    ];

    useEffect(() => {
        const keydownHandler = event => {
            if (event.key === 'ArrowRight') {
                setSelectedLevelIndex(i => i + 1 > 2 ? 0 : i + 1);
            } else if (event.key === 'ArrowLeft') {
                setSelectedLevelIndex(i => i - 1 < 0 ? 2 : i - 1);
            } else if (event.key === 'Enter') {
                const selectedLevel = levels[selectedLevelIndex];
                const level = selectedLevel.text[0].toUpperCase() + selectedLevel.text.slice(1).toLowerCase();
                setLevel(level);
            }
        };

        document.querySelector('body').addEventListener('keydown', keydownHandler);

        return () => document.querySelector('body').removeEventListener('keydown', keydownHandler);
    }, [selectedLevelIndex]);

    return (
        <div className={styles.levelsList}>
            {levels.map(({text}, i) => (
                <LevelsListItem key={i} text={text} selected={i === selectedLevelIndex} />
            ))}
        </div>
    );
};

export default LevelsList;
