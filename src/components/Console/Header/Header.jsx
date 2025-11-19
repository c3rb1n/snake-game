import styles from './Header.module.scss';

const Header = () => (
    <div className={styles.header}>
        <hr className={styles.header__line} />
        <h1 className={styles.header__title}>RAVEN-RS01</h1>
        <hr className={styles.header__line} />
    </div>
);

export default Header;
