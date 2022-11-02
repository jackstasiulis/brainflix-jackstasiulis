import './App.scss';
import bflogo from './assets/Logo/BrainFlix-logo.svg';
import headerPic from './assets/Images/Mohan-muruge.jpg';
import search from './assets/Icons/search.svg';
import views from './assets/Icons/views.svg'
import likes from './assets/Icons/likes.svg'
import upload from './assets/Icons/upload.svg'

import videoDetailsBig from './assets/Data/video-details.json'
// import videoDetailsSmall from './assets/Data/videos.json'



function App() {
  return (
<main>
    <header className='header'>
      <div className='header__logo--container'>
        <img className='header__logo' src={bflogo} alt="BrainFlix site logo"/>
      </div>
      <div className='header__items'>
        <input className='header__items--input' type="text" placeholder='Search'/>
        <img className='header__items--pic' src={headerPic} alt="" />
      </div>
      <div className='header__button--container'>
        <button className='header__button'>UPLOAD</button>
      </div>
    </header>



    <div className='player__image--container'>
        <img className='player__image' src={videoDetailsBig[0].image} alt="" />
      </div>
      
      
    <body className='player'>
      
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
    </body>

    <section className='conversation'>
      <p className='conversation__text--bold'>3 Comments</p>
      <div className='conversation__form'>
        <div className='conversation__form--pic__container'>
          <img className='conversation__form--pic' src={headerPic} alt="" />
        </div>
        <div className='conversation__form--title__container'>
          <p className='conversation__form--title'>JOIN THE CONVERSATION</p>
          <textarea className='conversation__form--textBox' name="" id="" cols="30" rows="10" placeholder='Add a new comment'></textarea>
          <button className='conversation__form--button'>COMMENT</button>
        </div>
      </div>

      <article className='conversation__comment'>
        <div className='conversation__comment--pic'>
          <img className='conversation__comment--pic__image' src="" alt="" />
        </div>
        <div className='conversation__text'>
          <div className='conversation__comment--details'>
            <p className='conversation__text--bold'>Micheal Lyons</p>
            <p className='conversation__text--date'>08/09/2021</p>
          </div>
          <div className='conversation__comment--body'>
            <p className='conversation__comment--body__text'>They BLEW the ROOF off at their last event, once everyone started figuring out they were going. This is still simply the greatest opening of an event I have EVER witnessed.</p>
          </div>
        </div>
      </article>
      <article className='conversation__comment'>
        <div className='conversation__comment--pic'>
          <img className='conversation__comment--pic__image' src="" alt="" />
        </div>
        <div className='conversation__text'>
          <div className='conversation__comment--details'>
            <p className='conversation__text--bold'>Micheal Lyons</p>
            <p className='conversation__text--date'>08/09/2021</p>
          </div>
          <div className='conversation__comment--body'>
            <p className='conversation__comment--body__text'>They BLEW the ROOF off at their last event, once everyone started figuring out they were going. This is still simply the greatest opening of an event I have EVER witnessed.</p>
          </div>
        </div>
      </article>
    </section>

    <section className='nextVids'>
      <p className='nextVids__title'>NEXT VIDEOS</p>
      <div className='nextVids__container'>
        
        <div className='nextVids__video'>
          <div>
            <img className='nextVids__video--image' src={videoDetailsBig[1].image} alt="" />
          </div>
          <div className='nextVids__video--text'>
            <p className='nextVids__video--title'>Become a Travel Pro In One Easy Lesson</p>
            <p className='nextVids__video--author'>Todd Welch</p>
          </div>
        </div>
        <div className='nextVids__video'>
          <div>
            <img className='nextVids__video--image' src={videoDetailsBig[1].image} alt="" />
          </div>
          <div className='nextVids__video--text'>
            <p className='nextVids__video--title'>Become a Travel Pro In One Easy Lesson</p>
            <p className='nextVids__video--author'>Todd Welch</p>
          </div>
        </div>
      </div>
    </section>
</main>
  );
}

export default App;
