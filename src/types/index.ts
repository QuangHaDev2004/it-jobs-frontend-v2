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

export type JobDetail = {
  id: string;
  title: string;
  salaryMin: string;
  salaryMax: string;
  images: string[];
  position: string;
  workingForm: string;
  createdAt: string;
  technologies: string[];
  description: string;
  companyId: string;
  address: string;
  companyName: string;
  companyLogo: string;
  companyModel: string;
  companyEmployees: string;
  workingTime: string;
  workOverTime: string;
  cityName: string;
};

export type CompanyDetail = {
  id: string;
  logo: string;
  companyName: string;
  address: string;
  companyModel: string;
  companyEmployees: string;
  workingTime: string;
  workOverTime: string;
  description: string;
  cityName: string;
  totalJob: number;
};

export type CVDetail = {
  id: string;
  title: string;
  fullName: string;
  email: string;
  phone: string;
  salaryMin: string;
  salaryMax: string;
  position: string;
  workingForm: string;
  viewed: string;
  status: string;
};
