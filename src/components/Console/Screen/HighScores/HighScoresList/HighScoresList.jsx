import styles from './HighScoresList.module.scss';
import HighScoresItem from './HighScoresItem/HighScoresItem';

const HighScoresList = () => {
    const scores = [
        {id: 1, scores: 25310, name: 'AAA', lvl: 'ЛЕГКО'},
        {id: 2, scores: 12200, name: 'BBB', lvl: 'СЛОЖНО'},
        {id: 3, scores: 5130, name: 'CCC', lvl: 'СЛОЖНО'},
        {id: 4, scores: 2112, name: 'DDD', lvl: 'СРЕДНЕ'},
        {id: 5, scores: 1002, name: 'AGA', lvl: 'ЛЕГКО'},
        {id: 6, scores: 930, name: 'VVV', lvl: 'СРЕДНЕ'},
        {id: 7, scores: 740, name: 'III', lvl: 'СЛОЖНО'},
        {id: 8, scores: 560, name: 'QQQ', lvl: 'ЛЕГКО'},
        {id: 9, scores: 50, name: 'PPP', lvl: 'СЛОЖНО'},
        {id: 10, scores: 8, name: 'QWE', lvl: 'СРЕДНЕ'},
    ];

    return (
        <ol className={styles.list}>
            {scores.map(({id, scores, name, lvl}) => (
                <HighScoresItem key={id} scores={scores} name={name} lvl={lvl} />
            ))}
        </ol>
    );
};

export default HighScoresList;
