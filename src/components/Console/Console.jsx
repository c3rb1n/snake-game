import styles from './Console.module.scss';
import LineBlock from './LineBlock/LineBlock';
import Header from './Header/Header';
import Screen from './Screen/Screen';
import BottomBlock from './BottomBlock/BottomBlock';

const Console = () => {
    return (
        <div className={styles.console}>
            <div className={styles.console__inner}>
                <LineBlock />
                <div className={styles.console__screenBorder}>
                    <Header />
                    <Screen />
                </div>
                <BottomBlock />
            </div>
        </div>
    );
};

export default Console;
