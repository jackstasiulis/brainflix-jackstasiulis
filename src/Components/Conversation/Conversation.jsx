import './Conversation.scss';

import userPic from '../../assets/Images/Mohan-muruge.jpg';
import videoDetailsMain from '../../assets/Data/video-details.json'





function Conversation () {
    return(

<body>
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

      <article className='conversation__comment'>
        <div className='conversation__comment--pic'>
          <img className='conversation__comment--pic__image' src="" alt="" />
        </div>
        <div className='conversation__text'>
          <div className='conversation__comment--details'>
            <p className='conversation__text--bold'>{videoDetailsMain[0].comments[0].name}</p>
            <p className='conversation__text--date'>{videoDetailsMain[0].comments[0].timestamp}</p>
          </div>
          <div className='conversation__comment--body'>
            <p className='conversation__comment--body__text'>{videoDetailsMain[0].comments[0].comment}</p>
          </div>
        </div>
      </article>
      <article className='conversation__comment'>
        <div className='conversation__comment--pic'>
          <img className='conversation__comment--pic__image' src="" alt="" />
        </div>
        <div className='conversation__text'>
          <div className='conversation__comment--details'>
            <p className='conversation__text--bold'>{videoDetailsMain[0].comments[1].name}</p>
            <p className='conversation__text--date'>{videoDetailsMain[0].comments[1].timestamp}</p>
          </div>
          <div className='conversation__comment--body'>
            <p className='conversation__comment--body__text'>{videoDetailsMain[0].comments[1].comment}</p>
          </div>
        </div>
      </article>
    </section>
</body>  
    )
}

export default Conversation;