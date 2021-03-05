import './status-image.css';
import standing from '../../assets/standing-19@2x.png';
import home from '../../assets/Home.svg';
import campus from '../../assets/Wireframe.svg';

function StatusImage(props) {
    const {available, onCampus} = props;
    const isBusy = !available ? 'busy' : '';
    const tooltip = `${available ? 'available' : 'busy'}, ${onCampus ? 'campus' : 'home'}`;
    const place = onCampus ? campus : home;

    return(
        <div className={'StatusImage ' + isBusy} title={tooltip}>
            <img src={place} alt="Campus" />
            <img src={standing} alt="Standing" className="person" />
        </div>
    );
}

StatusImage.defaultProps = {
    available: true,
    onCampus: true
}

export default StatusImage;