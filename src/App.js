import React from "react"
import About from "./about";
import {BrowserRouter, Route, Routes, Link} from 'react-router-dom'
import Form from "./about";
function Nav(){
  return(
    <>
    hf
    <ol>
      <li><Link to="/">home</Link></li>
      <li><Link to="/about">ABOUT</Link></li>
      <Form/>
    </ol>
    </>
  )
}

function App(){
  return(
    <>

      <Routes>
        <Route path="/" element={<Nav/>}></Route>
        <Route path="/about" element={<About/>}></Route>
      </Routes>
    
    </>
  )
}

export default App;