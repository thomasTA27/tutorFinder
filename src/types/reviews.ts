export interface Comment {
    id : number;
    name: string;
    text: string;
    rating: number;
  }
  export interface Review {
    reviewTutorId : number;
    Comment : Comment[];
  }
  
  export const testimonials: Review[] = [
    {
      reviewTutorId: 1,
      Comment: [
        { id: 1, name: "John Doe", text: "Alice is an excellent tutor! She explained calculus concepts clearly.", rating: 5 },
        { id: 2, name: "Sarah Lee", text: "Really helped me understand Linear Algebra. Highly recommended!", rating: 4 }
      ]
    },
    {
      reviewTutorId: 2,
      Comment: [
        { id: 3, name: "Michael Brown", text: "Michael is a great instructor, his Python explanations are amazing!", rating: 5 },
        { id: 4, name: "Jessica Martin", text: "Good teacher, but the pace was a little fast for me.", rating: 4 }
      ]
    },
    {
      reviewTutorId: 3,
      Comment: [
        { id: 5, name: "Emily Clark", text: "Sophia's React tutorials were very useful!", rating: 5 },
        { id: 6, name: "David Wilson", text: "Good instructor, but I wish we had more practical projects.", rating: 4 }
      ]
    },
    {
      reviewTutorId: 4,
      Comment: [
        { id: 7, name: "Anna Garcia", text: "Daniel is super knowledgeable about Machine Learning!", rating: 5 },
        { id: 8, name: "Tom Richardson", text: "Helped me understand statistics better. Great mentor!", rating: 5 }
      ]
    },
    {
      reviewTutorId: 5,
      Comment: [
        { id: 9, name: "Sophia Turner", text: "Emma explained finance concepts in a very easy way.", rating: 4 },
        { id: 10, name: "Mark Adams", text: "Her essay reviews helped improve my academic writing.", rating: 5 }
      ]
    },
    {
      reviewTutorId: 6,
      Comment: [
        { id: 11, name: "Lucas Scott", text: "Lucas made AI concepts feel easy and fun!", rating: 5 },
        { id: 12, name: "Olivia White", text: "Great instructor, but a bit too technical at times.", rating: 4 }
      ]
    },
    {
      reviewTutorId: 7,
      Comment: [
        { id: 13, name: "Nathan Hill", text: "Charlotte is very patient and knowledgeable about psychology.", rating: 5 },
        { id: 14, name: "Emma Carter", text: "Loved the research skills workshop!", rating: 5 }
      ]
    }
  ];

  //(THOMAS) comment is just for the lecrture only 
  