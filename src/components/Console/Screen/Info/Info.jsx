import {useEffect} from 'react';
import styles from './Info.module.scss';
import PageLayout from './PageLayout/PageLayout';
import ControlsPage from './ControlsPage/ControlsPage';
import LevelsPage from './LevelsPage/LevelsPage';
import LeadersPage from './LeadersPage/LeadersPage';
import MarkersBlock from './MarkersBlock/MarkersBlock';

const Info = ({selectedInfoMarkerId, setSelectedInfoMarkerId}) => {
    const pages = [
        {id: 1, title: 'Управление', component: <ControlsPage />},
        {id: 2, title: 'Уровень сложности', component: <LevelsPage />},
        {id: 3, title: 'Таблица лидеров', component: <LeadersPage />}
    ];
    const {title, component} = pages.find(page => page.id === selectedInfoMarkerId);

    useEffect(() => {
        const keydownHandler = event => {
            if (event.key === 'd' || event.key === 'D') {
                setSelectedInfoMarkerId(i => i + 1 > 3 ? 1 : i + 1);
            } else if (event.key === 'a' || event.key === 'A') {
                setSelectedInfoMarkerId(i => i - 1 < 1 ? 3 : i - 1);
            }
        };

        document.querySelector('body').addEventListener('keydown', keydownHandler);

        return () => document.querySelector('body').removeEventListener('keydown', keydownHandler);
    }, [selectedInfoMarkerId]);

    useEffect(() => () => setSelectedInfoMarkerId(1), []);

    return (
        <div className={styles.info}>
            <div className={styles.info__inner}>
                <PageLayout title={title}>
                    {component}
                </PageLayout>
                <MarkersBlock selectedInfoMarkerId={selectedInfoMarkerId} />
            </div>
        </div>
    );
};

export default Info;
