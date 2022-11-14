import './App.scss';

import { BrowserRouter, Routes, Route} from 'react-router-dom'

import PageHeader from './Components/PageHeader/PageHeader';
import Home from './Components/Home/Home'
import Upload from './Components/Upload/Upload';


function App() {

  return (
    <BrowserRouter>
      <main>
        <PageHeader />
        <Routes>

          <Route path='/' element={<Home />} />
          <Route path='/upload' element={<Upload />} />
          <Route path='/videos/:id' element={<Home />} />
          
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
