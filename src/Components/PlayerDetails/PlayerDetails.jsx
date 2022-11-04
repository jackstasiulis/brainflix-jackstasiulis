import './PlayerDetails.scss';

import viewsIcon from '../../assets/Icons/views.svg'
import likesIcon from '../../assets/Icons/likes.svg'


function PlayerDetails(props) {
    const {title, channel, timestamp, views, likes, description} = props.activeVid;
    return (

        <div>  
            

            <div className='player'>
            
            <div className='player__title--container'>
                <h1 className='player__title' >{title}</h1>
            </div>

            <div className='player__details--container'>
                <div className='player__details--left'>
                <p className='player__details--text__author'>{channel}</p>
                <p className='player__details--text__date'>{props.dateParser(timestamp)}</p>
                </div>
                <div className='player__details--right'>
                <div className='player__details--right__views'>
                    <img className='player__details--right__image' src={viewsIcon} alt="" />
                    <p className='player__details--text__views'>{views}</p>
                </div>
                <div className='player__details--right__likes'>
                    <img className='player__details--right__image' src={likesIcon} alt="" />
                    <p className='player__details--text__likes'>{likes}</p>
                </div>
                </div>
            </div>

                <div className='player__desc--container'>
                <p className='player__desc--text'>{description}</p>
                </div>
            </div>
        </div>
    );
}

export default PlayerDetails;