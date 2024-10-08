import React, { useState } from 'react';
import Notfont from './Notfont';

const Weater = () => {
    let api={
        key:"64910addb8d5de1e3875d4394e8efa18",
        url:"https://api.openweathermap.org/data/2.5/weather",
    };
    function serachweter(){
     let us = fetch(`${api.url}/?q=${set}&appid=${api.key}&units=metric`);
      us.then(x=>x.json()).then((x)=>{
        console.log(x)
    }) }

    let usingkey=(e)=>{
        if(e.key === "Enter"){
            serachweter()
        }
    }
    let[set,setsearch]=useState("");
    let[wear,setWeather]=useState({})
    console.log(wear);
  return (
    <div>
        <input type="text" onChange={(e)=>setsearch(e.target.value)} onKeyPress={usingkey} />
        <button onClick={serachweter} >search</button>
        {
          (wear.main !== undefined)?
          (
            <>
            <h3>{wear.name}</h3>
            <p>{wear.main.temp}</p>
            </>
          ) :
          (<>
          <Notfont></Notfont>
          </>)
        }
    </div>
  )
}

export default Weater