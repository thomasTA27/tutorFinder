import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

const SignUp: React.FC = () => {
  const router = useRouter();

  const [role, setRole] = useState<'tutor' | 'lecturer'>('tutor');
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    agree: false,
  });
    const [message, setMessage] = useState<{ text: string; type: 'success' | 'error' } | null>(null);

  function validateStrongPassword(password: string): boolean{

    //basically my definition of Strong password
    //  is atleast 8 char 
    //atlesat  1 number
    // atleast 1 speacial character
    //if they not pop up to tell user about it (THOMAS TA)

    // const passwordRegex = /^(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;

    // return passwordRegex.test(password);

    //TODO:CHECK THIS LATER
    return true;

  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.agree) {
    //   alert('You must agree to the Terms of Service and Privacy Policy');
    setMessage({ text: 'You must agree to the Terms of Service and Privacy Policy', type: 'error' });
      return;
    }

    
    if (validateStrongPassword(form.password)) {


        // alert('Account created successfully!');
        setMessage({ text: 'Account created successfully', type: 'success' });
        router.push('/login');
       
      }

    else{
        // alert('HEY YOU PASSWORD IS NOT STRONG ENOUGH');

        setMessage({ text: 'Make sure your password is 8 character and atleast 1 number and speacial character', type: 'error' });
        
        return;
    }

    

    // const existing = JSON.parse(localStorage.getItem('users') || '[]');
    // existing.push(newUser);
    // localStorage.setItem('users', JSON.stringify(existing));

  
  };

  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-2">
      <div className="flex flex-col justify-center items-center px-8 py-12 bg-white">
        <div className="w-full max-w-md space-y-8">
          <h1 className="text-3xl font-semibold text-center text-blue-600 mb-6">TeachTeam</h1>

          <div className="bg-white shadow border rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-4">Sign up</h2>

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

            <div className="flex gap-2 mb-6">
              <button
                type="button"
                onClick={() => setRole('tutor')}
                className={`px-4 py-2 rounded w-1/2 ${
                  role === 'tutor'
                    ? 'bg-yellow-400 text-white font-semibold'
                    : 'bg-gray-100 text-gray-700'
                }`}
              >
                Tutor
              </button>
              <button
                type="button"
                onClick={() => setRole('lecturer')}
                className={`px-4 py-2 rounded w-1/2 ${
                  role === 'lecturer'
                    ? 'bg-yellow-400 text-white font-semibold'
                    : 'bg-gray-100 text-gray-700'
                }`}
              >
                Lecturer
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="firstName"
                placeholder="First name"
                value={form.firstName}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded px-4 py-2"
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last name"
                value={form.lastName}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded px-4 py-2"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded px-4 py-2"
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={form.password}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded px-4 py-2"
              />
              {/* <small>password should be 8 char and atleast 1 number and special char</small> */}

              <label className="flex items-start gap-2 text-sm mt-2">
                <input
                  type="checkbox"
                  name="agree"
                  checked={form.agree}
                  onChange={handleChange}
                  className="mt-1"
                />
                <span>
                  I agree to the{' '}
                  <a href="" className="text-blue-600 hover:underline">
                    Terms of Service
                  </a>{' '}
                  and{' '}
                  <a href="" className="text-blue-600 hover:underline">
                    Privacy Policy
                  </a>
                </span>
              </label>

              <button
                type="submit"
                className="w-full bg-blue-100 text-blue-700 font-medium py-2 rounded hover:bg-blue-200 transition"
              >
                Create account
              </button>
            </form>

            <p className="text-center text-sm text-gray-600 mt-4">
              Have an account?{' '}
              <Link href="/SignIn" className="text-red-500 hover:underline">
                Log in
              </Link>
            </p>
          </div>
        </div>
      </div>

      <div className="hidden md:block bg-[url('https://images.unsplash.com/photo-1561089489-f13d5e730d72?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center"></div> 
    
    </div>
  );
};

export default SignUp;
