import React from 'react';
import VisitorCounter from './VisitorCounter';

function Title({ text }) {

    return (
        <header className="Header">

            <div className="HeaderTopRow">

                <h1 className="HeaderTitle">
                    {text}
                </h1>

                <div className="HeaderCounter">
                    <VisitorCounter />
                </div>

            </div>

            <p className="Strap">
                Korean Civil Law · Legal Data · Computational Law
            </p>

        </header>
    );
}

export default Title;