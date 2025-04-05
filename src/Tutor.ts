export interface Skill {
    // id: string;
    name: string;
  }

 export type AvailabilityType = 'Part Time' | 'Full Time';
  
  export interface AcademicCredential {
    id: string;
    level: 'Diploma' | 'Bachelor' | 'Graduate Program' | 'Masters' | 'Doctorate';
    degreeName: string;
    institution: string;
    gpa: string;
    year: string;
  }
  
  export interface RoleHistory {
    id: string;
    role: string;
    institution: string;
    startYear: string;
    endYear: string;
  }
  
  export interface AvailableRole {
    id: string;
    title: string;
    courseDescription: string;
  }
  
  export interface TutorProfile {
    skills: Skill[];
    availability: AvailabilityType | null;
    academicCredentials: AcademicCredential[];
    roleHistory: RoleHistory[];
  }

  export const availableRoles: AvailableRole[] = [
        // DUMMY DATA
    {
      id: '1',
      title: 'RMIT FULL STACK',
      courseDescription: 'Teach fundamental concepts of Calculus and Linear Algebra to undergraduate students.'
    },
    {
      id: '2',
      title: 'BOOTCAMP',
      courseDescription: 'Guide students through programming basics in Python and Java. Help with data structure concepts.'
    },

    {
      id: '3',
      title: 'STUDIO',
      courseDescription: 'Assist professor in conducting physics lab sessions and help students understand experimental procedures.'
    },


  ];