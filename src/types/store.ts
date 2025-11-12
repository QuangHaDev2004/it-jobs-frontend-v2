import { Company } from "./company";
import { User } from "./user";

export type AuthState = {
  accessToken: string | null;
  infoUser: User | null;
  infoCompany: Company | null;

  clearState: () => void;

  setAccessToken: (token: string) => void;
  setInfoUser: (user: User) => void;
  setInfoCompany: (company: Company) => void;

  logout: () => Promise<void>;
  checkAuth: () => Promise<void>;
  refresh: () => Promise<void>;
};
