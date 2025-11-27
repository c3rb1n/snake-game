import InfoKeyButtonBlock from '../../../../common/InfoKeyButtonBlock/InfoKeyButtonBlock';

const LevelsPage = () => {
    return (
        <>
            <div>
                Уровень сложности можно выбрать, используя клавиши "Влево"(
                <InfoKeyButtonBlock btnText={'\u25c0'} btnType="control" keyboardKey="A" />
                ) и "Вправо"(
                <InfoKeyButtonBlock btnText={'\u25b6'} btnType="control" keyboardKey="D" />
                )
            </div>
            <div>
                Для подтверждения выбора уровня сложности нажмите "Ввод"(
                <InfoKeyButtonBlock btnText="СТАРТ" btnType="additional" keyboardKey="Enter" />
                )
            </div>
            <div>
                <strong>Примечание:</strong>
                {' '}
                Во время игры, выбранный уровень сложности отображается горящей лампочкой на корпусе консоли
                {' '}
            </div>
        </>
    );
};

export default LevelsPage;
