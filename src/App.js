
import { useState } from 'react';
import './App.css';
import Main from './Components/main/Main';
import Navbar from './Components/navbar/Navbar';
import Sidebar from './Components/sidebar/Sidebar';

import { Routes, Route } from "react-router-dom";
import Services from './Components/Pages/Services/Services';
import Works from './Components/Pages/Works/Works';
import Projects from './Components/Pages/Projects/Projects';
import Abouts from './Components/Pages/Abouts/Abouts';
import StyleSwitcher from './Components/styleSwitcher/StyleSwitcher';

function App() {
  const [sidebarOpen, setSideBarOpen] = useState(false);

  const openSidebar = () => {
    setSideBarOpen(true);
  }
  const closeSidebar = () => {
    setSideBarOpen(false);
  }
  return (
    <div className="container">
      <Navbar sidebarOpen={sidebarOpen} openSidebar={openSidebar} />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/Services' element={<Services />} />
        <Route path='/works' element={<Works />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/abouts' element={<Abouts />} />

      </Routes>

      <Sidebar sidebarOpen={sidebarOpen} closeSidebar={closeSidebar} />
      <StyleSwitcher />



    </div>
  );
}

export default App;
