import React from 'react';
import { Link } from 'react-router-dom';
//import './Navigation.css';

function Navigation() {

    return (
        <div className="nav">
            <Link to="/">인사말씀</Link>
            <Link to="/sgfactor">범죄통계</Link>
        </div>
    );
}

export default Navigation;