import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import React from "react";
import './Header.css'
//header component

export default function Header() {

    function change(active) {
        if (active == true) {

        }
    }


    return (

        <>
            <header className="header">
                <nav className="nav">
                    <div className="logo">
                        <Link className="logolink" to={"/"}>
                            Memory upload

                        </Link>

                    </div>

                    {/* midlul */}

                    <div className="ulhed">
                        <ul>
                            <li className="hdli"
                            >
                                <NavLink to=""
                                    className={({ isActive }) =>
                                        (isActive ? `bg-white text-orange-500 rounded-lg p-1.5` : ``)
                                    }
                                    id="link"


                                >
                                    Home

                                </NavLink>
                            </li>
                            <li className="hdli">
                                <NavLink to={"/about"}

                                    className={({ isActive }) =>
                                        (isActive ? `bg-white text-orange-500 rounded-lg p-1.5` : ``)
                                    } id="link" >About</NavLink>
                            </li>
                            <li className="hdli">
                                <NavLink to={"/contact"}
                                    className={({ isActive }) =>
                                        (isActive ? `bg-white text-orange-500 rounded-lg p-1.5` : ``)
                                    } id="link">Contact</NavLink>
                            </li>
                            <li className="hdli">
                                <NavLink to={"/login"}
                                    className={({ isActive }) =>
                                        (isActive ? `bg-white text-orange-500 rounded-lg p-1.5` : ` `)
                                    } id="link">Login</NavLink>
                            </li>
                            <li className="hdli">
                                <NavLink to={"#"}
                                    id="link">Getstarted</NavLink>
                            </li>
                        </ul>
                    </div>

                    {/* login/getstarted */}


                </nav>
                {/* logsection */}


            </header>
        </>
    );
}