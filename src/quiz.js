import React, { useEffect, useState } from "react";
import question from "./question.json";
import confetti from "canvas-confetti";
import "./App.css";

const Quiz = () => {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [timer, setTimer] = useState(60);
  const [minute,setminute]=useState(14);
  const [show, setshow] = useState(false);
  const [store, setStore] = useState([]);
  const [id, setid] = useState(1);
  
//   console.log(question[current]);
//   console.log(question[current].question);
//   console.log(current);
//   console.log(question[current].option);
let paper=()=>{
  confetti({
    particleCount:1000,
    spread:500
  })
}

  let correct = (btn, value) => {
    //console.log(btn);
    setid((pre)=>pre+1);
    if (question.length - 1 > current) {
      //  console.log(true);
      setCurrent((pre) => pre + 1);
      //console.log(current);
    } else {
      //console.log(false);
      setshow(true);
      paper()
      //console.log(current);
    }
    if (value == question[store[current]].answer) {
      setScore((pre) => pre + 1);
      // setTimer(30);
      //console.log(current);
    }
  };

  useEffect(() => {
    let time;
    if (timer > 0 && !show) {
      time = setInterval(() => {
        setTimer((pre) => pre - 1);
      }, 1000);
    } else if(timer==0 && !timer>0 && !show){
      setminute((pre)=>pre-1)
      setTimer(60)
    }
    if(minute==0 && timer==0){
      clearInterval(time);
      setshow(true)
      paper()
    }

    return () => clearInterval(time);
  }, [timer, show]);
  let num;
  useEffect(() => {
    console.log("useEffect");
    console.log("work");
    const getUniqueRandomNumbers = (count, min, max) => {
        const uniqueNumbers = new Set();
    
        while (uniqueNumbers.size < count) {
          const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
          uniqueNumbers.add(randomNum);
        }
        const randomNumbersArray = Array.from(uniqueNumbers);
        console.log("Generated random numbers:", randomNumbersArray);
        setStore(randomNumbersArray);
        return randomNumbersArray
       };
       return ()=>{
        let value=getUniqueRandomNumbers(25,0,question.length-1)
        console.log("value",value);
       console.log("store",store);
        // num=value;
        // console.log("number",num);
        // console.log(num[current]);
        // console.log(num[1]);
        // console.log(question[num[current]].question);
        
       }
  }, []); // Empty array ensures this runs once
    
  //console.log(num[current]);
  //console.log(value[current]);
 //console.log(question[store[current]]);
  
 //console.log(typeof(store[current]));
 //console.log(store.length);

 if (store.length === 0) {
  return <div>Loading...</div>; // Handle loading state
}

  return (
    <div className="quiz">
      {!show ? (
        <>
          <h1 className="que">{id}.{question[store[current]].question}</h1>
          <div className="btns">
            {question[store[current]].option.map((value, index) => (
              <button
                className="btn"
                key={index}
                onClick={() => {
                  correct(this, value);
                }}
              >
                {value}
              </button>
            ))}
          </div>
          <div>{minute}m:{timer}s</div>
        </>
      ) : (
        <>
          <h1>Your Score is</h1>
          <div  className="score">
            {score}/{question.length}
          </div>
        </>
      )}
    </div>
  );
};

export default Quiz;
