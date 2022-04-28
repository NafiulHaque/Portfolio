import React from 'react';
import "./Navbar.css"

const Navbar = ({ sidebarOpen, openSidebar }) => {
    return (
        <nav className='navbar'>
            <div className='nav_icon' onClick={() => openSidebar()}>
                <i className='fa fa-bars'></i>
            </div>
            <div className='navbar__left'>
                <a href='#'>Fiverr</a>
                <a href='#'>Up work</a>
                <a href='#' className='active_link'>Freelancher</a>
            </div>
            <div className='navbar__right'>
                <a href='#'>
                    <i className='fa-brands fa-facebook-f'></i>
                </a>
                <a href='#'>
                    <i className='fa-brands fa-twitter'></i>
                </a>
                <a href='#' >
                    <i className='fa-brands fa-linkedin-in'></i>
                </a>
                <a href='#' >
                    <i className='fa-brands fa-github'></i>
                </a>
            </div>
        </nav>
    )
}

export default Navbar