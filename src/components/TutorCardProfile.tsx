
import {TutorProfile} from '@/types/tutor';

//the thinng there is the parameter
const SkillBadge: React.FC<{ tutorName: string  , reliable : string}> = ({ tutorName  , reliable}) => {
  return (
    <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full mr-1 mb-1">
      {tutorName} {reliable}
    </span>
  );
};

const ProfileCard: React.FC<{ profile: TutorProfile }> = ({ profile }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 flex flex-col h-full">
      {/* Header with name and availability tag */}
      <div className="mb-4">
        <div className="flex justify-between items-start">
          <h3 className="text-lg font-bold text-gray-800">{profile.name}</h3>
          <span className={`text-xs px-2 py-1 rounded-full ${
            profile.availability === "Full-Time" ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"
          }`}>
            {profile.availability}
          </span>
        </div>
      </div>
      
      {/* Skills */}
      <div className="mb-4">
        <h4 className="text-sm font-semibold text-gray-600 mb-2">Skills</h4>
        <div className="flex flex-wrap">
          {profile.skills.map(skill => (
            <SkillBadge key={skill.id} tutorName={skill.name} reliable={skill.id} />
          ))}
        </div>
      </div>
      
      {/* Academic Credentials */}
      <div className="mb-4">
        <h4 className="text-sm font-semibold text-gray-600 mb-2">Education</h4>
        {profile.academicCredentials.map(credential => (
          <div key={credential.id} className="mb-2">
            <p className="text-sm font-medium">{credential.degreeName}</p>
            <p className="text-xs text-gray-600">{credential.institution} • GPA: {credential.gpa} • {credential.year}</p>
          </div>
        ))}
      </div>
      
      {/* Role History */}
      <div className="mb-4">
        <h4 className="text-sm font-semibold text-gray-600 mb-2">Experience</h4>
        {profile.roleHistory.map(role => (
          <div key={role.id} className="mb-2">
            <p className="text-sm font-medium">{role.role}</p>
            <p className="text-xs text-gray-600">
              {role.institution} • {role.startYear} - {role.endYear}
            </p>
          </div>
        ))}
      </div>
      
      {/* Applied Role */}
      <div className="mt-auto pt-4 border-t border-gray-200">
        <h4 className="text-sm font-semibold text-gray-600 mb-2">Applied For</h4>
        {profile.appliedRole.map(role => (
          <div key={role.id}>
            <p className="text-sm font-medium text-blue-600">{role.title}</p>
            <p className="text-xs text-gray-600">{role.courseDescription}</p>
          </div>
        ))}
      </div>
    </div>
  );
};


export default ProfileCard
