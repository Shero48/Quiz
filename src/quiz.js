import React, { useEffect, useState } from "react";
//import question from "./question.json";
import confetti from "canvas-confetti";
import "./App.css";

const Quiz = () => {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [timer, setTimer] = useState(60);
  const [minute,setminute]=useState(14);
  const [show, setshow] = useState(false);
  // const [store, setStore] = useState([]);
  // const [load, setload] = useState(false);
  const [id, setid] = useState(1);
  
//   console.log(question[current]);
//   console.log(question[current].question);
//   console.log(current);
//   console.log(question[current].option);

const question=[
  {
    "id": "1",
    "question": "Which of the following is a popular front-end development framework maintained by Google?",
    "option":["React","Angular","Vue.Js","Django"],
    "answer": "Angular"
  },
  {
    "id": "2",
    "question": "javascript and java are same language true or false?",
    "option": ["true","false"],
    "answer": "false"
  },
  {
    "id": "3",
    "question": "Which of the following is used to store and query data in a tabular format in web development?",
    "option":["Database","API","JSON","XML"],
    "answer": "database"
  },
  {
    "id": "4",
    "question": "What is the purpose of the “form” element in HTML?",
    "option":["It defines a hyperlink","It creates a container for metadata","It allows users to input data and submit it to the server","It defines a section in a document"],
    "answer": "It allows users to input data and submit it to the server"
  },
  {
    "id": "5",
    "question": "Which JavaScript function is used to change the content of an HTML element?",
    "option":["modify()","change()","update()","innerHTML()"],
    "answer": "InnerHTML"
  },
  {
    "id": "6",
    "question": "Which HTTP method is typically used to retrieve data from a web server?",
    "option":["GET","POST","PUT","DELETE"],
    "answer": "GET"
  },
  {
    "id": "7",
    "question": "Which HTML tag is used to define a table in web development?",
    "option":["{table}","{div}","{form}","{img}"],
    "answer": "{table}"
  },
  {
    "id": "8",
    "question": "Which of the following is an example of a front-end web development framework/library?",
    "option":["Express.js","Django","Flask","React.js"],
    "answer": "React.js"
  },
  {
    "id": "9",
    "question": "What is the purpose of the “cookie” in web development?",
    "option":["To store data on the client’s browser for future use","To encrypt sensitive information during transmission","To handle server-side logic","To create user authentication systems"],
    "answer": "To store data on the client’s browser for future use"
  },
  {
    "id": "10",
    "question": "What does the acronym “REST” stand for in the context of web development?",
    "option":["Representational State Transfer","Responsive Elements for Seamless Transition","Readable Element Style Transfer","Real-time Server Technology"],
    "answer": "Representational State Transfer"
  },
  {
    "id": "11",
    "question": "Which CSS property is used to create rounded corners for an HTML element?",
    "option":["border-radius","corner-radius","rounded-corners","box-radius"],
    "answer": "border-radius"
  },
  {
    "id": "12",
    "question": "Which HTML tag is used to create a hyperlink?",
    "option":["{a}","{link}","{h1}","{p}"],
    "answer": "{a}"
  },
  {
    "id": "13",
    "question": "What is the purpose of the script tag in HTML?",
    "option":["To define the page’s structure","To include external CSS styles","To include external JavaScript code","To create hyperlinks"],
    "answer": "To include external JavaScript code"
  },
  {
    "id": "14",
    "question": "_____ is NOT a popup message in javascript?",
    "option":["prompt","confirm","alert","Error"],
    "answer": "Error"
  },
  {
    "id": "15",
    "question": ".NET Framework was designed and developed by ______",
    "option":["Microsoft","IBM","Oracle","Google"],
    "answer": "Microspft"
  },
  {
    "id": "16",
    "question": "What does CORS stand for in web development?",
    "option":["Cross-Origin Resource Sharing","Cross-Object Resource Security","Content-Origin Resource Sharing","Client-Origin Resource System"],
    "answer": "Cross-Origin Resource Sharing"
  },
  {
    "id": "17",
    "question": "In a RESTful API, which HTTP method is typically used to update an existing resource?",
    "option":["GET","POST","PUT","DELETE"],
    "answer": "PUT"
  },
  {
    "id": "18",
    "question": "What was JavaScript originally called when it was first released?",
    "option":["java","Netscape","Mocha","LiveScript"],
    "answer": "LiveScript"
  },
  {
    "id": "19",
    "question": "In JavaScript, which method iterates over the elements of an array and creates a new array based on the results of the function specified within said method?",
    "option":["map()","reverse()","split()","concat()"],
    "answer": "map()"
  },
  {
    "id": "20",
    "question": "In JavaScript, what is the name of the method used to remove white space from the beginning and end of a string?",
    "option":[".reduce()",".slice()",".trim()",".substring()"],
    "answer": "InnerHTML"
  }
]

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
    if (value == question[current].answer) {
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
  // useEffect(() => {
  //   console.log("useEffect");
  //   console.log("work");
  //   const getUniqueRandomNumbers = (count, min, max) => {
  //       const uniqueNumbers = new Set();
    
  //       while (uniqueNumbers.size < count) {
  //         const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
  //         uniqueNumbers.add(randomNum);
  //       }
  //       const randomNumbersArray = Array.from(uniqueNumbers);
  //       console.log("Generated random numbers:", randomNumbersArray);
  //       setStore(randomNumbersArray);
  //       return randomNumbersArray
  //      };
  //      return ()=>{
  //       let value=getUniqueRandomNumbers(20,0,question.length-1)
  //       console.log("value",value);
  //      console.log("store",store);
  //       // num=value;
  //       // console.log("number",num);
  //       // console.log(num[current]);
  //       // console.log(num[1]);
  //       // console.log(question[num[current]].question);
        
  //      }
  // }, []); // Empty array ensures this runs once
    
  //console.log(num[current]);
  //console.log(value[current]);
 //console.log(question[store[current]]);
  
 //console.log(typeof(store[current]));
 //console.log(store.length);
//store.length === 0
// setInterval(()=>{
//   if (!store.length) {
//     setload(true)
//     return <div>Loading...</div>; // Handle loading state
//   }
// },1000)
 

  return (
    <div className="quiz">
      {!show  ? (
        <>
          <h1 className="que">{id}.{question[current].question}</h1>
          <div className="btns">
            {question[current].option.map((value, index) => (
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
