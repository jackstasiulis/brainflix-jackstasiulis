import Player from '../../Components/Player/Player';
import PlayerDetails from '../../Components/PlayerDetails/PlayerDetails';
import Conversation from '../../Components/Conversation/Conversation'
import NextVids from '../../Components/NextVids/NextVids'


// import videoDetailsMain from '../../assets/Data/video-details.json'
// import videoList from '../../assets/Data/videos.json';
import { useState } from 'react';
import { dateParser } from '../../Utilities/DateParser';

import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import axios from "axios";

function Home() {

    const[activeVid, setActiveVid] = useState([]);
    // const[activeVid, setActiveVid] = useState([videoDetailsMain[0]]);
  
    const[videoListDetails, setVideoListDetails] = useState([]);
    // const[videoListDetails, setVideoListDetails] = useState(videoList);

    // const updateActiveVid = (id) => {
    //   const foundVid = (videoDetailsMain.find((video) => video.id === id))
    //   setActiveVid(foundVid)
    // }

    const {id} = useParams();
    // const [videoDataMain, setVideoDataMain] = useState([]);
    
    useEffect(()=> {
      console.log('video main mounted?');

      axios
        .get(`https://project-2-api.herokuapp.com/videos/${id}?api_key=<0e5174a0-d772-40a4-9218-ad902e35564f>`)
        .then(response => {
          console.log('main api accessed??')
          setActiveVid(response.data)
          console.log(response.data)
        }).catch((error) => console.log(error));
    }, [id]);


    useEffect(()=> {
      console.log('video side mounted?');

      axios
        .get(`https://project-2-api.herokuapp.com/videos/?api_key=<0e5174a0-d772-40a4-9218-ad902e35564f>`)
        .then(response => {
          console.log('side api accessed??')
          console.log(response.data)
          setVideoListDetails(response.data)
        }).catch((error) => console.log(error));
    }, []);
    // console.log(activeVid);


    // 0e5174a0-d772-40a4-9218-ad902e35564f


// this is for the small vids list
// https://project-2-api.herokuapp.com/videos/?api_key=<0e5174a0-d772-40a4-9218-ad902e35564f>
  
    return (
      <main>
  
          <Player activeVid = {activeVid.image}/>
      <div className='desktopSplit'>
          <div className='desktopSplit__left'>
            <PlayerDetails activeVid = {activeVid} dateParser = {dateParser} />
            <Conversation activeVid = {activeVid} dateParser = {dateParser} />
          </div>
          <div className='desktopSplit__right'>
            <NextVids videoListDetails = {videoListDetails} activeVid = {activeVid} />
          </div>
      </div>
  
      </main>
    );
  }
  
  export default Home;

  // return (
  //   <main>

  //       <Player activeVid = {activeVid.image}/>
  //   <div className='desktopSplit'>
  //       <div className='desktopSplit__left'>
  //         <PlayerDetails activeVid = {activeVid} updateActiveVid = {updateActiveVid} dateParser = {dateParser} />
  //         <Conversation activeVid = {activeVid} updateActiveVid = {updateActiveVid} dateParser = {dateParser} />
  //       </div>
  //       <div className='desktopSplit__right'>
  //         <NextVids videoListDetails = {videoListDetails} updateActiveVid = {updateActiveVid} activeVid = {activeVid} />
  //       </div>
  //   </div>

  //   </main>
  // );