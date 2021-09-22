import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {

    return (
        <div className="nav">
            <Link to="/">인사말씀</Link>
            <Link to="/lawtlin">로틀린</Link>
        </div>
    );
}

export default Navigation;