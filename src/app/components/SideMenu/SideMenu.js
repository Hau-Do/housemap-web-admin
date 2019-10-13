import React from 'react';
import './SideMenu.scss';
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo/HousemapLogo.svg';
import avatar from '../../../assets/img/avatar.jpg';

const SideMenu = () => {

  return (
    <div id="my-menu">
  {/* Main Sidebar Container */}
  <aside className="main-sidebar sidebar-dark-primary elevation-4 sidebar-container" style={{ overflowY: 'unset' }}>
    {/* Brand Logo */}
    <a href="index3.html" className="brand-link brand-container">
      <img src={logo} alt="logo" className="brand-image" />
      <span className="brand-text" style={{ fontWeight: '500' }}>HouseMap</span>
    </a>
    {/* Sidebar */}
    <div className="sidebar">
      {/* Sidebar user panel (optional) */}
      <div className="user-panel mt-3 pb-3 mb-3 d-flex">
        <div className="image">
          <img src={avatar} className="img-circle" alt="u" style={{ height: '42px', width: '42px', objectFit: 'cover' }}/>
        </div>
        <div className="info">
          <a href="localhost:3000" className="d-block">Peter Do</a>
        </div>
      </div>
      {/* Sidebar Menu */}
      <nav className="mt-2">
        <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
          {/* Add icons to the links using the .nav-icon class
         with font-awesome or any other icon font library */}
          <li className="nav-item has-treeview menu-open">
            <a href="localhost:3000" className="nav-link active">
              <i className="nav-icon fas fa-tachometer-alt" />
              <p>
                Người dùng
                <i className="right fas fa-angle-left" />
              </p>
            </a>
            <ul className="nav nav-treeview">
              <li className="nav-item">
                <Link to="/user-activity" className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <p>Nhật ký hoạt động</p>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/user-management" className="nav-link active">
                  <i className="far fa-circle nav-icon" />
                  <p>Đang hoạt động</p>
                </Link>
              </li>
              <li className="nav-item">
                <Link to='/user-blocked' className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <p>Đã khoá</p>
                </Link>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
      {/* /.sidebar-menu */}
    </div>
    {/* /.sidebar */}
  </aside>
</div>

  );
};

export default SideMenu;
