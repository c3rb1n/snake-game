import styles from './LineBlock.module.scss';

const LineBlock = () => (
    <div className={styles.lineBlock}>
        {Array.from({length: 4}).map((_, i) => <hr className={styles.lineBlock__line} key={i} />)}
    </div>
);

export default LineBlock;
