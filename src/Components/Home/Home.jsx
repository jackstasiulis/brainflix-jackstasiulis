import Player from '../../Components/Player/Player';
import PlayerDetails from '../../Components/PlayerDetails/PlayerDetails';
import Conversation from '../../Components/Conversation/Conversation'
import NextVids from '../../Components/NextVids/NextVids'


import videoDetailsMain from '../../assets/Data/video-details.json'
import videoList from '../../assets/Data/videos.json';
import { useState } from 'react';
import { dateParser } from '../../Utilities/DateParser';

function Home() {

    const[activeVid, setActiveVid] = useState(videoDetailsMain[0]);
  
    const[videoListDetails] = useState(videoList);
  
  
    const updateActiveVid = (id) => {
      const foundVid = (videoDetailsMain.find((video) => video.id === id))
      setActiveVid(foundVid)
  
    }
  
  
    return (
      <main>
  
          <Player activeVid = {activeVid.image}/>
      <div className='desktopSplit'>
          <div className='desktopSplit__left'>
            <PlayerDetails activeVid = {activeVid} updateActiveVid = {updateActiveVid} dateParser = {dateParser} />
            <Conversation activeVid = {activeVid} updateActiveVid = {updateActiveVid} dateParser = {dateParser} />
          </div>
          <div className='desktopSplit__right'>
            <NextVids videoListDetails = {videoListDetails} updateActiveVid = {updateActiveVid} activeVid = {activeVid} />
          </div>
      </div>
  
      </main>
    );
  }
  
  export default Home;