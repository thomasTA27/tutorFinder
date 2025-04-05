export interface TutorProfile {
  id: number;
  name : string;
  skills: Skill[];
  availability: AvailabilityType;
  academicCredentials: AcademicCredential[];
  roleHistory: RoleHistory[];
  appliedRole : AvailableRole[];
}

//least and most chosen profile for distinction 
//need to ask the prof about is it need to be localStrorage can we hard code?
//for most chosen is it chosen for all of the lecture?
// is it the rank for all

    

export interface Skill {
  id: string;
  name: string;
}

export type AvailabilityType = 'Part-Time' | 'Full-Time';

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



export const availableRoles: AvailableRole[] = [
  {
    id: '1',
    title: 'Mathematics Tutor',
    courseDescription: 'Teach fundamental concepts of Calculus and Linear Algebra to undergraduate students.'
  },
  {
    id: '2',
    title: 'Computer Science Instructor',
    courseDescription: 'Guide students through programming basics in Python and Java. Help with data structure concepts.'
  },
  {
    id: '3',
    title: 'Physics Lab Assistant',
    courseDescription: 'Assist professor in conducting physics lab sessions and help students understand experimental procedures.'
  },
  {
    id: '4',
    title: 'Data Science Mentor',
    courseDescription: 'Help students learn machine learning techniques and guide them through real-world data science projects.'
  },
  {
    id: '5',
    title: 'Cybersecurity Analyst',
    courseDescription: 'Teach ethical hacking, network security, and risk management to aspiring cybersecurity professionals.'
  },
  {
    id: '6',
    title: 'AI & Machine Learning Trainer',
    courseDescription: 'Mentor students in artificial intelligence concepts, including neural networks and deep learning frameworks like TensorFlow and PyTorch.'
  },
  {
    id: '7',
    title: 'Web Development Instructor',
    courseDescription: 'Guide students in learning front-end and back-end technologies, including React, Node.js, and databases.'
  },
  {
    id: '8',
    title: 'Mobile App Developer',
    courseDescription: 'Teach mobile application development using Flutter and React Native. Help students create cross-platform apps.'
  },
  {
    id: '9',
    title: 'Database Administrator',
    courseDescription: 'Assist students in understanding SQL, database design, and database optimization techniques.'
  },
  {
    id: '10',
    title: 'Game Development Tutor',
    courseDescription: 'Introduce students to game design principles and help them develop games using Unity and Unreal Engine.'
  }
];



export const avalableSkill: Skill[] = [
  { id: "1", name: "Mathematics Tutoring" },
  { id: "2", name: "Physics Tutoring" },
  { id: "3", name: "Chemistry Tutoring" },
  { id: "4", name: "Biology Tutoring" },
  { id: "5", name: "Computer Science Tutoring" },
  { id: "6", name: "Programming in Python" },
  { id: "7", name: "Java Development" },
  { id: "8", name: "C++ Programming" },
  { id: "9", name: "Data Structures & Algorithms" },
  { id: "10", name: "Database Management (SQL & NoSQL)" },
  { id: "11", name: "Machine Learning Basics" },
  { id: "12", name: "Web Development (HTML, CSS, JS, React)" },
  { id: "13", name: "Software Engineering Principles" },
  { id: "14", name: "Technical Writing & Research Skills" },
  { id: "15", name: "Statistics & Data Analysis" },
  { id: "16", name: "Business & Finance Tutoring" },
  { id: "17", name: "Electrical Engineering Fundamentals" },
  { id: "18", name: "Mechanical Engineering Principles" },
  { id: "19", name: "Psychology & Cognitive Science" },
  { id: "20", name: "Academic Writing & Essay Review" }
]



export const tutorApplicants: TutorProfile[] = [
  {
    id: 1,
    name: "Alice Johnson",
    skills: [
      { id: "1", name: "Mathematics Tutoring" },
      { id: "9", name: "Data Structures & Algorithms" }
    ],
    availability: "Full-Time",
    academicCredentials: [
      {
        id: "1",
        level: "Masters",
        degreeName: "Master of Applied Mathematics",
        institution: "Harvard University",
        gpa: "4.0",
        year: "2022"
      }
    ],
    roleHistory: [
      {
        id: "1",
        role: "Mathematics Lecturer",
        institution: "Harvard University",
        startYear: "2020",
        endYear: "2023"
      }
    ],
    appliedRole: [
      {
        id: "1",
        title: "Mathematics Tutor",
        courseDescription: "Teach fundamental concepts of Calculus and Linear Algebra to undergraduate students."
      }
    ]
  },
  {
    id: 2,
    name: "Michael Smith",
    skills: [
      { id: "6", name: "Programming in Python" },
      { id: "7", name: "Java Development" },
      { id: "10", name: "Database Management (SQL & NoSQL)" }
    ],
    availability: "Part-Time",
    academicCredentials: [
      {
        id: "2",
        level: "Bachelor",
        degreeName: "B.Sc. in Computer Science",
        institution: "Stanford University",
        gpa: "3.9",
        year: "2023"
      }
    ],
    roleHistory: [
      {
        id: "2",
        role: "Software Developer Intern",
        institution: "Google",
        startYear: "2022",
        endYear: "2023"
      }
    ],
    appliedRole: [
      {
        id: "2",
        title: "Computer Science Instructor",
        courseDescription: "Guide students through programming basics in Python and Java. Help with data structure concepts."
      }
    ]
  },
  {
    id: 3,
    name: "Sophia Davis",
    skills: [
      { id: "12", name: "Web Development (HTML, CSS, JS, React)" },
      { id: "13", name: "Software Engineering Principles" }
    ],
    availability: "Part-Time",
    academicCredentials: [
      {
        id: "3",
        level: "Graduate Program",
        degreeName: "M.Sc. in Software Engineering",
        institution: "MIT",
        gpa: "3.7",
        year: "2024"
      }
    ],
    roleHistory: [
      {
        id: "3",
        role: "Frontend Developer",
        institution: "Freelance",
        startYear: "2019",
        endYear: "Present"
      }
    ],
    appliedRole: [
      {
        id: "7",
        title: "Web Development Instructor",
        courseDescription: "Guide students in learning front-end and back-end technologies, including React, Node.js, and databases."
      }
    ]
  },
  {
    id: 4,
    name: "Daniel Brown",
    skills: [
      { id: "15", name: "Statistics & Data Analysis" },
      { id: "11", name: "Machine Learning Basics" }
    ],
    availability: "Full-Time",
    academicCredentials: [
      {
        id: "4",
        level: "Doctorate",
        degreeName: "PhD in Data Science",
        institution: "University of California, Berkeley",
        gpa: "4.0",
        year: "2021"
      }
    ],
    roleHistory: [
      {
        id: "4",
        role: "Data Science Researcher",
        institution: "UC Berkeley",
        startYear: "2017",
        endYear: "2021"
      }
    ],
    appliedRole: [
      {
        id: "4",
        title: "Data Science Mentor",
        courseDescription: "Help students learn machine learning techniques and guide them through real-world data science projects."
      }
    ]
  },
  {
    id: 5,
    name: "Emma Wilson",
    skills: [
      { id: "16", name: "Business & Finance Tutoring" },
      { id: "20", name: "Academic Writing & Essay Review" }
    ],
    availability: "Part-Time",
    academicCredentials: [
      {
        id: "5",
        level: "Masters",
        degreeName: "MBA in Finance",
        institution: "London School of Economics",
        gpa: "3.8",
        year: "2022"
      }
    ],
    roleHistory: [
      {
        id: "5",
        role: "Financial Analyst",
        institution: "JP Morgan",
        startYear: "2019",
        endYear: "2023"
      }
    ],
    appliedRole: [
      {
        id: "5",
        title: "Cybersecurity Analyst",
        courseDescription: "Teach ethical hacking, network security, and risk management to aspiring cybersecurity professionals."
      }
    ]
  },
  {
    id: 6,
    name: "Lucas Johnson",
    skills: [
      { id: "17", name: "Electrical Engineering Fundamentals" },
      { id: "18", name: "Mechanical Engineering Principles" }
    ],
    availability: "Full-Time",
    academicCredentials: [
      {
        id: "6",
        level: "Doctorate",
        degreeName: "PhD in Electrical Engineering",
        institution: "ETH Zurich",
        gpa: "4.0",
        year: "2021"
      }
    ],
    roleHistory: [
      {
        id: "6",
        role: "Assistant Professor",
        institution: "ETH Zurich",
        startYear: "2022",
        endYear: "Present"
      }
    ],
    appliedRole: [
      {
        id: "6",
        title: "AI & Machine Learning Trainer",
        courseDescription: "Mentor students in artificial intelligence concepts, including neural networks and deep learning frameworks like TensorFlow and PyTorch."
      }
    ]
  },
  {
    id: 7,
    name: "Charlotte Miller",
    skills: [
      { id: "19", name: "Psychology & Cognitive Science" },
      { id: "14", name: "Technical Writing & Research Skills" }
    ],
    availability: "Part-Time",
    academicCredentials: [
      {
        id: "7",
        level: "Masters",
        degreeName: "M.Sc. in Psychology",
        institution: "Yale University",
        gpa: "3.9",
        year: "2023"
      }
    ],
    roleHistory: [
      {
        id: "7",
        role: "Cognitive Science Researcher",
        institution: "Yale University",
        startYear: "2021",
        endYear: "2023"
      }
    ],
    appliedRole: [
      {
        id: "3",
        title: "Physics Lab Assistant",
        courseDescription: "Assist professor in conducting physics lab sessions and help students understand experimental procedures."
      }
    ]
  }
];