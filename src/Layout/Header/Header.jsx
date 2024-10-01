import React from 'react'
import { FaBars, FaFacebook, FaInstagram, FaMapMarkerAlt, FaPhone } from 'react-icons/fa'
import logo from '../../../public/img/rs.png'
function Header() {
    return (
        <>
            <div className='hidden lg:block'>
                <div className='mx-14  flex justify-between py-2'>
                    <div>
                        <img src={logo} alt="" className="h-9 w-9 lg:h-20 lg:w-20" />
                    </div>
                    <div className="flex items-center max-w-lg">
                        <FaMapMarkerAlt className='text-green-600' /><span className='ml-5'> Jl. Wolter Monginsidi No.235, Pengajaran, Kec. Bumi Waras, Bandar Lampung</span>
                    </div>
                    <div className="flex items-center">
                        <FaPhone className='text-green-600' /><span className='ml-5'>(0721) 261122</span>
                    </div>
                    <div className='flex items-center justify-center font-medium text-2xl text-green-600'>
                        <a href="https://www.instagram.com/rs.bumiwaras/" target="_blank" rel="a" className='mx-4'><FaInstagram /></a>
                        <a href="https://www.facebook.com/rs.bumiwarasbandarlampung/" target="_blank" rel="a" className='mx-4'><FaFacebook /></a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header