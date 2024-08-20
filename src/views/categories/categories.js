import React from 'react'
import Navbar from "../../components/header/navbar"
import catimg from "./cat.jpeg"

function categories() {
    return (
        <div>
            <Navbar />
           <h1 className='tag-name'>Categories</h1> 
           <img className='img' src={catimg}/>

        </div>
    )
}

export default categories