import styles from './MarkersBlock.module.scss';
import Marker from './Marker/Marker';

const MarkersBlock = ({selectedInfoMarkerId}) => {
    const markers = [{id: 1}, {id: 2}, {id: 3}];

    return (
        <div className={styles.markerBlock}>
            {markers.map(({id}) => <Marker key={id} id={id} selectedInfoMarkerId={selectedInfoMarkerId} />)}
        </div>
    );
};

export default MarkersBlock;
