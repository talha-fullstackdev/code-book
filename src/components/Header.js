
import React, { useEffect, useState } from "react";
import Logo from "../assets/logo.png";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const activeClass = "text-sky-500 text-base";
  const inActiveClass = "text-white text-base hover:text-sky-500";

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   const queryTerm = event.target.search.value;
  //   event.target.reset();
  //   return navigate(`/search?q=${queryTerm}`);
  // }


  return (
    <header>
      <nav className="bg-slate-700 shadow-lg py-1 ">
        <div className="container mx-auto px-4 py-2 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <img src={Logo} alt="Cinemate Logo" className="h-10 rounded-full" />
            <span className="font-bold text-white text-2xl">Cinemate</span>
          </div>
          <div className="hidden md:flex space-x-6">
            <NavLink to="/" className={({ isActive }) => (isActive ? activeClass : inActiveClass)} end>
              Home
            </NavLink>
            <NavLink to="/movies/popular" className={({ isActive }) => (isActive ? activeClass : inActiveClass)}>
              Popular
            </NavLink>
            <NavLink to="/movies/top" className={({ isActive }) => (isActive ? activeClass : inActiveClass)}>
              Top
            </NavLink>
            <NavLink to="/movies/upcoming" className={({ isActive }) => (isActive ? activeClass : inActiveClass)}>
              Upcoming
            </NavLink>
          </div>
          <div className="hidden md:flex items-center space-x-2">
            <button
              onClick={() => setDarkMode(!darkMode)}
              data-tooltip-target="navbar-search-example-toggle-dark-mode-tooltip"
              type="button"
              data-toggle-dark="light"
              className="p-2 text-xs font-medium text-gray-700 bg-white rounded-lg border border-gray-200 toggle-dark-state-example hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-gray-300 dark:focus:ring-gray-500 dark:bg-gray-800 focus:outline-none dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
            >
              {darkMode ? (
                <svg aria-hidden="true" data-toggle-icon="sun" className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" fillRule="evenodd" clipRule="evenodd"></path>
                </svg>
              ) : (
                <svg aria-hidden="true" data-toggle-icon="moon" className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
                </svg>
              )}
            </button>
            {/* <input
              type="text"
              placeholder="Search..."
              className="px-4 py-2 border rounded-lg cursor-pointer"
              autoComplete="off"
              onChange={handleSubmit}
            /> */}
             {/* <form onSubmit={handleSubmit}>
                <input type="text" id="search-navbar" name="search" className="block p-2 pl-10 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..." autoComplete="off" />
              </form> */}
          </div>
          <div className="md:hidden flex items-center space-x-2">
            <button
              onClick={() => setDarkMode(!darkMode)}
              type="button"
              className="p-2 text-xs font-medium text-gray-700 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-gray-300 dark:focus:ring-gray-500 dark:bg-gray-800 focus:outline-none dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
            >
              {darkMode ? (
                <svg aria-hidden="true" className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" fillRule="evenodd" clipRule="evenodd"></path>
                </svg>
              ) : (
                <svg aria-hidden="true" className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
                </svg>
              )}
            </button>
            <button onClick={toggleMenu} className="text-white focus:outline-none">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>
        </div>
        {isOpen && (
          <div className="md:hidden">
            <NavLink to="/" className="block px-4 py-2 text-white">
              Home
            </NavLink>
            <NavLink to="/movies/popular" className="block px-4 py-2 text-white">
              Popular
            </NavLink>
            <NavLink to="/movies/top" className="block px-4 py-2 text-white">
              Top
            </NavLink>
            <NavLink to="/movies/upcoming" className="block px-4 py-2 text-white">
              Upcoming
            </NavLink>
            {/* <input
              type="text"
              placeholder="Search..."
              className="block w-full px-4 py-2 mt-2 border rounded-lg"
              autoComplete="off"
            /> */}
          </div>
        )}
      </nav>
    </header>
  );
};
////////////////////////////////////////////////////////////////////////////////////

