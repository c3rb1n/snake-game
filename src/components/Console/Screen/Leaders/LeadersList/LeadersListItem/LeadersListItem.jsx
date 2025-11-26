import styles from './LeadersListItem.module.scss';

const LeadersListItem = ({scores, name, lvl}) => (
    <li className={styles.item}>
        <div className={styles.item__scoresBlock}>
            <span className={styles.item__scores}>{scores}</span>
            <span className={styles.item__name}>{name}</span>
            <span className={styles.item__lvl}>{lvl}</span>
        </div>
    </li>
);

export default LeadersListItem;
