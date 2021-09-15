import React from "react";
import { NavLink } from "react-router-dom";

//Font-awesome imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faHome} from "@fortawesome/free-solid-svg-icons";

//React Social Icons will automatically pull in logo for the link in the social icon 
// import { SocialIcon } from "react-social-icons";



export default function Navbar({ fixed }) {
    const [navbarOpen, setNavbarOpen] = React.useState(false);
    // const [fixed, setNavbarFixed] = React.useState(False)
    return (
        <nav className="z-50 fixed w-screen flex flex-wrap items-center justify-between px-2 py-3 bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-60">
          <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
            <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
                <NavLink onClick={() => setNavbarOpen(false)} 
                    exact to="/"
                    className="inline-flex items-center mr-4 py-6 px-3 text-black hover:text-gray-800 text-4xl font-bold cursive tracking-widest"
                >
                    <FontAwesomeIcon icon={faHome} /> Jakob
                    
                </NavLink>
              <button
                className="text-black cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                type="button"
                onClick={() => setNavbarOpen(!navbarOpen)}
              >
                <FontAwesomeIcon icon={faBars} />
              </button>
            </div>
            <div
              className={
                "lg:flex flex-grow items-center" +
                (navbarOpen ? " flex" : " hidden")
              }
              id="example-navbar-danger"
            >
              <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
                <li className="nav-item">
                    <NavLink onClick={() => setNavbarOpen(!navbarOpen)}
                        className="font-bold inline-flex items-center py-3 px-3 m-5 rounded text-black hover:text-gray-700" to="/post"
                        activeClassName="bg-white bg-opacity-50"
                    >
                        My Posts
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink onClick={() => setNavbarOpen(!navbarOpen)}
                        className="font-bold inline-flex items-center py-3 px-3 m-5 rounded text-black hover:text-gray-700" to="/project"
                        activeClassName="bg-white bg-opacity-50"
                    >
                        Projects
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink onClick={() => setNavbarOpen(!navbarOpen)}
                        className="font-bold inline-flex items-center py-3 px-3 m-5 rounded text-black hover:text-gray-700" to="/about"
                        activeClassName="bg-white bg-opacity-50"
                    >
                        About Me
                    </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
    );
  }


// Social Icons, append to menu later
/* <div id="social-wrapper" className="inline-flex py-3 px-3 my-6">
    <SocialIcon url="https://www.linkedin.com/in/jakob-langseth/" className="mr-4" target="_blank" rel="noreferrer" fgColor="#fff" style={{height:35, width: 35}} />
    <SocialIcon url="https://github.com/jlangz" className="mr-4" target="_blank" rel="noreferrer" fgColor="#fff" style={{height:35, width: 35}} />
    <SocialIcon url="https://medium.com/@jakob.langseth" className="mr-4" target="_blank" rel="noreferrer" fgColor="#fff" style={{height:35, width: 35}} />
</div> */
