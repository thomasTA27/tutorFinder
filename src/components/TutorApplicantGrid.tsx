// import React from 'react';

// // Define the type for a comment
// interface Comment {
//   id: number;
//   name: string;
//   text: string;
//   rating: number;
// }

// // Define the type for a review
// interface Review {
//   reviewTutorId: number;
//   Comment: Comment[];
// }

// // Sample data
// const testimonials: Review[] = [
//   {
//     reviewTutorId: 1,
//     Comment: [
//       { id: 1, name: "John Doe", text: "Alice is an excellent tutor! She explained calculus concepts clearly.", rating: 5 },
//       { id: 2, name: "Sarah Lee", text: "Really helped me understand Linear Algebra. Highly recommended!", rating: 1 }
//     ]
//   },
//   {
//     reviewTutorId: 2,
//     Comment: [
//       { id: 3, name: "Michael Brown", text: "Michael is a great instructor, his Python explanations are amazing!", rating: 5 },
//       { id: 4, name: "Jessica Martin", text: "Good teacher, but the pace was a little fast for me.", rating: 4 }
//     ]
//   },
//   {
//     reviewTutorId: 3,
//     Comment: [
//       { id: 5, name: "Emily Clark", text: "Sophia's React tutorials were very useful!", rating: 5 },
//       { id: 6, name: "David Wilson", text: "Good instructor, but I wish we had more practical projects.", rating: 4 }
//     ]
//   },
//   {
//     reviewTutorId: 4,
//     Comment: [
//       { id: 7, name: "Anna Garcia", text: "Daniel is super knowledgeable about Machine Learning!", rating: 5 },
//       { id: 8, name: "Tom Richardson", text: "Helped me understand statistics better. Great mentor!", rating: 5 }
//     ]
//   },
//   {
//     reviewTutorId: 5,
//     Comment: [
//       { id: 9, name: "Sophia Turner", text: "Emma explained finance concepts in a very easy way.", rating: 4 },
//       { id: 10, name: "Mark Adams", text: "Her essay reviews helped improve my academic writing.", rating: 5 }
//     ]
//   },
//   {
//     reviewTutorId: 6,
//     Comment: [
//       { id: 11, name: "Lucas Scott", text: "Lucas made AI concepts feel easy and fun!", rating: 5 },
//       { id: 12, name: "Olivia White", text: "Great instructor, but a bit too technical at times.", rating: 4 }
//     ]
//   },
//   {
//     reviewTutorId: 7,
//     Comment: [
//       { id: 13, name: "Nathan Hill", text: "Charlotte is very patient and knowledgeable about psychology.", rating: 5 },
//       { id: 14, name: "Emma Carter", text: "Loved the research skills workshop!", rating: 5 }
//     ]
//   }
// ]; 

// // Star rating component
// const StarRating: React.FC<{ rating: number }> = ({ rating }) => {
//   return (
//     <div className="flex">
//       {[...Array(5)].map((_, i) => (
//         <svg
//           key={i}
//           className={`w-4 h-4 ${i < rating ? "text-yellow-500" : "text-gray-300"}`}
//           fill="currentColor"
//           viewBox="0 0 20 20"
//           xmlns="http://www.w3.org/2000/svg"
//         >
//           <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
//         </svg>
//       ))}
//     </div>
//   );
// };

// // Profile Card component
// const ProfileCard: React.FC<{ review: Review }> = ({ review }) => {
//   // Calculate average rating
//   const avgRating = review.Comment.reduce((acc, comment) => acc + comment.rating, 0) / review.Comment.length;
  
//   return (
//     <div className="bg-white rounded-lg shadow-md p-6 flex flex-col h-full">
//       <div className="mb-4">
//         <h3 className="text-lg font-semibold">Tutor ID: {review.reviewTutorId}</h3>
//         <div className="flex items-center mt-1">
//           <StarRating rating={avgRating} />
//           <span className="ml-2 text-gray-600">{avgRating.toFixed(1)}</span>
//         </div>
//       </div>
      
//       <div className="space-y-4 flex-grow">
//         {review.Comment.map(comment => (
//           <div key={comment.id} className="border-t pt-4">
//             <div className="flex justify-between items-start">
//               <h4 className="font-medium">{comment.name}</h4>
//               <StarRating rating={comment.rating} />
//             </div>
//             <p className="text-gray-600 mt-2">{comment.text}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// // Testimonials Grid component
// const TestimonialsGrid: React.FC = () => {
//   return (
//     <div className="container mx-auto px-4 py-8">
//       <h2 className="text-2xl font-bold mb-6 text-center">Tutor Testimonials</h2>
      
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {testimonials.map((review) => (
//           <ProfileCard key={review.reviewTutorId} review={review} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default TestimonialsGrid;




/////////////////


//is the comment on urself on other people could see it?

import React from 'react';

import {tutorApplicants} from '@/types/tutor';

import ProfileCard from '@/components/TutorCardProfile';

// Grid layout for all profile cards
const TutorApplicantsGrid: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-6 text-center">Tutor Applicants</h2>
      
      {/* this should filter out the card based on the subject */}
      <div className="flex flex-wrap -mx-3">
        {tutorApplicants.map(profile => (
          <div key={profile.id} className="w-full sm:w-1/2 lg:w-1/3 px-3 mb-6">
            <ProfileCard profile={profile} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TutorApplicantsGrid;