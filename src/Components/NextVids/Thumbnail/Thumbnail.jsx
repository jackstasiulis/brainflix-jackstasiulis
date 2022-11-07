import './Thumbnail.scss';

function Thumbnail (props) {

    const clickHandler = () => {
        props.updateActiveVid(props.id);
    }
        return(

    <div onClick={() => {clickHandler()}} className='nextVids__video'>
        <div>
            <img className='nextVids__video--image' src={props.image} alt="" />
        </div>
        <div className='nextVids__video--text'>
            <p className='nextVids__video--title'>{props.title}</p>
            <p className='nextVids__video--author'>{props.channel}</p>
        </div>
    </div>
        );
}

export default Thumbnail;