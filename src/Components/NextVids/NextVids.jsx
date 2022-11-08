import './NextVids.scss';
import SideVid from './SideVid/SideVid';


function NextVids (props) {
    return(

    <section className='nextVids'>
        <p className='nextVids__title'>NEXT VIDEOS</p>
        <div className='nextVids__container'>
           {
            props.videoListDetails.filter(singleVid => singleVid.id !== props.activeVid.id).map((singleVid) => (
                <SideVid 
                key={singleVid.id}
                id={singleVid.id}
                image={singleVid.image}
                title={singleVid.title}
                channel={singleVid.channel}

                updateActiveVid = {props.updateActiveVid}
                />
            ))
           }
        </div>
    </section>
    );
}

export default NextVids;