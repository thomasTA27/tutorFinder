'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Header from '../components/ui/Header';
// import Navbar from '../components/ui/NavBar';
import Footer from '../components/ui/Footer';
import { 
  Skill,
  AvailabilityType, 
  AcademicCredential, 
  RoleHistory, 
  AvailableRole,
  availableRoles
} from '../Tutor';

const Tutors: React.FC = () => {
  const router = useRouter();
  
  const [skills, setSkills] = useState<Skill[]>([]);
  const [newSkill, setNewSkill] = useState('');
  const [availability, setAvailability] = useState<AvailabilityType | null>(null);
  const [academicCredentials, setAcademicCredentials] = useState<AcademicCredential[]>([]);
  const [roleHistory, setRoleHistory] = useState<RoleHistory[]>([]);

  const [credentialLevel, setCredentialLevel] = useState<AcademicCredential['level']>('Bachelor');
  const [degreeName, setDegreeName] = useState('');
  const [institution, setInstitution] = useState('');
  const [gpa, setGpa] = useState('');
  const [year, setYear] = useState('');
 
  const [roleName, setRoleName] = useState('');
  const [roleInstitution, setRoleInstitution] = useState('');
  const [startYear, setStartYear] = useState('');
  const [endYear, setEndYear] = useState('');

  // This is used for adding the skill of the person
  const handleAddSkill = () => {
    if (newSkill.trim()) {
      const skill: Skill = {
        name: newSkill.trim()
      };
      setSkills([...skills, skill]);
      setNewSkill('');
    }
  };

const availableSkills = [
    'JavaScript', 'Python', 'Data Structures', 'Databases',
    'Problem Solving', 'Machine Learning', 'React', 'React',
    'Time Management', 'Java', 'MIPS', 'Operating Systems',
  ];
  
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);
  
  const toggleSkill = (skill: string) => {
    setSelectedSkills(prev =>
      prev.includes(skill)
        ? prev.filter(s => s !== skill)
        : [...prev, skill]
    );
  };

  // This is used for removing the skill
//   const handleRemoveSkill = (id: string) => {
//     setSkills(skills.filter(skill => skill.id !== id));
//   };

const handleRemoveSkill = (name: string) => {
    setSkills(skills.filter(s => s.name !== name));
  };

  // This is used for the add the creditionals for the tutor
  const handleAddCredential = () => {
    if (degreeName && institution && year) {
      const credential: AcademicCredential = {
        id: Date.now().toString(),
        level: credentialLevel,
        degreeName,
        institution,
        gpa,
        year
      };
      setAcademicCredentials([...academicCredentials, credential]);
      setDegreeName('');
      setInstitution('');
      setGpa('');
      setYear('');
    }
  };

  // This is used for removing the creditionals 
  const handleRemoveCredential = (id: string) => {
    setAcademicCredentials(academicCredentials.filter(cred => cred.id !== id));
  };

  // This is used for the adding the previous role
  const handleAddRole = () => {
    if (roleName && roleInstitution && startYear) {
      const role: RoleHistory = {
        id: Date.now().toString(),
        role: roleName,
        institution: roleInstitution,
        startYear,
        endYear: endYear || 'Present'
      };
      setRoleHistory([...roleHistory, role]);
      setRoleName('');
      setRoleInstitution('');
      setStartYear('');
      setEndYear('');
    }
  };

  // This is used for the removing the role after its filled
  const handleRemoveRole = (id: string) => {
    setRoleHistory(roleHistory.filter(role => role.id !== id));
  };

  // Handle applying for an available role
  const handleApplyForRole = (role: AvailableRole) => {
    // would submit an application
    alert(`Applied for role: ${role.title}`);
  };

  // Its used for signout 
  const handleSignOut = () => {
    // This routes to the Home page
    router.push('/');
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      {/* <Navbar /> */}
      
      <div className="max-w-6xl mx-auto w-full px-6 py-6 flex-grow">
        <h1 className="text-3xl font-bold text-green-700 mb-8">Tutor Profile</h1>
        
        <div className="mb-10">
          <h2 className="text-xl font-semibold text-black-600 mb-4">Availability</h2>
          <div className="max-w-md">
            <label className="block text-gray-400 mb-2">Select your availability:</label>
            <select 
              className="w-full p-2 border border-gray-300 rounded"
              value={availability || ''}
              onChange={(e) => setAvailability(e.target.value as AvailabilityType || null)}
            >
              <option value="Part Time">Part Time</option>
              <option value="Full Time">Full Time</option>
            </select>
            {availability && (
              <div className="mt-4 p-3 bg-blue-50 border border-green-200 rounded">
                <p>You have selected: <span className="font-medium">{availability}</span></p>
              </div>
            )}
          </div>
        </div>

        <div className="mb-10">
          {/* <h2 className="text-xl font-semibold text-black-600 mb-4">Skills & Subjects</h2> */}
          <div className="flex max-w-md mb-4">
            <input
              type="text"
              placeholder="Add a skill"
              className="flex-grow p-2 border border-gray-300 rounded-l"
              value={newSkill}
              onChange={(e) => setNewSkill(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleAddSkill()}
            />
            <button 
              className="bg-black-600 text-white px-4 py-2 rounded-r hover:bg-blue-700"
              onClick={handleAddSkill}
            >
              Add
            </button>
          </div>

            <div className="mb-10">
            <h2 className="text-xl font-semibold text-black-600 mb-4">Skills & Subjects</h2>

        {/* This is used for selectingt the courses if it is a checbox*/}
            <div className="grid grid-cols-2 gap-3">
                {availableSkills.map((skill, idx) => (
                <label key={idx} className="flex items-center gap-2">
                    <input
                    type="checkbox"
                    checked={selectedSkills.includes(skill)}
                    onChange={() => toggleSkill(skill)}
                    />
                    {skill}
                </label>
                ))}
            </div>
            </div>
          

          {/* {skills.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-3">
              {skills.map(skill => (
                <div 
                  key={skill.id} 
                  className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full flex items-center"
                >
                  {skill.name}
                  <button 
                    className="ml-2 text-blue-600 hover:text-blue-800"
                    onClick={() => handleRemoveSkill(skill.id)}
                  >
                    ×
                  </button>
                </div>
              ))}
            </div>
          )} */}

          
        {/* This is used for selectingt the courses if it is a using name from the Skills export fucntion*/}

            {skills.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-3">
                {skills.map(skill => (
                <div 
                    key={skill.name} 
                    className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full flex items-center"
                >
                    {skill.name}
                    <button 
                    className="ml-2 text-blue-600 hover:text-blue-800"
                    onClick={() => handleRemoveSkill(skill.name)}
                    >
                    ×
                    </button>
                </div>
                ))}
            </div>
)}
        </div>

        <div className="mb-10">
          <h2 className="text-xl font-semibold text-black-600 mb-4">Academic Credentials</h2>
          
          <div className="bg-gray-50 p-4 rounded border border-gray-200 mb-6">
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-gray-700 mb-2">Level:</label>
                <select 
                  className="w-full p-2 border border-gray-300 rounded"
                  value={credentialLevel}
                  onChange={(e) => setCredentialLevel(e.target.value as AcademicCredential['level'])}
                >
                  <option value="Diploma">Diploma</option>
                  <option value="Bachelor">Bachelor</option>
                  <option value="Graduate Program">Graduate Program</option>
                  <option value="Masters">Masters</option>
                  <option value="Doctorate">Doctorate</option>
                </select>
              </div>
              
              <div>
                <label className="block text-gray-700 mb-2">Degree Name:</label>
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded"
                  value={degreeName}
                  onChange={(e) => setDegreeName(e.target.value)}
                  placeholder="e.g., Data Science"
                />
              </div>
            </div>
            
            <div className="grid md:grid-cols-3 gap-4 mb-4">
              <div>
                <label className="block text-gray-700 mb-2">Institution:</label>
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded"
                  value={institution}
                  onChange={(e) => setInstitution(e.target.value)}
                  placeholder="e.g., RMIT"
                />
              </div>
              
              <div>
                <label className="block text-gray-700 mb-2">GPA:</label>
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded"
                  value={gpa}
                  onChange={(e) => setGpa(e.target.value)}
                  placeholder="e.g., 3.5"
                />
              </div>
              
              <div>
                <label className="block text-gray-700 mb-2">Year:</label>
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded"
                  value={year}
                  onChange={(e) => setYear(e.target.value)}
                  placeholder="e.g., 2025"
                />
              </div>
            </div>
            
            <button 
              className="bg-green-600 text-white px-4 py-2 rounded hover:bg-blue-700"
              onClick={handleAddCredential}
            >
              Add Credential
            </button>
          </div>
          
          {academicCredentials.length > 0 && (
            <div className="space-y-4">
              {academicCredentials.map(cred => (
                <div 
                  key={cred.id} 
                  className="bg-white p-4 rounded shadow-md flex justify-between"
                >
                  <div>
                    <h3 className="font-medium text-lg">{cred.degreeName}</h3>
                    <p className="text-gray-600">{cred.level} • {cred.institution}</p>
                    <p className="text-gray-500">GPA: {cred.gpa} • {cred.year}</p>
                  </div>
                  <button 
                    className="text-red-600 hover:text-red-800"
                    onClick={() => handleRemoveCredential(cred.id)}
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
        
        <div className="mb-10">
          <h2 className="text-xl font-semibold text-black-600 mb-4">Role History</h2>
          
          <div className="bg-gray-50 p-4 rounded border border-gray-200 mb-6">
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-gray-700 mb-2">Role:</label>
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded"
                  value={roleName}
                  onChange={(e) => setRoleName(e.target.value)}
                  placeholder=""
                />
              </div>
              
              <div>
                <label className="block text-gray-700 mb-2">Company:</label>
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded"
                  value={roleInstitution}
                  onChange={(e) => setRoleInstitution(e.target.value)}
                  placeholder=""
                />
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-gray-700 mb-2">Start Year:</label>
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded"
                  value={startYear}
                  onChange={(e) => setStartYear(e.target.value)}
                  placeholder="e.g., 2020"
                />
              </div>
              
              <div>
                <label className="block text-gray-700 mb-2">End Year (leave blank for present):</label>
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded"
                  value={endYear}
                  onChange={(e) => setEndYear(e.target.value)}
                  placeholder="e.g., 2022"
                />
              </div>
            </div>
            
            <button 
              className="bg-green-600 text-white px-4 py-2 rounded hover:bg-blue-700"
              onClick={handleAddRole}
            >
              Add Role
            </button>
          </div>
          
          {roleHistory.length > 0 && (
            <div className="space-y-4">
              {roleHistory.map(role => (
                <div 
                  key={role.id} 
                  className="bg-white p-4 rounded shadow-md flex justify-between"
                >
                  <div>
                    <h3 className="font-medium text-lg">{role.role}</h3>
                    <p className="text-gray-600">{role.institution}</p>
                    <p className="text-gray-500">{role.startYear} - {role.endYear}</p>
                  </div>
                  <button 
                    className="text-red-600 hover:text-red-800"
                    onClick={() => handleRemoveRole(role.id)}
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
        
        <div className="mb-10">
          <h2 className="text-xl font-semibold text-black-600 mb-4">Available Roles</h2>
          
          <div className="space-y-4">
            {availableRoles.map(role => (
              <div 
                key={role.id} 
                className="bg-white p-4 rounded shadow-md flex justify-between items-center"
              >
                <div>
                  <h3 className="font-medium text-lg">{role.title}</h3>
                  <p className="text-gray-600">{role.courseDescription}</p>
                </div>
                <button 
                  className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
                  onClick={() => handleApplyForRole(role)}
                >
                  Apply
                </button>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mb-10">
          <h2 className="text-xl font-semibold text-black-600 mb-4">Your Profile Summary</h2>
          
          <div className="bg-blue-50 p-4 rounded border border-blue-200">
            <h3 className="font-medium mb-2">Availability:</h3>
            <p className="mb-4">{availability || 'Not specified'}</p>
            
            <h3 className="font-medium mb-2">Skills:</h3>
            {skills.length > 0 ? (
              <ul className="list-disc pl-5 mb-4">
                {skills.map(skill => (
                  <li key={skill.name}>{skill.name}</li>
                ))}
              </ul>
            ) : (
              <p className="mb-4">No skills added yet</p>
            )}
            
            <h3 className="font-medium mb-2">Academic Background:</h3>
            {academicCredentials.length > 0 ? (
              <ul className="list-disc pl-5 mb-4">
                {academicCredentials.map(cred => (
                  <li key={cred.id}>
                    {cred.level} in {cred.degreeName} from {cred.institution} ({cred.year})
                  </li>
                ))}
              </ul>
            ) : (
              <p className="mb-4">No academic credentials added yet</p>
            )}
            
            <h3 className="font-medium mb-2">Teaching Experience:</h3>
            {roleHistory.length > 0 ? (
              <ul className="list-disc pl-5">
                {roleHistory.map(role => (
                  <li key={role.id}>
                    {role.role} at {role.institution} ({role.startYear} - {role.endYear})
                  </li>
                ))}
              </ul>
            ) : (
              <p>No teaching experience added yet</p>
            )}
          </div>
        </div>
        
        <div className="mb-10 text-center">
          <button 
            className="bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700"
            onClick={handleSignOut}
          >
            Sign Out
          </button>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Tutors;