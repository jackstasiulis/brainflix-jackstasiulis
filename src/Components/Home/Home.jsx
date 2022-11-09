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