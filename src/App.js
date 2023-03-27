import './App.css';
import { useState } from 'react';
import About from './components/About';
import Navbar from './components/Navbar'
import TextForm from './components/TextForm'
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

// let name = "Sanraj"
function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type
    })
    setTimeout(()=>{
      setAlert(null);
    }, 1500);
  }

  const toggleMode = ()=> {
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#212529';
      document.body.style.color = 'white';
      showAlert("DarkMode has been enabled", "success");
      document.title = "TextUtils-DarkMode";
    }else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      showAlert("LightMode has been enabled", "success");
      document.title = "TextUtils-LightMode";


    }
  }
  return (
    <>
    <Router>
      {/* <Navbar title="TextUtils" about="About TextUtils" /> */}
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <div className="container my-3">
      <Alert alert={alert} />
      <Routes>
            <Route exact path="/about" element={<About />}>
            </Route>
            <Route exact path="/" element={<TextForm heading="Enter text to analyze"  mode={mode} showAlert={showAlert} />}>
            </Route>
      </Routes>
      {/* <TextForm heading="Enter text to analyze"  mode={mode} showAlert={showAlert} /> */}
      </div>
      </Router>
    </>
  );
}

export default App;