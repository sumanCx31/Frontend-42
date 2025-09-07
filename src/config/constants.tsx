export const PaginationDefault = {
    limit: 2,
    page: 1,
    total: 0,
  };
  
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
    ACTIVE: "active",
    INACTIVE: "inactive",
  } as const;
  
  // Add this line:
  export type StatusType = typeof Status[keyof typeof Status];
  
  
  export const InputType = {
    TEXT: "text",
    PASSWORD: "password",
    EMAIL: "email",
    NUMBER: "number",
    DATE: "date",
    FILE: "file",
  } as const;
  
  export type UserRoles = typeof UserRoles[keyof typeof UserRoles];
  export type Gender = typeof Gender[keyof typeof Gender];
  export type Status = typeof Status[keyof typeof Status];
  export type InputType = typeof InputType[keyof typeof InputType];
  
  export interface IPaginationType {
    [x: string]: number | undefined;
    limit: number;
    page: number;
    total: number;
  }
  
  export interface IPaginationWithSearchType {
    limit?: number;
    page?: number;
    search?: string | null;
    role?: UserRoles;
  }
  
  export interface IImageType {
    optimizedUrl: string;
    publicId: string;
    secureUrl: string;
  }
  