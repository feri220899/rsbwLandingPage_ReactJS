import React from 'react'
import { NavLink, useNavigate, useLocation } from 'react-router-dom';
import { Link, scroller } from 'react-scroll';
import { WebLink } from '../json/Web'
import { FaEllipsisV, FaHome } from 'react-icons/fa';
function Navlink({ style, my }) {
    const navigate = useNavigate();
    const location = useLocation();
    const handleScrollToSection = (section) => {
        if (location.pathname !== "/") {
            navigate("/");
        }
        setTimeout(() => {
            scroller.scrollTo(section, {
                duration: 800,
                delay: 0,
                smooth: 'easeInOutQuart',
            });
        }, 100);
    };
    const section_menu = [
        {
            to: 'section_home',
            section_name: 'HOME',
        },
        {
            to: 'section2',
            section_name: 'SECTION2',
        }
    ]
    return (
        <>
            {section_menu.map((item, key) => (
                <li key={key} className={`mx-1 ${my}`}>
                    {location.pathname === "/" ? (
                        <Link className='font-bold' to={item.to} smooth={true} duration={500}>
                            <FaHome /> {item.section_name}
                        </Link>
                    ) : (
                        <a className='font-bold cursor-pointer' onClick={() => handleScrollToSection(item.to)}>
                            <FaHome /> {item.section_name}
                        </a>
                    )}
                </li>
            ))}
            <li className={`mx-1 ${my}`}>
                <details>
                    <summary className='font-bold'>
                        <FaEllipsisV /> LAINYA
                    </summary>
                    <ul className={`${style} ${my}`}>
                        {WebLink.map((item, key) => (
                            <li key={key} className='my-1'>
                                <NavLink className='font-bold' to={item.path}>{item.icon} {item.label}</NavLink>
                            </li>
                        ))}
                    </ul>
                </details>
            </li>

        </>
    )
}

export default Navlink