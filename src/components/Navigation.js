import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {

    return (
        <div className="nav">
            <Link to="/">처음으로</Link>
            <Link to="/new_cases">최신판례</Link>
        </div>
    );
}

export default Navigation;