import React from 'react'
import Navlink from './Header/Navlink'
import { FaBars, FaMapMarkerAlt } from 'react-icons/fa'
import logo from '../../public/img/rs.png'
import Header from './Header/Header'

function Layout({ children }) {
  return (
    <div>
      <div className="drawer scroll-smooth">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        {/* Header */}
        <div className="drawer-content flex flex-col p-2 bg-stone-100 " name='section_home'>
          <Header />
          {/* Navbar */}
          <div className="navbar bg-white  bg-opacity-50 shadow-md rounded-md px-2 lg:px-10 sticky top-0 z-50">
            <div className="flex-none lg:hidden">
              <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn  btn-square btn-ghost">
                <FaBars />
              </label>
            </div>
            <div className="hidden flex-none lg:block px-4 ">
              <ul className="menu bg-stone-100 lg:menu-horizontal rounded-box shadow-md text-green-600">
                <Navlink style="dropdown-content menu bg-base-100 rounded-box  w-56 p-2 shadow" my='my-0'/>
              </ul>
            </div>
            <div className="mx-2 flex-1 px-2 ">
              <div className='p-1 rounded-full drop-shadow-lg mr-2 ml-auto block lg:ml-0 lg:hidden'>
                <img src={logo} alt="" className="h-9 w-9 lg:h-12 lg:w-12" />
              </div>
            </div>
          </div>
          {/* MAIN CONTENT */}
          {children}
        </div>
        {/* Left Navbar */}
        <div className="drawer-side z-50">
          <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
          <ul className="menu  shadow-md bg-stone-100 min-h-full w-80 p-0">
            <li className='shadow-lg m-1'>
              <a><FaMapMarkerAlt />
                Jl. Wolter Monginsidi No.235, Pengajaran, Kec. Bumi Waras, Bandar Lampung </a>
            </li>
            <Navlink style="" my='my-2' />
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Layout