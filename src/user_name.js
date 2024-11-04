import React from "react";

const User=({user,setuser,list,setlist,email,setemail,submit})=>{
    return (
        <>
            <div>Hello</div>
            <label>
                Enter Your Name
                <input type="text" placeholder="Enter your name" onChange={(e)=>{setuser(e.target.value)}}/>
            </label>
            <label>
                Enter Your Email
                <input type="email" placeholder="Enter your email" onChange={(e)=>{setemail(e.target.value)}}/>
            </label>
            <button onClick={submit}>Submit</button>
        </>
    )
}

export default User