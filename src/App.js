import logo from './logo.svg';
import Quiz from './quiz';
import clg_logo from './image/logo.jpg'
import cse from './image/cse_dpt.jpg'
import './App.css';
import React from 'react';
import  {useEffect}  from 'react';
import  {useState}  from 'react';

function App() {
  
  
  return (
    <div className="app">
      <div className='header'>
        <div className='left'><img src={clg_logo} alt='college logo'/></div>
        <div className='center'>
          <h1>St.Anne's</h1>
          <div className='name'>College Of Engineering And Technology</div>
        </div>
        <div className='right'><img src={cse} alt='dept logo'/></div>
      </div>
      <h1 className='tech'>TECHSYNERGY ' 24</h1>
      <b className='event'>Code Canvas - Quiz</b>
      <div className='q-cen'><Quiz/></div>
    </div>
  );
}

export default App;
