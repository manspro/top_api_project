export enum TopLevelCategory{
  Courses,
  Services,
  Books,
  Products
}


export class TopPageModel {
  firstCategory:TopLevelCategory,
  secondCategory:string;
  title:string;
  category:string;
  hh?:{
    count:number;
    juniorSalary:number;
    middleSalary:string;
    seniorSalary:string
  };

  advantages:{
    title:string;
    description:number;
  }[];

  seoText:string;
  tagsTitle:string;
  tags:string[]
}
