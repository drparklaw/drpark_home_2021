import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {

    return (
        <div className="nav">
            <Link to="/">인사말씀</Link>
        </div>
    );
}

export default Navigation;