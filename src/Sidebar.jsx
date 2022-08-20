import React from 'react'
import { Link } from "react-router-dom";

function Sidebar() {
 return (
    // <!-- Sidebar -->
    <ul class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">


        <a class="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
            <div class="sidebar-brand-icon rotate-n-15">
                <i class="fas fa-laugh-wink"></i>
            </div>
            <div class="sidebar-brand-text mx-3">SB Admin <sup>2</sup></div>
        </a>

 
        <hr class="sidebar-divider my-0"/>

        <li class="nav-item active">
            <Link class="nav-link" to="/portal/dashboard">
                <i class="fas fa-fw fa-tachometer-alt"></i>
                <span>Dashboard</span></Link>
             
        </li>
        <li class="nav-item active">
        <Link class="nav-link" to="/portal/users">
                <i class="fas fa-fw fa-tachometer-alt"></i>
                <span>Users</span></Link>
        </li>
        <li class="nav-item active">
        <Link class="nav-link" to="/portal/products">
                <i class="fas fa-fw fa-tachometer-alt"></i>
                <span>Products</span></Link>
        </li>
        </ul>
 )
}

export default Sidebar;