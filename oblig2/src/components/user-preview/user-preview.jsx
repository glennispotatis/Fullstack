import './user-preview.css';
import home from '../../assets/home-filled.svg';
import campus from '../../assets/industry-11.svg';

function UserPreview({ user }) {
    const place = user.place;
    const available = user.status === 'available';
    const isBusy = available ? '' : 'busy';
    const img = place === 'on-campus' ? campus : home;

    return (
        <div className="UserPreview">
            <div className="textContainer"></div>
            <img className="svgIcon" alt="" src={img} />
            <p className="text">{user.name}</p>
            <div className={['dot', isBusy].join(' ')}></div>
        </div>
    );
}

export default UserPreview;