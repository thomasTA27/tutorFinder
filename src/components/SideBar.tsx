import React from "react";

import { useEffect,useState } from "react";


import { availableRoles } from "@/types/tutor";

const Sidebar = () => {

    const [role, setRole] = useState('');

  

  // useEffect(() => {
  //   const button = document.getElementsByName("li");

  //   //test
  //   if (button) {
  //     const handleClick = () => {
  //       alert("Dashboard Clicked!");
  //     };

  //     button.addEventListener("click", handleClick);

  //     // Cleanup: Remove event listener when component unmounts
  //     return () => {
  //       button.removeEventListener("click", handleClick);
  //     };
  //   }
  // }, []);

  
  return (
    <aside className="bg-blue-100 p-4 w-64 min-h-screen">
      <nav>
        <ul className="space-y-2">
          {availableRoles.map( (role) =>(

            <li key={role.id} className="hover:bg-blue-500 p-2 rounded">
              {role.title}
            </li>

          ))}
          
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
