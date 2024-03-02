import Searching from './Searching';
import Profile from './components/Profile';
import './style.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Searching />} />
         <Route path='/user/:login' element={<Profile />} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
