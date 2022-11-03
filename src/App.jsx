import './App.scss';

import Header from './Components/Header/Header';
import Player from './Components/Player/Player';
import Conversation from './Components/Conversation/Conversation'
import NextVids from './Components/NextVids/NextVids'

function App() {
  return (
    <main>

      <Header />
      
      <Player />
      <Conversation />
      <NextVids />

    </main>
  );
}

export default App;
