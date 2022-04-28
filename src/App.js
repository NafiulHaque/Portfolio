
import { useState } from 'react';
import './App.css';
import Main from './Components/main/Main';
import Navbar from './Components/navbar/Navbar';
import Sidebar from './Components/sidebar/Sidebar';

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
      <Main />
      <Sidebar sidebarOpen={sidebarOpen} closeSidebar={closeSidebar} />

    </div>
  );
}

export default App;
