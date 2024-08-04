import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const NavBar = ({ user, onLogout }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [adminDropdownOpen, setAdminDropdownOpen] = useState(false);
  const [gamesDropdownOpen, setGamesDropdownOpen] = useState(false);

  const dropdownRef = useRef(null);
  const adminDropdownRef = useRef(null);
  const gamesDropdownRef = useRef(null);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const toggleAdminDropdown = () => {
    setAdminDropdownOpen(!adminDropdownOpen);
  };

  const toggleGamesDropdown = () => {
    setGamesDropdownOpen(!gamesDropdownOpen);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setDropdownOpen(false);
    }
    if (adminDropdownRef.current && !adminDropdownRef.current.contains(event.target)) {
      setAdminDropdownOpen(false);
    }
    if (gamesDropdownRef.current && !gamesDropdownRef.current.contains(event.target)) {
      setGamesDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className='flex flex-row px-4 py-2 justify-between bg-gray-800 items-center'>
      <h1 className='text-white'>
        <Link to="/">
          <img src='../../Images/logo.png' alt='' width='100' height='600' />
        </Link>
        <p className='font-mono font-bold'>PORTAL GAMES</p>
      </h1>
      <ul className='flex flex-row font-semibold gap-10 text-white'>
        <li className='relative' ref={gamesDropdownRef}>
          <button onClick={toggleGamesDropdown} className='hover:underline'>
            GAMES
          </button>
          {gamesDropdownOpen && (
            <ul className='absolute left-0 mt-2 w-48 bg-gray-800 rounded-md shadow-lg py-2'>
              <li className='px-4 py-2 hover:bg-gray-500'>
                <Link to='/guessing-game'>Guess the Number</Link>
              </li>
              <li className='px-4 py-2 hover:bg-gray-500'>
                <Link to='/rock-paper-scissors'>Rock Paper Scissors</Link>
              </li>
              <li className='px-4 py-2 hover:bg-gray-500'>
                <Link to='/tic-tac-toe'>Tic Tac Toe</Link>
              </li>
            </ul>
          )}
        </li>
        <li>TOURNAMENTS</li>
        <li>CONTACT US</li>
        {user && user.role === 'admin' && (
          <li className='relative' ref={adminDropdownRef}>
            <button onClick={toggleAdminDropdown} className='hover:underline'>
              PANELADMIN 
            </button>
            {adminDropdownOpen && (
              <ul className='absolute left-0 mt-2 w-48 bg-gray-800 rounded-md shadow-lg py-2'>
                <li className='px-4 py-2 hover:bg-gray-500'>
                  <Link to='/all-users'>All Users</Link>
                </li>
                <li className='px-4 py-2 hover:bg-gray-500'>
                  <Link to='/add-user'>Add User</Link>
                </li>
              </ul>
            )}
          </li>
        )}
      </ul>
      <div className='relative' ref={dropdownRef}>
        <button
          onClick={toggleDropdown}
          className='bg-white py-2 px-3 rounded hover:scale-95 hover:transition-all'
        >
          {user ? user.fullName : 'Login'}
        </button>
        {dropdownOpen && (
          <div className='absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2'>
            {user ? (
              <button onClick={onLogout} className='block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-200'>
                Log Out
              </button>
            ) : (
              <>
                <a href='/login' className='block px-4 py-2 text-gray-800 hover:bg-gray-200'>
                  Log In
                </a>
                <a href='/signup' className='block px-4 py-2 text-gray-800 hover:bg-gray-200'>
                  Sign Up
                </a>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
