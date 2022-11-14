import axios from 'axios';
import './ConvoComment.scss';


function ConvoComment (videoId, id, mainVideoRequest, name, timestamp, comment) {

// ==================== Delete comment function ==================== //

const handleDeleteComment = (event) => {
    event.preventDefault();
    if(!videoId){
        videoId = ('84e96018-4022-434e-80bf-000ce4cd12b8');
      }

    axios
        .delete(`https://project-2-api.herokuapp.com/videos/${videoId}/comments/${id}?api_key=<0e5174a0-d772-40a4-9218-ad902e35564f>`)
        .then(() => {
            mainVideoRequest(videoId)
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
                <p className='conversation__text--bold'>{name}</p>
                <p className='conversation__text--date'>{timestamp}</p>
            </div>
            <div className='conversation__comment--body'>
                <p className='conversation__comment--body__text'>{comment}</p>
            </div>
                <button className='conversation__comment--delete' onClick={handleDeleteComment} >Delete</button>
            </div>
        </article>
    )
}

export default ConvoComment;