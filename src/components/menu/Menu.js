import React  from 'react';
import './menu.css';

const logo = './assets/logo.png';

const toggleMobileClasses = () => {
    let hamburgerIcon = document.getElementById('burger');
    hamburgerIcon.classList.toggle('is-active');
    let mobileMenu = document.getElementById('menu-container');
    mobileMenu.classList.toggle('opened');
}
const Menu = () => {
            return (
                <div>
                    <div id={'burger'} className="burger" onClick={toggleMobileClasses}>
                        <div className="lines">
                            <div className="line"></div>
                            <div className="line"></div>
                            <div className="line"></div>
                        </div>
                    </div>
                    <div id={'menu-container'} className="menu-container">
                        <div className="menu-logo"><img className="menu-logo-img" src={logo} alt="logo" /></div>
                        <div className="menu-title">Breed Finder</div>
                        <a className="menu-github" href="https://github.com/Loratadin/dog-breed-search" target="_blank" rel="noopener noreferrer">Source code in Git</a>
                        <a className="menu-twitter" href="https://twitter.com/PAIRProgrammin1?lang=en" target="_blank" rel="noopener noreferrer">Follow on Twitter</a>
                    </div>
                </div>
            );
        }

export default Menu;