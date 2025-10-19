// Auth
export type RegisterUserRequest = {
  fullName: string;
  email: string;
  password: string;
};

export type LoginUserRequest = {
  email: string;
  password: string;
};

export type RegisterCompanyRequest = {
  companyName: string;
  email: string;
  password: string;
};
