import React from "react";

const User=({user,setuser,list,setlist,email,setemail,submit})=>{
    return (
        <div className="user">
            <div className="user_input">
                <h1>Welcome</h1>
                <label>
                    Enter Your Name :
                    <input type="text" placeholder="Enter your name" onChange={(e)=>{setuser(e.target.value)}} required/>
                </label>
                <label>
                    Enter Your Email :
                    <input type="email" placeholder="Enter your email" onChange={(e)=>{setemail(e.target.value)}} required/>
                </label>
                <label>
                    Enter Your College Name :
                    <input type="text" placeholder="Enter your College Name" onChange={(e)=>{setemail(e.target.value)}} required/>
                </label>
                <button onClick={submit}>Submit</button>
            </div>
        </div>
    )
}

export default User