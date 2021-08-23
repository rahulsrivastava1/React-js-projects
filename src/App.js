import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import About from './Components/About';
import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('white');
  const toogleMode = () => {
    if (mode === 'white') {
      setMode('black');
      document.body.style.backgroundColor = 'black';
    }
    else {
      setMode('white');
      document.body.style.backgroundColor = 'white';
    }
  }
  return (
    <>
      <Router>
        <Navbar title="TextUtils" mode={mode} toogleMode={toogleMode} />
        <div className="container my-3">
          <Switch>
            <Route exact path="/about">
              <About heading="About Us" mode={mode} />
            </Route>
            <Route exact path="/">
              <TextForm heading="Enter your text to Analayze below" mode={mode} />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
