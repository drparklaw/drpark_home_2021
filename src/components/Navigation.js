import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

function Navigation() {
    return (
        <div className="nav">
            <Link to="/">인물소개</Link>
            <Link to="/sgfactor">양형인자</Link>
        </div>
    );
}

export default Navigation;