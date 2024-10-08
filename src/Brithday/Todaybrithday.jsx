// import axios from 'axios';
// import React, { useEffect, useState } from 'react'


// const Todaybrithday = () => {
//     let[api,setapi]=useState([]);
//     useEffect(()=>{
//        axios.get("http://localhost:2023/users")
//        .then(x=>setapi(x.data))
//     },[])
//   return (
//     <div>
//         <div style={{backgroundColor:"pink"}}>
//             <div>
//               <h1 style={{textAlign:"center"}}>{api.length} to day birthdays</h1>
//             </div>
//          {
//             api.map((x)=>{
//                 <>
//                 return(
//                     <>
//                     <div style={{alignItems:"center", display:"flex", gap:"30px", height:"", width:"600px", backgroundColor:"green", marginLeft:"500px" }}>
//                     <img src={x.img} alt="" style={{height:"150px", width:"150px", borderRadius:"50%"}} />
//                     <h1>{x.name}</h1>
//                     <br />
//                     <h2>{x.age}</h2>
//                     </div>
//                     </>
//                 )
//                 <button style={{padding:"30px 200px", fontWeight:"20px", marginLeft:"500px"}} onClick={()=>api([])}>clear all</button>
//           </>
//             })
//          }
        
//         </div>
//         </div>
//   )
// }

// export default Todaybrithday