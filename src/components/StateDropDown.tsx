import React, { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import { availableRoles } from "@/types/tutor";

interface SubjectDropDownProps {
  initialSelected?: string; // Optional initial value
  onSelect?: (selected: string) => void; // Callback when value changes
}

const stateDropDown: React.FC<SubjectDropDownProps> = ({ initialSelected = null, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState<string | null>(initialSelected);

  return (
    <div className="flex items-center space-x-4 p-4 rounded-lg w-fit">
      <span className="text-lg font-medium text-gray-700">Subject:</span>

      <div className="relative">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center justify-between bg-blue-600 text-white px-4 py-2.5 
                     rounded-lg shadow-md hover:bg-blue-700 transition-all duration-200"
        >
          {selected ? selected : "Select an option"}
          <IoMdArrowDropdown className="ml-2 text-xl" />
        </button>

        {isOpen && (
          <div className="absolute left-0 mt-2 w-52 bg-white rounded-lg shadow-lg 
                          border border-gray-200 animate-fadeIn">
            <ul className="py-2">
              {availableRoles.map((role) => (
                <li key={role.id}>
                  <button
                    onClick={() => {
                      setSelected(role.title);
                      setIsOpen(false);
                      if (onSelect) onSelect(role.title); // Notify parent
                    }}
                    className="w-full text-left px-4 py-2 text-gray-700 
                               hover:bg-blue-100 transition-all duration-200"
                  >
                    {role.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default stateDropDown;