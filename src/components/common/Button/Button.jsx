import styles from './Button.module.scss';

const Button = ({cn, children}) => {
    return (
        <button className={`${styles.button} ${cn ? cn : ''}`}>{children}</button>
    );
};

export default Button;
