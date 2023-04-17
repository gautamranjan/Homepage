
import React from 'react';
import './Header.css';
import finzlogo from './finzlogo.png';

function Header() {
    return(
        <div className="header">

            <header className="App-header">
                <img src={finzlogo} className="App-logo" alt="finzlogo" />
            </header>
    
           
             

            
            <div className="header__right">
                <button>Home</button>
                
            </div>
        </div>

    )
}

export default Header;