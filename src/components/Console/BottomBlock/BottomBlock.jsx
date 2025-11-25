import styles from './BottomBlock.module.scss';
import Controls from './Controls/Controls';
import AdditionalButtons from './AdditionalButtons/AdditionalButtons';
import LevelInfo from './LevelInfo/LevelInfo';

const BottomBlock = ({currentLevelId, controlsHandler, additionalButtonsHandler}) => {
    return (
        <div className={styles.bottomBlock}>
            <Controls controlsHandler={controlsHandler} />
            <AdditionalButtons additionalButtonsHandler={additionalButtonsHandler} />
            <LevelInfo currentLevelId={currentLevelId} />
        </div>
    );
};

export default BottomBlock;
