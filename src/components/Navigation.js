import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {

    return (
        <div className="nav">
            <Link to="/">Home</Link>
            {/*<Link to="/new_cases">Latest Cases</Link>
            <Link to="/sgfactor/">범죄통계</Link>*/}
        </div>
    );
}

export default Navigation;