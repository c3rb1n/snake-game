import InfoKeyButtonBlock from '../../../../../common/InfoKeyButtonBlock/InfoKeyButtonBlock';

const ControlsPageItem = ({btnText, btnType, keyboardKey, description}) => {
    return (
        <div>
            <InfoKeyButtonBlock btnText={btnText} btnType={btnType} keyboardKey={keyboardKey} />
            <span> - </span>
            {description}
        </div>
    );
};

export default ControlsPageItem;
