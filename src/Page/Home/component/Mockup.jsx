import React from 'react'
import jkn from '../../../../public/img/jkn.png'
import FramerMotion from '../../../Layout/Component/FramerMotion'
function Mockup() {
  return (
    <>
        <div className="grid grid-flow-row h-full items-center justify-center text-center px-4 bg-gradient-to-b from-stone-100 to-green-500">
    <FramerMotion initial='MobileJKN'>
          <div className='text-center max-w-3xl mx-auto' name="section2">
            <p className='font-bebas-neue text-4xl font-bold text-green-600'>Solusi Sehat Dalam Genggaman Dengan Aplikasi Mobile JKN</p>
            <p className=' text-gray-500 text-xl mt-4'>
              Nikmati kemudahan layanan kesehatan di genggaman Anda. Daftar, cek status kepesertaan, dan akses fitur lengkap lainnya langsung dari aplikasi Mobile JKN! 
              <a href="http://" target="_blank" rel="noopener noreferrer" className='link link-primary'>Dowonload !</a>
            </p>
          </div>
          <div className="mt-7">
            <div className="mockup-phone border-hidden shadow-lg mx-auto">
              <div className="camera"></div>
              <div className="display">
                <div className="artboard artboard-demo phone-1">
                  <img src={jkn} alt="Aplikasi Mobile JKN" className="w-full h-full object-cover rounded-lg" />
                </div>
              </div>
            </div>
          </div>
      </FramerMotion>
        </div>
    </>
  )
}

export default Mockup