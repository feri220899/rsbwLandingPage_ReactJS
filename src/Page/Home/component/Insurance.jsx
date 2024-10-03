import React, { useEffect, useState } from 'react'
import bpjs_img from '../../../../public/img/support/bpjs_img.png'
import aia_img from '../../../../public/img/support/aia_img.png'
import car_img from '../../../../public/img/support/car_img.png'
import adira_img from '../../../../public/img/support/adira_img.png'
import zurich_img from '../../../../public/img/support/zurich_img.png'
import berdikasi_img from '../../../../public/img/support/berdikasi_img.png'
import bintang_img from '../../../../public/img/support/bintang_img.png'
function Insurance() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const slides = [
        {
            id: 1,
            imageUrl1: bpjs_img,
            imageUrl2: aia_img,
            imageUrl3: car_img,
            imageUrl4: adira_img,
        },
        {
            id: 1,
            imageUrl1: zurich_img,
            imageUrl2: berdikasi_img,
            imageUrl3: bintang_img,
            imageUrl4: 'h',
        },
    ];
    useEffect(() => {
        const interval = setInterval(() => {
            handleNext();
        }, 6000);
        return () => clearInterval(interval);
    }, [currentIndex]);
    const handleNext = () => {
        setCurrentIndex((currentIndex + 1) % slides.length);
    };
    return (
        <>
            <div className="relative h-full w-full overflow-hidden ">
                <div className='flex items-center justify-center mb-3 text-lg font-bold mt-28'>
                    KERJA SAMA KAMI
                </div>
                <div
                    className="flex transition-transform duration-700 ease-in-out"
                    style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >

                    {slides.map((slide) => (
                        <div
                            key={slide.id}
                            className="w-full flex-shrink-0  bg-cover bg-center"
                        >
                            <div className="flex relative z-20 items-center justify-center h-full">
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full p-4">
                                    <div className=" flex items-center justify-center">
                                        <div className="card ">
                                            <img
                                                src={slide.imageUrl1} className='w-full max-w-48'
                                                alt="Shoes" />
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-center">
                                        <div className="card">
                                            <img
                                                src={slide.imageUrl2} className='w-full max-w-48'
                                                alt="Shoes" />
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-center">
                                        <div className="card">
                                            <img
                                                src={slide.imageUrl3} className='w-full max-w-48'
                                                alt="Shoes" />
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-center">
                                        <div className="card">
                                            <img
                                                src={slide.imageUrl4} className='w-full max-w-48'
                                                alt="Insurance" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Insurance



