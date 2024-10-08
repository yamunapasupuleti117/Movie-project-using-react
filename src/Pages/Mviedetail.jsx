import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import YouTube from 'react-youtube';

const Mviedetail = () => {
    let location=useLocation();
    let specificmovie=location.state.cards;
    console.log(specificmovie);
    
    let[Trail,setTrail]=useState("");
    async function getmove(id){
        fetch(`http://api.themoviedb.org/3/movie/${id}/videos?api_key=b004e95c3648699f48b98b9291d22255`)
        .then(x=>x.json()).then((x)=>setTrail(x.results[0].key)
        )
    }
    
  return (
    <>
     <div style={{height:"700px",width:"60%", border:"solid 2px ", backgroundColor:"ActiveBorder", color:"whitesmoke" }}>
        <img src={`https://image.tmdb.org/t/p/original/${specificmovie.backdrop_path}`}  alt="" style={{height:"500px",width:"100%"}} />
        <h1>{specificmovie.title}</h1>
        <p>{specificmovie.overview}</p>
        <br />
        <button onClick={()=>getmove(specificmovie.id)}> play trailer</button>
        <div>
            {Trail && <YouTube videoId={Trail}></YouTube> }
        </div>
     </div>
    </>
  )
}

export default Mviedetail