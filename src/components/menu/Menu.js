import React from 'react';
import './menu.css';

const Menu = () => {
    return (
        <div className="menu-container">
            <div className="menu-logo"><img className="menu-logo-img" src={require('../../assets/logo.png')} alt={'logo'}/></div>
            <div className="menu-title">Breed Finder</div>
            <div className="menu-github">Source code in Git</div>
            <div className="menu-twitter">Follow on Twitter</div>
        </div>
    );
}

export default Menu;