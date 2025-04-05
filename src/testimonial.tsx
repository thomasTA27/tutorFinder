export interface Testimonial {

    name: string;
    role: string,
    text: string;
    rating: number;
  }


  //(THOMAS) comment is just for the lecrture only 
  
  export const testimonials: Testimonial[] = [
    {
      name: "Rohan Arora",
      role: "Tutor",
      text: "TeachTeam is one of the most innovative platform build for the improvment of learning for the education",
      rating: 5,
    },
    {
      name: "Dr. James L.",
      role: "Lecturer",
      text: "Hiring the best Tutor is one of the hardest job, as you would want the best. Using the TeachTeam has helped us a lot and saved time",
      rating: 4,
    },
    {
      name: "Naveen R.",
      role: "Tutor",
      text: "I signed uplast year and since then it has been amazing journey. Using the TeachTeam has helped us a lot ",
      rating: 5,
    },
  ];