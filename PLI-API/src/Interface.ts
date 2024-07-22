export  interface User {
    id: number;
    email: string;
    password: string;
    adress: string;
    firstName: string;
    lastName: string;
    avatarUrl: string;
  }
 

  export interface Trips{
    id:number;
    userId: number;
    title: string;
    description: string;
    startDate: Date;
    endDate: Date;
  }


  export interface Steps{
  id: number;
  tripId: number;
  stepDate: Date;
  locationLat: number;
  locationLong: number;
  description: string;
  }


  export interface Comments{

    id: number;
    userId: number;
    stepId: number;
    comment: string;
  }

  export interface Photos{
    stepId: number;
    photoUrl: string;
    caption?: string;
  }