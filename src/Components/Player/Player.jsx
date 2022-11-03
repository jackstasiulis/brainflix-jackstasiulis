import './Player.scss';

import videoDetailsMain from '../../assets/Data/video-details.json'

function Player() {
    return (

        <section className='player__image--container'>
            <img className='player__image' src={videoDetailsMain[0].image} alt="" />
        </section>

        );
    }
    
    export default Player;