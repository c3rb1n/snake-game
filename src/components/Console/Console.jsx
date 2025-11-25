import {useState} from 'react';
import styles from './Console.module.scss';
import LineBlock from './LineBlock/LineBlock';
import Header from './Header/Header';
import Screen from './Screen/Screen';
import BottomBlock from './BottomBlock/BottomBlock';

const Console = () => {
    const [currentLevelId, setCurrentLevelId] = useState(1);
    const [mode, setMode] = useState('УРОВНИ');

    const levelsMode = btnName => {
        if (btnName === 'right') {
            setCurrentLevelId(i => i + 1 > 3 ? 1 : i + 1);
        } else if (btnName === 'left') {
            setCurrentLevelId(i => i - 1 < 1 ? 3 : i - 1);
        } else if (btnName === 'СТАРТ') {
            setMode('СТАРТ');
        }
    };

    const controlsHandler = btnName => {
        if (mode === 'УРОВНИ') {
            levelsMode(btnName);
        }
    };

    const additionalButtonsHandler = btnName => {
        if (mode === 'УРОВНИ' && btnName === 'СТАРТ') {
            levelsMode(btnName);
        }
    };

    return (
        <div className={styles.console}>
            <div className={styles.console__inner}>
                <LineBlock />
                <div className={styles.console__screenBorder}>
                    <Header />
                    <Screen
                        currentLevelId={currentLevelId}
                        setCurrentLevelId={setCurrentLevelId}
                        mode={mode}
                        setMode={setMode}
                    />
                </div>
                <BottomBlock
                    currentLevelId={currentLevelId}
                    controlsHandler={controlsHandler}
                    additionalButtonsHandler={additionalButtonsHandler}
                />
            </div>
        </div>
    );
};

export default Console;
