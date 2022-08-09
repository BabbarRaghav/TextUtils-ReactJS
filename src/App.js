import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react'
import About from './components/About';
import { 
  Switch,
  BrowserRouter as Router,
  Route
} from 'react-router-dom'


function App() {
  const [mode, setmode] = useState('light')
  const toggleMode = ()=>{
    if(mode==='light'){
      setmode('dark')
      document.body.style.backgroundColor = 'black'
    }
    else{
      setmode('light')
      document.body.style.backgroundColor = 'white'
    }
  }
  return (
    <>
    <Router>
      <Navbar title="TextUtil" mode={mode} toggleMode={toggleMode}/>
      <div className="container">
      <Switch>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/">
            <TextForm mode={mode}/>
          </Route>
        </Switch>
        {/* <About/> */}
      </div>
      </Router>
    </>
  );
}

export default App;
