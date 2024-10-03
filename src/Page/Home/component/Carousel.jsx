import React from 'react'
import { Link } from 'react-scroll';
import { useState, useEffect } from 'react';
import courosel1_img from '../../../../public/img/carousel.png'
import courosel2_img from '../../../../public/img/carousel2.png'
import baground1 from '../../../../public/img/peta.png'
import { FaBookReader, FaWhatsapp } from 'react-icons/fa';
import FramerMotion from '../../../Layout/Component/FramerMotion';
import ButtonMotion from '../../../Layout/Component/ButtonMotion';
import ButtonHref from '../../../Layout/Component/ButtonHref';

function Carousel() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const slides = [
        {
            id: 1,
            imageUrl: '',
            title1: 'Rumah Sakit',
            title2: 'Bumi Waras',
            descriotion1: 'Hadir Untuk Melayani Warga',
            descriotion2: 'Bandar Lampung',
            descriotion3: 'dan Sekitarnya',
            image: courosel2_img,
        },
        {
            id: 1,
            imageUrl: '',
            title1: 'Rumah Sakit',
            title2: 'Bumi Waras',
            descriotion1: 'Hadir Untuk Melayani Warga',
            descriotion2: 'Bandar Lampung',
            descriotion3: 'dan Sekitarnya',
            image: courosel1_img,
        },
    ];
    useEffect(() => {
        const interval = setInterval(() => {
            handleNext();
        }, 5000);
        return () => clearInterval(interval);
    }, [currentIndex]);
    const handleNext = () => {
        setCurrentIndex((currentIndex + 1) % slides.length);
    };


    return (
        <>
            <FramerMotion initial='Carousel'>
                <div className="relative w-full h-screen overflow-hidden">
                    <div className="flex transition-transform duration-700 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                        {slides.map((slide) => (
                            <div key={slide.id} className="w-full flex-shrink-0 h-screen max-h-96  bg-cover bg-center" style={{ backgroundImage: `url(${slide.imageUrl})` }}>
                                <div className="flex relative z-20 items-center overflow-hidden">
                                    <div className="container mx-auto px-5 lg:px-35 flex justify-center relative py-8">
                                        <div className="gap-4 sm:w-2/3 lg:w-2/5 flex items-center justify-center lg:items-start flex-col relative z-20  lg:mx-4 bg-cover bg-center" style={{ backgroundImage: `url(${baground1})` }}>
                                            <span className="w-20 h-2 bg-green-600 text-green-600">
                                            </span>
                                            <h1 className="font-bebas-neue text-5xl mt-2 sm:text-5xl font-black flex items-center lg:items-start flex-col leading-none text-green-600">
                                                {slide.title1}
                                                <span className="text-5xl sm:text-5xl">
                                                    {slide.title2}
                                                </span>
                                            </h1>
                                            <div className='bg-green-600 text-center lg:text-left p-3 rounded-md mt-2 hover:bg-green-700 cursor-pointer'>
                                                <p className='text-2xl text-white  font-bold'>{slide.descriotion1} <span className='text-yellow-300'> {slide.descriotion2} </span>{slide.descriotion3}</p>
                                            </div>
                                            <div className="flex mt-8">
                                                <ButtonMotion>
                                                    <ButtonHref label="WhatsApp" link='https://wa.link/iv3qth' type='primary'>
                                                        <FaWhatsapp />
                                                    </ButtonHref>
                                                </ButtonMotion>
                                                <ButtonMotion>
                                                    <Link to='section2' smooth={true} duration={500} className="flex items-center font-bold cursor-pointer py-2 px-4 rounded-lg bg-transparent border-2 border-green-600 text-green-600 hover:bg-green-700 hover:text-white text-md">
                                                        <FaBookReader />  <span className='ml-2'> Read More</span>
                                                    </Link>
                                                </ButtonMotion>
                                            </div>
                                        </div>
                                        <div className="hidden sm:block sm:w-1/3 lg:w-2/5 relative  lg:mx-4">
                                            <img src={slide.image} className="max-w-xs md:max-w-sm m-auto" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </FramerMotion>
        </>
    )
}

export default Carousel