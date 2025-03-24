import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <nav className="bg-teal-400 p-4 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">
          Task Manager
        </Link>
        <div className="space-x-4">
          <Link to="/add" className="hover:underline">
            Add Task
          </Link>
          <button onClick={handleLogout} className="hover:underline">
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;