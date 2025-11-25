import styles from './AdditionalButtons.module.scss';
import Button from '../../../common/Button/Button';

const AdditionalButtons = ({additionalButtonsHandler}) => {
    const btns = [
        {id: 1, name: 'СТАРТ'},
        {id: 2, name: 'ПАУЗА'},
        {id: 3, name: 'ИНФО'},
        {id: 4, name: 'ЛИДЕРЫ'}
    ];

    return (
        <div className={styles.additionalButtons}>
            {btns.map(({id, name}) => (
                <Button
                    cn={styles.additionalButtons__button}
                    key={id}
                    clickHandler={() => additionalButtonsHandler(name)}
                >
                    {name}
                </Button>
            ))}
        </div>
    );
};

export default AdditionalButtons;
