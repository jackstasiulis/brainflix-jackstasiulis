import Player from '../../Components/Player/Player';
import PlayerDetails from '../../Components/PlayerDetails/PlayerDetails';
import Conversation from '../../Components/Conversation/Conversation'
import NextVids from '../../Components/NextVids/NextVids'

import { useState } from 'react';
import { dateParser } from '../../Utilities/DateParser';

import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import axios from "axios";


function Home() {

    const[activeVid, setActiveVid] = useState([]);
    const[videoListDetails, setVideoListDetails] = useState([]);

    const {id} = useParams();
    

/**
 * function to setting a single video object in state. 
 * @param {string} videoId 
 */

  function mainVideoRequest (videoId) {
    axios
        .get(`http://localhost:5002/videos/${videoId}`)
        .then(response => {
          setActiveVid(response.data)
        }).catch((error) => console.log(error));
  }

  /**
   * function to load the side list of videos
   */
  function sideVideoRequest () {
    axios
        .get(`http://localhost:5002/videos`)
        .then(response => {
          setVideoListDetails(response.data)
          if(!id){
            mainVideoRequest(response.data[0].id)
          }
        }).catch((error) => console.log(error));
  }

    useEffect(()=> {
        mainVideoRequest(id);
    }, [id]);
      
    useEffect(()=> {
        sideVideoRequest();
    }, []);
  

    return (
      <main>
  
          <Player activeVid = {activeVid.image}/>
      <div className='desktopSplit'>
          <div className='desktopSplit__left'>
            <PlayerDetails activeVid = {activeVid} dateParser = {dateParser} />
            <Conversation id={activeVid.id} activeVid = {activeVid} dateParser = {dateParser} mainVideoRequest={mainVideoRequest}/>
          </div>
          <div className='desktopSplit__right'>
            <NextVids videoListDetails = {videoListDetails} activeVid = {activeVid} />
          </div>
      </div>
  
      </main>
    );
  }
  
  export default Home;