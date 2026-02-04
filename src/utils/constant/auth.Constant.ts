

export type TRole = "ADMIN" | "SPECIALIST" | "USER"; 

export const Roles: Record<TRole, TRole> = {
    USER: "USER",
    SPECIALIST:"SPECIALIST", 
    ADMIN: "ADMIN"
};
