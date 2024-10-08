// import React, { useState } from 'react'

// const Brithday = () => {
//     let[data,setdata]=useState();
//   return (
//     <>
//      <div>
//         <img src="" alt="" />
//      </div>
//     </>
//   )
// }

// export default Brithday

import users from "../dnb";
import React, { useState } from "react";

export default function Brithday(){
let[set,setState]=useState(users)
   return(
    <>
    <div style={{height:"100vh",width:"100%",background:"rgb(31,63,126)",
background:"linear-gradient(90deg, rgba(31,63,126,1) 35%, rgba(0,212,255,1) 100%)"}}>
    <div style={{height:"570px",width:"30%",position:"absolute",left:"40%",top:"12%",textAlign:"center",backgroundColor:"white",  boxShadow: "2px 2px 2px 2px #e7e7e7",borderRadius:"10px"}}>
     <h1>{set.length} Birthdays today</h1>
     <div style={{marginBottom:"20px"}}>
     {set.map((x)=>{
        return(
            <>
            <div style={{display:"flex",justifyContent:"space-evenly",marginBottom:"8px",
  boxShadow: "2px 3px 2px  #e7e7e7"}}>
            <img src={x.img} alt='' style={{height:"60px",width:"60px",borderRadius:"50%"}}/>
            {/* <ruby>{x.age}<rt style={{fontWeight:"bold"}}>{x.name}</rt></ruby> */}
            <div style={{height:"50px",paddingTop:"0px",position:"relative",top:"-18px"}}>
               <h5 style={{textAlign:"center",fontWeight:"bold",fontSize:"1.2rem"}}>{x.name} <br/>
                  {x.age}
               </h5>
            </div>
            <br/>
            </div>
            </>
        )}
        )}
     </div>
     <button onClick={()=>setState([])} style={{height:"40px",width:"150px",backgroundColor:"#008cba",color:"white",borderRadius:"5px",border:"none"}}>Clear All</button>
     </div>
    </div>
    </>
   ) 
}