import React, { useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import Headerfile from './Header';
import './SidebarLayout.css';

const SidebarLayout = () => {
  const [openSection, setOpenSection] = useState('Introduction');
  const location = useLocation();

  const handleSectionToggle = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <div className="sidebar-layout">
      <aside className="sidebar">
        <Headerfile />
      </aside>
      <main className="content">
        <Outlet />
      </main>
    </div>
  );
};

export default SidebarLayout;
