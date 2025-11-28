import {useState} from 'react';
import styles from './Console.module.scss';
import LineBlock from './LineBlock/LineBlock';
import Header from './Header/Header';
import Screen from './Screen/Screen';
import BottomBlock from './BottomBlock/BottomBlock';

const Console = () => {
    const [currentLevelId, setCurrentLevelId] = useState(1);
    const [selectedInfoMarkerId, setSelectedInfoMarkerId] = useState(1);
    // const [gameBtnHandler, setGameBtnHandler] = useState(null);
    const [mode, setMode] = useState('УРОВНИ');
    let gameBtnHandler;

    const setGameBtnHandler = handler => {
        gameBtnHandler = handler;
    };

    const levelsMode = btnName => {
        if (btnName === 'right') {
            setCurrentLevelId(i => i + 1 > 3 ? 1 : i + 1);
        } else if (btnName === 'left') {
            setCurrentLevelId(i => i - 1 < 1 ? 3 : i - 1);
        }
    };

    const infoMode = btnName => {
        if (btnName === 'right') {
            setSelectedInfoMarkerId(i => i + 1 > 3 ? 1 : i + 1);
        } else if (btnName === 'left') {
            setSelectedInfoMarkerId(i => i - 1 < 1 ? 3 : i - 1);
        }
    };

    const controlsHandler = btnName => {
        if (mode === 'УРОВНИ') {
            levelsMode(btnName);
        } else if (mode === 'ИНФО') {
            infoMode(btnName);
        } else if (mode === 'СТАРТ') {
            gameBtnHandler(btnName);
        }
    };

    const additionalButtonsHandler = btnName => {
        if (mode === 'СТАРТ' && btnName === 'ПАУЗА') {
            setMode(btnName);
        } else if (mode !== 'УРОВНИ' && btnName === 'СТАРТ') {
            setMode('УРОВНИ');
        } else if (btnName !== 'ПАУЗА') {
            setMode(btnName);
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
                        selectedInfoMarkerId={selectedInfoMarkerId}
                        setSelectedInfoMarkerId={setSelectedInfoMarkerId}
                        setGameBtnHandler={setGameBtnHandler}
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
