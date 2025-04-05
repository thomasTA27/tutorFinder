import React from 'react';
import { FaQuestionCircle, FaInfoCircle, FaPhone, FaInstagram, FaFacebook } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (

    //I just delete mt-10 cuz margin way too off
    <div className="bg-gray-800 text-white  py-6 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
        <div className="space-y-2">
          <h3 className="text-lg font-semibold">Support</h3>
          <p className="flex items-center gap-2">
            <FaQuestionCircle /> Customer Support
          </p>
          <p className="flex items-center gap-2">
            <FaInfoCircle /> FAQ
          </p>
        </div>

        <div className="space-y-2">
          <h3 className="text-lg font-semibold">Contact</h3>
          <div className="flex flex-col gap-2 text-base">
            <p className="flex items-center gap-2 hover:text-pink-400 cursor-pointer">
              <FaInstagram /> teachteam_official
            </p>
            <p className="flex items-center gap-2 hover:text-blue-400 cursor-pointer">
              <FaFacebook /> TeachTeam
            </p>
            <p className="flex items-center gap-2 hover:text-green-400 cursor-pointer">
              <FaPhone /> +61 4188131113
            </p>
          </div>
        </div>

        <div className="space-y-2">
          <h3 className="text-lg font-semibold">Useful Links</h3>
          <ul className="space-y-1">
            <li><a href="" className="hover:underline">About Us</a></li>
            <li><a href="" className="hover:underline">Privacy Policy</a></li>
            <li><a href="" className="hover:underline">Terms and Conditions</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;

