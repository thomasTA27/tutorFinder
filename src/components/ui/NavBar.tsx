import React from 'react';
import Link from 'next/link';

const Navbar: React.FC = () => {
  return (
    <div className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
        <ul className="flex gap-6 text-sm font-medium text-gray-700">
          <li>
            <Link href="/Home">
              <span className="hover:text-blue-600 cursor-pointer">Home</span>
            </Link>
          </li>
          <li>
            <Link href="/tutors">
              <span className="hover:text-blue-600 cursor-pointer">Tutors</span>
            </Link>
          </li>
          <li>
            <Link href="/lecturer">
              <span className="hover:text-blue-600 cursor-pointer">Lecturers</span>
            </Link>
          </li>

            <li>
            <Link href="/login">
                <span className="hover:text-blue-600 cursor-pointer">Login</span>
            </Link>
            </li>
       
            <li>
            <Link href="/register">
                <span className="hover:text-blue-600 cursor-pointer">Register</span>
            </Link>
            </li>

                    {/* (THOMAS) hey RISHI make sure that you need to change the file 
        to Register.tsx to register.tsx cuz it make sure git know how to track as it Uppercase*/}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
