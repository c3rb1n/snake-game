import styles from './Controls.module.scss';
import Button from '../../../common/Button/Button';

const Controls = () => {
    const btns = [
        {cn: styles.controls__upButton},
        {cn: styles.controls__leftButton},
        {cn: styles.controls__rightButton},
        {cn: styles.controls__downButton}
    ];

    return (
        <div className={styles.controls}>
            {btns.map(({cn}, i) => <Button cn={cn} key={i}>&#9650;</Button>)}
            <div className={styles.controls__center}></div>
        </div>
    );
};

export default Controls;
