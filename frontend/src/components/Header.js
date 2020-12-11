import React from 'react';
import '../styles/header.css';

function Header() {

    // *****************************
    // TODO
    // Get the title/author/version from api calls to backend
    return (
        <div className="header">
            <div className="header__container">
                <div className="header__title">
                    <h1>Lyrics Generator</h1>
                </div>
                <div className="header__author">
                    <h4>by Justin Fu</h4>
                </div>
                <div className="header__version">
                    <h4>v0.1.0</h4>
                </div>
            </div>
        </div>
    )
    // *****************************
}

export default Header;
