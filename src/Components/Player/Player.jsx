import './Player.scss';

// ==================== Structure for main video window ==================== //

function Player(props) {
    return (

        <section className='player__image--container'>
            <video className='player__image' poster={props.activeVid} controls ></video>
        </section>

        );
    }
    
    export default Player;