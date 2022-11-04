import './Conversation.scss';

import ConvoComment from './ConvoComment/ConvoComment';

import userPic from '../../assets/Images/Mohan-muruge.jpg';
import videoDetailsMain from '../../assets/Data/video-details.json'





function Conversation (props) {
    return(

<div>
    <section className='conversation'>
      <p className='conversation__text--bold'>3 Comments</p>
      <div className='conversation__form'>
        <div className='conversation__form--pic__container'>
          <img className='conversation__form--pic' src={userPic} alt="" />
        </div>
        <div className='conversation__form--title__container'>
          <div className='conversation__form--textBox__container'>
            <p className='conversation__form--title'>JOIN THE CONVERSATION</p>
            <textarea className='conversation__form--textBox' name="" id="" cols="30" rows="10" placeholder='Add a new comment'></textarea>
          </div>
          <div>
            <button className='conversation__form--button'>COMMENT</button>
          </div>
        </div>
      </div>

      
      {
      props.activeVid.comments.map((vidComment) => (
        <ConvoComment 
        key={vidComment.id}
        id={vidComment.id}
        name={vidComment.name}
        comment={vidComment.comment}
        likes={vidComment.likes}
        timestamp={props.dateParser(vidComment.timestamp)}
        

        // activeVid = {props.activeVid} 
        // updateActiveVid = {props.updateActiveVid}
        />
      ))
      }
    </section>
</div>  
    );
}

export default Conversation;