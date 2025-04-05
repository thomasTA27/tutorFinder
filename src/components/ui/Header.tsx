import React from 'react';

const Header: React.FC = () => {
  return (
    <div className="bg-blue-600 text-white px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 bg-white text-blue-600 font-bold rounded-full flex items-center justify-center">
            TT
          </div>
          <div>
            <h1 className="text-2xl font-semibold">TeachTeam</h1>
            <p className="text-sm text-blue-100">Your trusted tutor hiring platform</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
