import styles from './InfoKeyButtonBlock.module.scss';

const InfoKeyButtonBlock = ({btnText, btnType, keyboardKey}) => {
    const checkBtnType = btnType => btnType === 'control' ? styles.btn_control : styles.btn_additional;

    return (
        <>
            <span className={`${styles.btn} ${checkBtnType(btnType)}`}>{btnText}</span>
            <span>, </span>
            <span className={styles.keyboardKey}>{keyboardKey}</span>
        </>
    );
};

export default InfoKeyButtonBlock;
