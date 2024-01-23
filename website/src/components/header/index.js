import React from "react";
import { NavLink, Link } from "react-router-dom";
import './header.css'
export const Header = () => {
    return (
        <header>
            <div className="container">
                <div id="logo">
                    <Link to='/' >wiki</Link>
                </div>

                <nav>
                    <ul>
                        <li>
                            <NavLink to='/non-tech' >Non-Tech</NavLink>
                        </li>
                        <li>
                            <NavLink to='/tech' >Tech</NavLink>
                        </li>
                        <li>
                            <NavLink to='/landline' >Landline</NavLink>
                        </li>
                        <li>
                            <NavLink to='/installations' >Installations</NavLink>
                        </li>
                        <li>
                            <NavLink to='/services' >Services</NavLink>
                        </li>
                        <li>
                            <NavLink to='/ivr' >IVR</NavLink>
                        </li>
                        <li>
                            <NavLink to='/calls' >Calls</NavLink>
                        </li>
                    </ul>
                </nav>

            </div>

        </header>
    )
}