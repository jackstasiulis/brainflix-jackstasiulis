import './App.scss';

import { BrowserRouter, Routes, Route} from 'react-router-dom'

import Header from './Components/Header/Header';
import Home from './Components/Home/Home'
import Upload from './Components/Upload/Upload';


function App() {

  return (
    <BrowserRouter>
      <main>
        <Header />
        <Routes>

          <Route path='/Home' element={<Home />} />
          <Route path='/Upload' element={<Upload />} />
          
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
