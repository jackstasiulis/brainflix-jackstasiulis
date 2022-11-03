import './NextVids.scss';

import videoDetailsSmall from '../../assets/Data/videos.json'

const renderNextVids = () => {
    for(let i = 0; i <= videoDetailsSmall.length; i++){
        return videoDetailsSmall[i];
    }
}

console.log(renderNextVids);


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
                <p className='nextVids__video--title'>{videoDetailsSmall[1].title}</p>
                <p className='nextVids__video--author'>{videoDetailsSmall[1].channel}</p>
            </div>
            </div>
            <div className='nextVids__video'>
            <div>
                <img className='nextVids__video--image' src={videoDetailsSmall[2].image} alt="" />
            </div>
            <div className='nextVids__video--text'>
                <p className='nextVids__video--title'>{videoDetailsSmall[2].title}</p>
                <p className='nextVids__video--author'>{videoDetailsSmall[2].channel}</p>
            </div>
            </div>
        </div>
    </section>
    );
}

export default NextVids;