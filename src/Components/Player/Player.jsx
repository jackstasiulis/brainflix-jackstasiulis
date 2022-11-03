import './Player.scss';

import videoDetailsBig from '../../assets/Data/video-details.json'
import views from '../../assets/Icons/views.svg'
import likes from '../../assets/Icons/likes.svg'

function Player() {
    return (

        <body>  
            <section className='player__image--container'>
                <img className='player__image' src={videoDetailsBig[0].image} alt="" />
            </section>
            

            <div className='player'>
            
            <div className='player__title--container'>
                <h1 className='player__title' >{videoDetailsBig[0].title}</h1>
            </div>

            <div className='player__details--container'>
                <div className='player__details--left'>
                <p className='player__details--text__author'>By Red Crow</p>
                <p className='player__details--text__date'>07/11/2021</p>
                </div>
                <div className='player__details--right'>
                <div className='player__details--right__views'>
                    <img className='player__details--right__image' src={views} alt="" />
                    <p className='player__details--text__views'>1,001,023</p>
                </div>
                <div className='player__details--right__likes'>
                    <img className='player__details--right__image' src={likes} alt="" />
                    <p className='player__details--text__likes'>110,985</p>
                </div>
                </div>
            </div>

                <div className='player__desc--container'>
                <p className='player__desc--text'>On a gusty day in Southern Utah, a group of 25 daring mountain bikers blew the doors off what is possible on two wheels, unleashing some of the biggest moments the sport has ever seen. While mother nature only allowed for one full run before the conditions made it impossible to ride, that was all that was needed for event veteran Kyle Strait, who won the event for the second time -- eight years after his first Red Cow Rampage title.</p>
                </div>
            </div>
        </body>
    );
}

export default Player;