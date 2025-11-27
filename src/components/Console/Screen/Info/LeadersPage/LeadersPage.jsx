import InfoKeyButtonBlock from '../../../../common/InfoKeyButtonBlock/InfoKeyButtonBlock';

const LeadersPage = () => {
    return (
        <>
            <div>
                Таблица лидеров -
                {' '}
                <InfoKeyButtonBlock btnText="ЛИДЕРЫ" btnType="additional"keyboardKey="L" />
            </div>
            <div>По окончанию игры Вам будет предложено выбрать никнейм из 3-х символов</div>
            <div>
                Для переключения между символами, нажмите "Влево"(
                <InfoKeyButtonBlock btnText={'\u25c0'} btnType="control" keyboardKey="A" />
                ) или "Вправо" (
                <InfoKeyButtonBlock btnText={'\u25b6'} btnType="control" keyboardKey="D" />
                )
            </div>
            <div>
                Выбор символа осуществляется кнопками "Вверх"(
                <InfoKeyButtonBlock btnText={'\u25b2'} btnType="control" keyboardKey="W" />
                ) и "Вниз" (
                <InfoKeyButtonBlock btnText={'\u25bc'} btnType="control" keyboardKey="S" />
                )
            </div>
            <div>
                Выбор никнейма -
                {' '}
                <InfoKeyButtonBlock btnText="СТАРТ" btnType="additional" keyboardKey="Enter" />
            </div>
        </>
    );
};

export default LeadersPage;
