export type TUserPayload = {
  id: string;
  name: string;
  email: string;
  role: 'HR' | 'ADMIN' | 'USER' | "MODERATOR"; // Extend as needed
  createdAt: string; // ISO date string
  updatedAt: string; // ISO date string
  iat: number; // Issued At (timestamp)
  exp: number; // Expiry (timestamp)
};




export interface TUser {
    name?: string;
    email: string;
    role: 'HR' | 'ADMIN' | 'USER' | "MODERATOR"; // Extend as needed
    password: string;
    recaptchaToken?: string
}
