import styles from './Button.module.scss';

const Button = ({cn, clickHandler, children}) => {
    return (
        <div onClick={clickHandler} className={`${styles.button} ${cn ? cn : ''}`}>{children}</div>
    );
};

export default Button;
