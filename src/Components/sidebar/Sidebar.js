import React from 'react';
import "./Sidebar.css";
import pic from "../../img/profile/profile.jpg";

import { Routes, Route, NavLink } from 'react-router-dom';
import Services from '../Pages/Services/Services';


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
                <NavLink to="/" className={(navData) => navData.isActive ? "active__menu__link" : ""} onClick={() => closeSidebar()}>
                    <div className='sidebar__link'>
                        <i className='fa fa-home'></i>
                        <span>Home</span>
                    </div>
                </NavLink>


                <h2>OP</h2>
                <NavLink to="/Services" className={(navData) => navData.isActive ? "active__menu__link" : ""} onClick={() => closeSidebar()}>
                    <div className='sidebar__link'>
                        <i class="fa fa-desktop"></i>
                        <a href='#'>Services</a>
                    </div>
                </NavLink>
                <NavLink to="/works" className={(navData) => navData.isActive ? "active__menu__link" : ""} onClick={() => closeSidebar()}>
                    <div className='sidebar__link'>
                        <i class="fa fa-briefcase"></i>
                        <a href='#'>Works On</a>
                    </div>
                </NavLink>
                <NavLink to="/projects" className={(navData) => navData.isActive ? "active__menu__link" : ""} onClick={() => closeSidebar()}>
                    <div className='sidebar__link'>
                        <i className='fa fa-file'></i>
                        <a href='#'>Projects</a>
                    </div>
                </NavLink>
                <NavLink to="/abouts" className={(navData) => navData.isActive ? "active__menu__link" : ""} onClick={() => closeSidebar()}>
                    <div className='sidebar__link'>
                        <i className='fa fa-address-card'></i>
                        <a href='#'>Abouts</a>
                    </div>
                </NavLink>

            </div>
        </div >
    )
}

export default Sidebar