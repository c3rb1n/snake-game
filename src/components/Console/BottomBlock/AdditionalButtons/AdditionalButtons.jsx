import styles from './AdditionalButtons.module.scss';
import Button from '../../../common/Button/Button';

const AdditionalButtons = () => {
    const btns = [
        {text: 'СТАРТ'},
        {text: 'ПАУЗА'},
        {text: 'ИНФО'},
        {text: 'ЛИДЕРЫ'}
    ];

    return (
        <div className={styles.additionalButtons}>
            {btns.map(({text}, i) => <Button cn={styles.additionalButtons__button} key={i}>{text}</Button>)}
        </div>
    );
};

export default AdditionalButtons;
