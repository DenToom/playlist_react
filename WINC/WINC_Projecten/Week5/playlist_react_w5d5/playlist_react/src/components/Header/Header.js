import React from "react"

import './Header.module.css'
import Logo from './logo.png';



function Header() {
    return (
        <header>           
            <img src={Logo} alt='website logo' />
            {/* <img 
                src="http://www.pngall.com/wp-content/uploads/2016/05/Trollface.png" 
                alt="Problem?"
            /> */}
            <p>Playlist</p>
        </header>
       
        
    )
}

export default Header