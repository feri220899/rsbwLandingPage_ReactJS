import React from 'react'
import { NavLink } from 'react-router-dom';
import {WebLink} from './json/Web'
function Navlink() {
    return (
        <div>
            <nav>
                <ul>
                    {WebLink.map((item, index) => (
                        <li key={index}>
                            <NavLink to={item.path}>{item.label}</NavLink>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    )
}

export default  Navlink