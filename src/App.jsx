import './App.scss';

import Header from './Components/Header/Header';
import Player from './Components/Player/Player';
import PlayerDetails from './Components/PlayerDetails/PlayerDetails';
import Conversation from './Components/Conversation/Conversation'
import NextVids from './Components/NextVids/NextVids'

function App() {
  return (
    <main>

      <Header />
      <Player />
  <div className='desktopSplit'>
      <div className='desktopSplit__left'>
        <PlayerDetails />
        <Conversation />
      </div>
      <div className='desktopSplit__right'>
        <NextVids />
      </div>
  </div>

    </main>
  );
}

export default App;
