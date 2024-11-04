import logo from './logo.svg';
import Quiz from './quiz';
import clg_logo from './image/logo.jpg'
import cse from './image/cse_dpt.jpg'
import './App.css';
import React from 'react';
import  {useEffect}  from 'react';
import  {useState}  from 'react';
import User from './user_name';

function App() {
  const [user,setuser]=useState('');
  const [email,setemail]=useState('');
  const [list,setlist]=useState(false)

  const submit=()=>{
    console.log("run");
    console.log(user);
    console.log(email);
    if(!user=='' && !email==''){
    setlist(true)
    }
  }
  
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

      {!list ? <User user={user} setuser={setuser} list={list} setlist={setlist} email={email} setemail={setemail} submit={submit}/> :<Quiz user={user} email={email} />}
    </div>
  );
}

export default App;
