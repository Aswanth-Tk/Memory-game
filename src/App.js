import React from 'react'
import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Homepage from './Homepage'
import Gamepage from './Gamepage'

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<Homepage/>}/>
        <Route path={"/game"} element={<Gamepage/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
