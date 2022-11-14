import './Conversation.scss';

import ConvoComment from './ConvoComment/ConvoComment';

import userPic from '../../assets/Images/Mohan-muruge.jpg';

import axios from 'axios';


function Conversation (id, mainVideoRequest, activeVid, dateParser) {


// ==================== Post comment function ==================== //

const handlePostComment = (event) => {
  event.preventDefault();

  if(event.target.comment.value === ''){
    alert('Please add text to your commment!');
    return;
}
  const newComment ={
    comment: event.target.comment.value,
    name: 'bob simpy'
  }
  console.log(newComment)
    axios
      .post(`https://project-2-api.herokuapp.com/videos/${id}/comments?api_key=<0e5174a0-d772-40a4-9218-ad902e35564f>`, newComment)
      .then(() => {
        mainVideoRequest(id);
      }
      )
    }

    return(
      <div>
          <section className='conversation'>
            <p className='conversation__text--bold'>{activeVid?.comments?.length} Comments</p>
            <form className='conversation__form' onSubmit={handlePostComment}>
              <div className='conversation__form--pic__container'>
                <img className='conversation__form--pic' src={userPic} alt="" />
              </div>
              <div className='conversation__form--title__container'>
                <div className='conversation__form--textBox__container'>
                  <p className='conversation__form--title'>JOIN THE CONVERSATION</p>
                  <textarea className='conversation__form--textBox' name="comment" id="" cols="30" rows="10" placeholder='Add a new comment'></textarea>
                </div>
                <div>
                  <button className='conversation__form--button'>COMMENT</button>
                </div>
              </div>
            </form>
            
            {
            activeVid?.comments?.map((vidComment) => (
              <ConvoComment 
              videoId={id}

              key={vidComment.id}
              id={vidComment.id}
              name={vidComment.name}
              comment={vidComment.comment}
              likes={vidComment.likes}
              timestamp={dateParser(vidComment.timestamp)}
              
              mainVideoRequest={mainVideoRequest}
              />
            ))
            }
          </section>
      </div>  
    );
}

export default Conversation;