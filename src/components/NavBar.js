import React from "react";
import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";

export default function NavBar() {
    return (
        <header id="top" className="bg-blue-400 fixed z-50 w-full h-25">
            <div className="container mx-auto flex justify-between">
                <nav className="flex">
                    <NavLink exact to="/"
                        className="inline-flex items-center mr-4 py-6 px-3 text-blue-100 hover:text-purple-800 text-4xl font-bold cursive tracking-widest"
                    >
                        Jakob
                    </NavLink>
                    <div id="link-wrapper" className="flex">
                        <NavLink 
                            className="inline-flex items-center py-3 px-3 m-5 rounded text-blue-200 hover:text-purple-800" to="/post"
                            activeClassName="text-blue-800 bg-blue-200"
                        >
                            My Posts
                        </NavLink>
                        <NavLink 
                            className="inline-flex items-center py-3 px-3 m-5 rounded text-blue-200 hover:text-purple-800" to="/project"
                            activeClassName="text-blue-800 bg-blue-200"
                        >
                            Projects
                        </NavLink>
                        <NavLink 
                            className="inline-flex items-center py-3 px-3 m-5 rounded text-blue-200 hover:text-purple-800" to="/about"
                            activeClassName="text-blue-800 bg-blue-200"
                        >
                            About Me
                        </NavLink>
                    </div>
                </nav>
                    <div id="social-wrapper" className="inline-flex py-3 px-3 my-6">
                        <SocialIcon url="https://www.linkedin.com/in/jakob-langseth/" className="mr-4" target="_blank" rel="noreferrer" fgColor="#fff" style={{height:35, width: 35}} />
                        <SocialIcon url="https://github.com/jlangz" className="mr-4" target="_blank" rel="noreferrer" fgColor="#fff" style={{height:35, width: 35}} />
                        <SocialIcon url="https://medium.com/@jakob.langseth" className="mr-4" target="_blank" rel="noreferrer" fgColor="#fff" style={{height:35, width: 35}} />
                    </div>
                    {/* <button id="menuBtn" className="hamburger block sm:hidden focus:outline-none" type="button" onClick="navToggle();">
                        <span className="hamburger__top-bun"></span>
                        <span className="hamburger__bottom-bun"></span>
                    </button> */}
                </div>
        </header>
    )
}