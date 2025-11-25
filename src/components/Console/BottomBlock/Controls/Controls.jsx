import styles from './Controls.module.scss';
import Button from '../../../common/Button/Button';

const Controls = ({controlsHandler}) => {
    const btns = [
        {id: 1, name: 'up', cn: styles.controls__upButton},
        {id: 2, name: 'left', cn: styles.controls__leftButton},
        {id: 3, name: 'right', cn: styles.controls__rightButton},
        {id: 4, name: 'down', cn: styles.controls__downButton}
    ];

    return (
        <div className={styles.controls}>
            {btns.map(({id, name, cn}) => (
                <Button key={id} cn={cn} clickHandler={() => controlsHandler(name)}>
                    &#9650;
                </Button>
            ))}
            <div className={styles.controls__center}></div>
        </div>
    );
};

export default Controls;
