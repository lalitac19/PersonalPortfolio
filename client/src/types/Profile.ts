export interface Profile {
  id: string;
  title: string;
  description: string;
  image: string;
  email: string;
  details: {
    about: string;
    skills: string[];
    experience: string[];
    contact: string;
  };
}