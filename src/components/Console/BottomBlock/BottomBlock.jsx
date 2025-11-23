import styles from './BottomBlock.module.scss';
import Controls from './Controls/Controls';
import AdditionalButtons from './AdditionalButtons/AdditionalButtons';
import LevelInfo from './LevelInfo/LevelInfo';

const BottomBlock = ({level}) => {
    return (
        <div className={styles.bottomBlock}>
            <Controls />
            <AdditionalButtons />
            <LevelInfo level={level} />
        </div>
    );
};

export default BottomBlock;
