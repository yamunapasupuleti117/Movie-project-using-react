import React, { useEffect, useState } from 'react'

const Movies = () => {
    let[data,setdata]=useState([]);
    useEffect(()=>{
    let api1=fetch("https://api.themoviedb.org/3/trending/movie/day?&api_key=b004e95c3648699f48b98b9291d22255&language=en-US");
    api1.then((x)=>x.json()).then((x)=>setdata(x.results)
    )
    },[])
    
  return (
    <>
    {
     data.map(x=>{
        <h1></h1>
     })
    }
    </>
  )
}

export default Movies