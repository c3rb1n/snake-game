import styles from './LevelsListItem.module.scss';

const LevelsListItem = ({text, selected}) => {
    return (
        <div className={`${styles.level} ${selected ? styles.level_selected : ''}`}>{text}</div>
    );
};

export default LevelsListItem;
