import styles from './PageLayout.module.scss';

const PageLayout = ({title, children}) => {
    return (
        <div className={styles.pageLayout}>
            <h2 className={styles.pageLayout__title}>{title}</h2>
            <div className={styles.pageLayout__page}>
                {children}
            </div>
        </div>
    );
};

export default PageLayout;
