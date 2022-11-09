import './NextVids.scss';
import SideVid from './SideVid/SideVid';
import { Link } from 'react-router-dom';



function NextVids (props) {
    return(

    <section className='nextVids'>
        <p className='nextVids__title'>NEXT VIDEOS</p>
        <div className='nextVids__container'>
           {
            props.videoListDetails?.filter(singleVid => singleVid.id !== props.activeVid.id).map((singleVid) => (
                <Link to={`/videos/${singleVid.id}`} >
                <SideVid 
                key={singleVid.id}
                id={singleVid.id}
                image={singleVid.image}
                title={singleVid.title}
                channel={singleVid.channel}

                updateActiveVid = {props.updateActiveVid}
                />
                </Link>
            ))
           }
        </div>
    </section>
    );
}

export default NextVids;