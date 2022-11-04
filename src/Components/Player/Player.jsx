import './Player.scss';

import videoDetailsMain from '../../assets/Data/video-details.json'

function Player(props) {
    return (

        // <section className='player__image--container'>
        //     <img className='player__image' src={props.activeVid} alt="" />
        // </section>

        <section className='player__image--container'>
            <video className='player__image' poster={props.activeVid} controls ></video>
        </section>


        );
    }
    
    export default Player;