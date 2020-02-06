import React from 'react';
import './Header.css'

const Header = () => {
    return ( 
        <div className="headContainer">
            <h1>Say Hello to ReactJS</h1>
            <p>You will learn a Frontend framework from scratch, to become a Ninka Developer</p>

            <button className="btn btn-warning">Awesome!</button>
        </div>
     );
}

export default Header