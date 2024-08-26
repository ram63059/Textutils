import React from 'react';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';  
import  { useState } from 'react';
import Alert from './components/Alert';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light')
  const [heading ,setHeading]=useState('enable dark mode')
  const [alert, setAlert] = useState(null)

  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null)
      
    }, 3000);

  }
  
  const bgRemoveClass=()=>{
    document.body.classList.remove('bg-primary')
    document.body.classList.remove('bg-success')
    document.body.classList.remove('bg-warning')
  }
  
  const toggleMode=(cls)=>{
    bgRemoveClass();

    document.body.classList.add("bg-"+cls)
    if(mode==='light'){
      setMode('dark')
      setHeading("enable light mode")
      showAlert("Dark mode has been enabled","Success")
      document.body.style.backgroundColor="#085454"; 
    }else{
      setMode('light')
      setHeading("enable dark mode")
      showAlert("light mode has been enabled","success")
      document.body.style.backgroundColor="white";
    }
  }
  return (
    <div>
    <Router>
    <div>
      <Navbar title="textUtils" mode={mode} toggleMode={toggleMode}  heading={heading}  />
      <Alert alert={alert}/>

      <Switch>
          <Route exact path="/about">
            <About mode={mode} />
          </Route>
          <Route exact path="/"> 
          <TextForm   mode={mode} heading="enter the text to analyze" />
 
          </Route>
      </Switch>


    </div>
   </Router>
    </div>
   
  );
}

export default App;
