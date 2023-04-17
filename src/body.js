
import React from 'react';
import './body.css';


function body() {
    return(
        <div className="body">
            <div className="body__up">
            <h1>Hi User</h1>
              <h2>Account Number: 7041643691</h2>
              <h3>Current Balance: 396765</h3>
            </div>
    
            <div className="body__down">
                <button>Profile</button>
                
            </div>
        </div>

    )
}

export default body;
