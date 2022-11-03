import './NextVids.scss';

import videoDetailsSmall from '../../assets/Data/videos.json'

function NextVids () {
    return(

    <section className='nextVids'>
        <p className='nextVids__title'>NEXT VIDEOS</p>
        <div className='nextVids__container'>
            
            <div className='nextVids__video'>
            <div>
                <img className='nextVids__video--image' src={videoDetailsSmall[1].image} alt="" />
            </div>
            <div className='nextVids__video--text'>
                <p className='nextVids__video--title'>Become a Travel Pro In One Easy Lesson</p>
                <p className='nextVids__video--author'>Todd Welch</p>
            </div>
            </div>
            <div className='nextVids__video'>
            <div>
                <img className='nextVids__video--image' src={videoDetailsSmall[1].image} alt="" />
            </div>
            <div className='nextVids__video--text'>
                <p className='nextVids__video--title'>Become a Travel Pro In One Easy Lesson</p>
                <p className='nextVids__video--author'>Todd Welch</p>
            </div>
            </div>
        </div>
    </section>



    );
}

export default NextVids;