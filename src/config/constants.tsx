
export const UserRoles = {
    ADMIN: "admin",
    SELLER: "seller",
    CUSTOMER: "customer",     
} as const;

export const Gender = {
    MALE: "male",
    FEMALE: "female",
    OTHER: "other",
} as const;

export const Status = {
    ACTIVE:"active",
    INACTIVE:"inactive"
} as const;

export type UserRoles = typeof UserRoles[keyof typeof UserRoles];
export type Gender = typeof Gender[keyof typeof Gender];
export type Status = typeof Status[keyof typeof Status];
