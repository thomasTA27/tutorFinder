import Sidebar from '@/components/SideBar'
import React from 'react'

import Header from '../../components/ui/Header';
import NavBar from '../../components/ui/NavBar';
import Footer from '../../components/ui/Footer';
import SubjectDropDown from '../../components/ui/SubjectDropDown';
import TutorApplicantsGrid from '../../components/TutorApplicantGrid';
import stateDropDown from '@/components/StateDropDown'



//TODO: WE CAN ADD THE NAVBAR AFTER LOGIN IT WILL SAID LOGOUT
// 

const index = () => {
  return (
    
    <div>
            {/* < we can take the input from here and plug it to the  component
            the default would be null and tutor applicant Grid should handle that> */}
 < Header/>
  <SubjectDropDown/>  
  
      <TutorApplicantsGrid/>


  
  
      {/* < NavBar/> */}
      {/* <Sidebar/> */}


{/* <Footer/> */}
      
    </div>
  )
}

export default index
