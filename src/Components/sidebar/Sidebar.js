import React from 'react';
import "./Sidebar.css";
import pic from "../../img/profile/profile.jpg";

const Sidebar = ({ sidebarOpen, closeSidebar }) => {
    return (
        <div className={sidebarOpen ? "sidebar_responsive" : ""} id="sidebar">
            <div className='sidebar__title'>
                <div className='sidebar__img'>
                    <img src={pic} alt="profile pic" />
                    <h1>Nafiul Haque</h1>
                </div>
                <div className='sidebar__close__icon' onClick={() => closeSidebar()}>
                    <i className='fa fa-times' id='sidebarIcon'></i>
                </div>
            </div>
            <div className='sidebar__menu'>
                <div className='sidebar__link active__menu__link'>
                    <i className='fa fa-home'></i>
                    <a href='#'>Home</a>
                </div>
                <h2>OP</h2>
                <div className='sidebar__link'>
                    <i className='fa fa-home'></i>
                    <a href='#'>Services</a>
                </div>
                <div className='sidebar__link'>
                    <i className='fa fa-home'></i>
                    <a href='#'>Projects</a>
                </div>
                <div className='sidebar__link'>
                    <i className='fa fa-home'></i>
                    <a href='#'>Contact</a>
                </div>
                <div className='sidebar__link'>
                    <i className='fa fa-home'></i>
                    <a href='#'>Abouts</a>
                </div>
                <div className='sidebar__link'>
                    <i className='fa fa-home'></i>
                    <a href='#'>Abouts</a>
                </div>
                <div className='sidebar__link'>
                    <i className='fa fa-home'></i>
                    <a href='#'>Abouts</a>
                </div>
                <div className='sidebar__link'>
                    <i className='fa fa-home'></i>
                    <a href='#'>Abouts</a>
                </div>
                <div className='sidebar__link'>
                    <i className='fa fa-home'></i>
                    <a href='#'>Abouts</a>
                </div>
                <div className='sidebar__link'>
                    <i className='fa fa-home'></i>
                    <a href='#'>Abouts</a>
                </div>
                <div className='sidebar__link'>
                    <i className='fa fa-home'></i>
                    <a href='#'>Abouts</a>
                </div>
                <div className='sidebar__link'>
                    <i className='fa fa-home'></i>
                    <a href='#'>Abouts</a>
                </div>
                <div className='sidebar__link'>
                    <i className='fa fa-home'></i>
                    <a href='#'>Abouts</a>
                </div>
                <div className='sidebar__link'>
                    <i className='fa fa-home'></i>
                    <a href='#'>Abouts</a>
                </div>
                <div className='sidebar__link'>
                    <i className='fa fa-home'></i>
                    <a href='#'>Abouts</a>
                </div>
                <div className='sidebar__link'>
                    <i className='fa fa-home'></i>
                    <a href='#'>Abouts</a>
                </div>
            </div>
        </div>
    )
}

export default Sidebar