// import { useEffect, useState } from "react";

// function App() {
//   let[state,setstate]=useState([]);
//   useEffect(()=>{
//     let api=fetch("http://localhost:1177/users");
//     api.then((x)=>x.json()).then((x)=>setstate(x))
//   })
//   return (
//   <>
//    {
//     state.map((x)=>{
//       return(
//         <>
//         {x.id}
//         </>
//       )
//     })
//    }
//   </>
//   );
// }

// export default App;

//import Weater from './Weather/Weater'
//import Brithday from './Brithday/Brithday'
// import Todaybrithday from './Brithday/Todaybrithday'

import React from 'react'
//import Movies from './Moives/Movies'
import { useState } from 'react';
import { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
// import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';





const Getmovie = () => {
  let[data,setdata]=useState([]);
  let navigate=useNavigate();
  useEffect(()=>{
  let api1=fetch("https://api.themoviedb.org/3/trending/movie/day?&api_key=b004e95c3648699f48b98b9291d22255&language=en-US");
  api1.then((x)=>x.json()).then((x)=>setdata(x.results)
  )
  },[])
  console.log(data);
  let[serach,setserach]=useState("")
  function serachMoive(){
    fetch(`https://api.themoviedb.org/3/search/movie?query=${serach}&api_key=b004e95c3648699f48b98b9291d22255`)
    .then(x=>x.json()).then(x=>setdata(x.results))
  }
  
  return (
   <>
     <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">Link</Nav.Link>
            <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" disabled>
              Link
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              value={serach}
              onChange={(e)=>{setserach(e.target.value)}}
            />
            <Button variant="outline-success" onClick={serachMoive} >Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <Carousel>
    {
      data.map(x=>{
        return(
          <div key={x.id}>
          <img src={`https://image.tmdb.org/t/p/original/${x.backdrop_path}`} />
          <p className="legend">{x.title}</p>
          <p>{x.overview}</p>
          <p>{x.vote_average}</p>
      </div>
        )
      })
    }
    </Carousel>
    <div style={{display:"flex", flexWrap:"wrap", justifyContent:"space-between",alignItems:"center"}}>
      {
        data.map(cards=>{
          return(
            <>
            <Card style={{ width: '18rem', backgroundColor:"ActiveBorder", color:"white" }}>
      <Card.Img variant="top" src={`https://image.tmdb.org/t/p/original/${cards.backdrop_path}`} />
      <Card.Body>
        <Card.Title>{cards.title}</Card.Title>
        <Card.Text>
          {cards.overview}
        </Card.Text>
        <Button variant="primary"  onClick={()=>navigate("/movie",{state:{cards}})}>More details</Button>
      </Card.Body>
    </Card>
            </>
          )
        })
      }
    </div>
   </>
  )
}

export default Getmovie


