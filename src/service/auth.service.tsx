import type { IRegisterUser } from "../components/auth/contract";
import type { SuccessResponse } from "../config/axios.config";
import BaseService from "./base.service";

class AuthService extends BaseService {
   setUser(user: any) {
     throw new Error("Method not implemented.");
   }
   setToken(token: any) {
     throw new Error("Method not implemented.");
   }
   async registerUser(data: IRegisterUser) {
    return await this.postRequest("/auth/register", data, {
      
        header: {
          "Content-Type": "multipart/form-data",
        }
      }) as unknown as SuccessResponse;
   }

   async activateUserProfile(token: string) {
    return await this.getRequest(`/auth/activate/${token}`) 
   }
}
const authSvc = new AuthService();
export default authSvc;