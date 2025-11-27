import styles from './Marker.module.scss';

const Marker = ({id, selectedInfoMarkerId}) => {
    const checkSelectedMarker = id => selectedInfoMarkerId === id ? styles.marker_selected : '';

    return (
        <div className={`${styles.marker} ${checkSelectedMarker(id)}`}></div>
    );
};

export default Marker;
