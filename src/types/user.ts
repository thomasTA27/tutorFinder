export type User = {
    id: string;
    email: string;
    password: string;
    role : string ; 
  };
  
  //this is the mork data that we will put in the local storage
  export const DEFAULT_USERS: User[] = [
    { id: "1", email: "thomas@gmail.com", password: "tho"  , role: "tutor" },
    { id: "2", email: "rishi@gmail.com", password: "321" , role: "tutor" },
    { id: "3", email: "matt@outlook.com", password: "123"  ,role: "lecture"},
    
  ];
  