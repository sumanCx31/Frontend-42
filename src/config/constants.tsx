export const PaginationDefault = {
    limit: 2,
    page: 1,
    total: 0
}

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

export interface IPaginationType {
    limit: number;
    page: number;
    total: number;
}

export interface IPaginationWithSearchType {
    limit?: number,
    page?: number,
    search?: string | null
    role?: UserRoles
}

export interface IImageType {
    optimizedUrl: string,
    publicId: string,
    secureUrl: string
}
