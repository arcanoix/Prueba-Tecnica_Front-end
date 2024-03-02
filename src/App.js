
import { useState } from 'react';
import Error from './Error';
import Searching from './Searching';
import Profile from './components/Profile';
import './style.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ErrorContext from './context/ErrorBoundary';
import NotFound from './components/NotFound';



function App() {
  const [error, setError] = useState(null);

  const showError = (message) => {
    setError(message);
  };
  
  return (
    <ErrorContext.Provider value={{ error, showError }}>
    <BrowserRouter>
      <Routes>
        
          <Route path="/" element={<Searching />} />
          <Route path='/user/:login' element={<Profile />} />
          <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
    </ErrorContext.Provider>
  );
}

export default App;
