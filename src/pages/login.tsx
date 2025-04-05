

//TODO: STRONG PASSWORD MEAN . IN THE SIGN UP . 
//WE SHOULD PREVENT USER TO SIGN UP IF NOT STRONG POP UP WHY THEIR PASSWORD IS INVALID (THOMAS) 


import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { useAuth } from "../context/AuthContext";
import {User} from "../types/user"

// import Image from 'next/image';
const SignIn: React.FC = () => {
  const router = useRouter();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState<{ text: string; type: 'success' | 'error' } | null>(null);

  const { login } = useAuth();


  const handleSubmit = (e: React.FormEvent) => {

    const success = login(email , password)

    e.preventDefault();
    if(success){

      setMessage({ text: 'Login Successful!', type: 'success' });
      
      const user : User   = localStorage.getItem("currentUser") 
      ? JSON.parse(localStorage.getItem("currentUser") as string) : null
      
      if(user.role === "tutor"){
        router.push("/tutor");

      }
      else if(user.role === "lecture"){
        router.push("/lecture");
      }

    }
    else{

    setMessage({ text: 'Invalid email or password', type: 'error' });

    }

  };

  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-2">
      <div className="flex flex-col justify-center items-center px-8 py-12 bg-white">
        <div className="w-full max-w-md space-y-8">
          <h1 className="text-3xl font-semibold text-center text-blue-600 mb-6">TeachTeam</h1>

          <div className="bg-white shadow border rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-6">Log in</h2>

            {message && (
              <div
                className={`mb-4 px-4 py-2 text-sm rounded ${
                  message.type === 'success'
                    ? 'bg-green-100 text-green-700'
                    : 'bg-red-100 text-red-700'
                }`}
              >
                {message.text}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-medium mb-1">Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Password</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-100 text-blue-700 font-medium py-2 rounded hover:bg-blue-200 transition"
              >
                Log in
              </button>
            </form>

            <div className="text-center text-sm text-gray-600 mt-6">
            <label className="block font-semibold">Dont have an account?</label>
            <Link 
                href="/register" 
                className="text-red-500 hover:underline mt-1 inline-block"
            >
                Sign up
            </Link>
            </div>
          </div>
        </div>
      </div>

    <div className="hidden md:block bg-[url('https://plus.unsplash.com/premium_photo-1713296255442-e9338f42aad8?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center"></div> 



{/* Alternate image of the Login professor */}
{/* <div className="hidden md:block bg-[url('https://plus.unsplash.com/premium_photo-1683134169138-9037062cba51?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center"></div>  */}


{/* for the website head this image i will use  */}
{/* <div className="hidden md:block bg-[url('https://images.unsplash.com/photo-1575688588571-966e9b61f0b7?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center"></div>  */}

    </div>
  );
};

export default SignIn;
