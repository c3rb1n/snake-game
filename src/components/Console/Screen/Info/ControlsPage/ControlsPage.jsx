import ControlsPageItem from './ControlsPageItem/ControlsPageItem';

const ControlsPage = () => {
    const controls = [
        {id: 1, btnText: '\u25b2', btnType: 'control', keyboardKey: 'W', description: 'Вверх'},
        {id: 2, btnText: '\u25c0', btnType: 'control', keyboardKey: 'A', description: 'Влево'},
        {id: 3, btnText: '\u25bc', btnType: 'control', keyboardKey: 'S', description: 'Вниз'},
        {id: 4, btnText: '\u25b6', btnType: 'control', keyboardKey: 'D', description: 'Вправо'},
        {id: 5, btnText: 'СТАРТ', btnType: 'additional', keyboardKey: 'Enter', description: 'Ввод, Запуск игры'},
        {id: 6, btnText: 'ПАУЗА', btnType: 'additional', keyboardKey: 'Пробел', description: 'Пауза в игре'},
        {id: 7, btnText: 'ИНФО', btnType: 'additional', keyboardKey: 'I', description: 'Справочная информация'},
        {id: 8, btnText: 'ЛИДЕРЫ', btnType: 'additional', keyboardKey: 'L', description: 'Таблица лидеров'},
    ];

    return (
        <>
            {controls.map(({id, btnText, keyboardKey, btnType, description}) => (
                <ControlsPageItem
                    key={id}
                    btnText={btnText}
                    btnType={btnType}
                    keyboardKey={keyboardKey}
                    description={description}
                />
            ))}
        </>
    );
};

export default ControlsPage;
