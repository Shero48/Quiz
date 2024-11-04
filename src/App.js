import logo from './logo.svg';
import Quiz from './quiz';
import clg_logo from './image/logo.jpg'
import cse from './image/cse_dpt.jpg'
import './App.css';
import React from 'react';
import  {useEffect}  from 'react';
import  {useState}  from 'react';
import User from './user_name';
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getDatabase,ref,push,onValue,remove,set } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-database.js";

function App() {
  const [user,setuser]=useState();
  const [email,setemail]=useState();
  const [list,setlist]=useState(false)
  const url={
    db:"https://sancet-e0afa-default-rtdb.firebaseio.com/"
  }
  const app=initializeApp(url);
  const data=getDatabase(app);
  const users=ref(data,"users");

  const submit=()=>{
    console.log("run");
    console.log(user);
    console.log(email);
    if(!user && !email){
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

      {!list ? <User user={user} setuser={setuser} list={list} setlist={setlist} email={email} setemail={setemail} submit={submit}/> :<Quiz user={user} email={email} users={users}/>}
    </div>
  );
}

export default App;
