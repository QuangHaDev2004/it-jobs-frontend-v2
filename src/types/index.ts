export type JobItem = {
  id: string;
  companyLogo: string;
  title: string;
  salaryMin: string;
  salaryMax: string;
  position: string;
  workingForm: string;
  companyCity: string;
  technologies: string[];
  companyName?: string;
  cityName?: string;
};

export type CompanyItem = {
  id: string;
  logo: string;
  companyName: string;
  cityName: string;
  totalJob: number;
};
