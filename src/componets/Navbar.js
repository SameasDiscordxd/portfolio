import React from "react"
import '../styles/Navbar.css'
import { Link } from "react-router-dom"


function Navbar () {
    return(
        <div className="Navimage">
            <ul className='Navlist'>
                <li><Link className="Links" to='/'>Home</Link></li>
                <li><Link className="Links" to='/About'>About</Link></li>
                <li><Link className="Links" to='/Contact'>Contact</Link></li>
            </ul>
        </div>
    )
}




export default Navbar