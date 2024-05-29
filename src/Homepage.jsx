import React from 'react'
import { Link } from 'react-router-dom'

const Homepage = () => {

  return (
    <div  style={{
      backgroundColor: "orange",
      paddingTop: "100px",
      height: "100vh"
    }}>
      <div className='homepage'>
        <h1>Memory Test</h1>
        <div className='startbutton'>
          <Link to={"/game"}>
            <button className='startgame' > Start Game </button>
          </Link>
        </div>
      </div>
    </div>
  )
}
export default Homepage