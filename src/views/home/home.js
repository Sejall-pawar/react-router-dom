import React from 'react'
import Navbar from "../../components/header/navbar"
import homeimg from "./home.jpeg"

function home() {
    return (

        <div>
            <Navbar />
            
            <h1 className='tag-name'>Home</h1>
            <img className='img' src={homeimg}/>
        </div>
    )
}

export default home