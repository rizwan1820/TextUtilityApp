
import { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";



function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = 'grey';
      showAlert("Dark mode is enabled", "success");
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = 'white';

      showAlert("Light mode is enabled", "success");
    }
  }
  return (
    <>


      {/* <Navbar title="textutils" AboutText="Changing About" mode={mode}/> */}
      <Navbar title="textutils" AboutText="About" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />

      {/* <Router> */}

      <div className="container my-3">
        <TextForm heading="Enter the Text to analyze below " mode={mode} />

        {/* <Routes>
     <Route path='/' element={ <TextForm heading="Enter the Text to analyze below " mode={mode} />} />
   </Routes>

    <Routes>
     <Route path='/About' element={<About/>} />
   </Routes> }
  
 
  {/* <About /> */}

      </div>
      {/* </Router> */}
    </>
  );
}

export default App;
