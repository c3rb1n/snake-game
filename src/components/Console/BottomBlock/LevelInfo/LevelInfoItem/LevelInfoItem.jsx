import styles from './LevelInfoItem.module.scss';

const LevelInfoItem = ({selected, text}) => {
    return (
        <div className={styles.levelInfoItem}>
            <div className={`${styles.levelInfoItem__lamp} ${selected ? styles.levelInfoItem__lamp_on : ''}`}></div>
            <div className={styles.levelInfoItem__text}>{text}</div>
        </div>
    );
};

export default LevelInfoItem;
