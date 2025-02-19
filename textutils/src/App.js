import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Textform from './Components/Textform';
import About from './Components/About';

import React, {useState} from 'react';

function App() {

  const [appMode, setappMode] = useState('light');
  const toggleMode = () => {  
    if(appMode === 'light'){
      setappMode('dark');
      document.body.style.backgroundColor = '#042743';
      console.log('Dark mode has been enabled');
    }
    else{
      setappMode('light');
      document.body.style.backgroundColor = 'white';
      console.log('light mode has been enabled');
    }
  }
  return (
 <>
 <Navbar toggleMode={toggleMode} appMode={appMode}/>
 <div className="container my-3">
 <Textform  heading = "Enter your text to analyize" appMode={appMode}/>
 <About />
  </div>
 </>
  );
}

export default App;
