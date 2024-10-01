import React from 'react'

function ButtonHref({ link, label, type, children }) {
    const buttonStyles = {
        primary: "bg-green-600 hover:bg-green-700 text-white",
        secondary: "bg-gray-600 hover:bg-gray-700 text-white",
        success: "bg-green-600 hover:bg-green-700 text-white",
        danger: "bg-red-600 hover:bg-red-700 text-white",
    };
    const selectedStyle = buttonStyles[type] || buttonStyles.primary;
    return (
        <>
            <a href={link} target="_blank" className={`flex items-center font-bold py-2 px-4 rounded-lg  border-2 border-transparent text-md mr-4 ${selectedStyle}`}>
                {children} <span className='ml-2'>{label}</span>
            </a>
        </>
    )
}

export default ButtonHref