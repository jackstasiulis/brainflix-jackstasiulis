import axios from 'axios';
import './ConvoComment.scss';

function ConvoComment (props) {

// ==================== Delete comment function (not working at the moment) ==================== //

const handleDeleteComment = (event) => {
    event.preventDefault();
    if(!props.videoId){
        props.videoId = ('84e96018-4022-434e-80bf-000ce4cd12b8');
      }

    axios
        // .delete(`https://project-2-api.herokuapp.com/videos/${props.videoId}/comments/${props.id}?api_key=<0e5174a0-d772-40a4-9218-ad902e35564f>`)
        .delete(`http://localhost:5002/videos/${props.videoId}/comments/${props.id}`)
        .then(() => {
            props.mainVideoRequest(props.videoId)
            }
        )
}
    
    return(
        <article className='conversation__comment'>
            <div className='conversation__comment--pic'>
            <img className='conversation__comment--pic__image' alt="" />
            </div>
            <div className='conversation__text'>
            <div className='conversation__comment--details'>
                <p className='conversation__text--bold'>{props.name}</p>
                <p className='conversation__text--date'>{props.timestamp}</p>
            </div>
            <div className='conversation__comment--body'>
                <p className='conversation__comment--body__text'>{props.comment}</p>
            </div>
                <button className='conversation__comment--delete' onClick={handleDeleteComment} >Delete</button>
            </div>
        </article>
    )
}

export default ConvoComment;