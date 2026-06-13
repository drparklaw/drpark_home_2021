import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
    return (
        <div className="nav">
            <Link to="/">Home</Link>

            {/* <Link to="/legal_dictionary">
                법률용어검색
            </Link> */}

            <Link to="/legal_dictionary">
                법률용어찾기
            </Link>

            {/* 
            <Link to="/barpass_predictor">
                변시합격예측
            </Link>
                */}
        </div>
    );
}

export default Navigation;