'use client';
import React from 'react';
import Link from 'next/link';
import Footer from '../components/ui/Footer';
import Navbar from '../components/ui/NavBar'; 
import { testimonials } from '../testimonial';
import Header from '../components/ui/Header';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Navbar />
      <div className="max-w-6xl mx-auto w-full px-6 py-6 flex-grow">
      
        <div className="flex justify-between items-center mb-12">
          <div className="flex items-center">
            <div className="bg-yellow-600 text-white w-10 h-10 rounded-lg flex items-center justify-center mr-2">
              <span className="font-bold text-xl">TT</span>
            </div>
            <h1 className="text-3xl font-bold text-red-700">TeachTeam</h1>
          </div>
          <div className="space-x-4">
            <Link href="/SignIn" className="text-white-600 hover:text-blue-800 font-medium">Sign In</Link>
            <Link href="/Register" className="bg-green-600 hover:bg-blue-700 text-white font-medium px-4 py-2 rounded-full transition-colors">Sign Up</Link>
          </div>
        </div>

        <div className="text-center py-20">
          <h2 className="text-5xl font-extrabold text-white-700 mb-6">Welcome to TeachTeam</h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Connecting passionate tutors with students and lecturers to create an exceptional learning experience.
          </p>
        </div>

        <div className="py-16">
          <h2 className="text-3xl font-bold text-center text-white-700 mb-10">What Our Users Say</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                </div>
                <p className="text-gray-600 italic mb-4">{testimonial.text}</p>
                <div className="mt-4">
                  <p className="font-bold">{testimonial.name}</p>
                  <p className="text-blue-600 text-sm">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 my-16">
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <p className="text-4xl font-bold text-red-400">400+</p>
              <p className="text-gray-600">Active Tutors</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <p className="text-4xl font-bold text-red-400">2500+</p>
              <p className="text-gray-600">Students Helped</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <p className="text-4xl font-bold text-red-400">85%</p>
              <p className="text-gray-600">Satisfaction Rate</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <p className="text-4xl font-bold text-red-400">100+</p>
              <p className="text-gray-600">Partner Universities</p>
            </div>
          </div>
      <Footer />
    </div>
  );
}
 