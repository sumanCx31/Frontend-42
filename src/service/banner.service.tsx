import { axiosInstance } from "../config/axios.config";

class BannerService {
  getRequest(arg0: string, p0: { params: { page: number; limit: number; search: string | null; }; }) {
    throw new Error("Method not implemented.");
  }
  postRequest(arg0: string, formData: FormData, arg2: { headers: { Authorization: string; }; }) {
    throw new Error("Method not implemented.");
  }
  // For JSON data requests
  async postJson(path: string, data: any) {
    return axiosInstance.post(path, data, {
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  // For multipart/form-data requests (file uploads)
  async postFormData(path: string, formData: FormData) {
    return axiosInstance.post(path, formData, {
      // DO NOT set Content-Type here! Axios sets it automatically with boundary.
    });
  }

  // You can add other HTTP methods similarly
  async get(path: string, params?: any) {
    return axiosInstance.get(path, { params });
  }

  // etc...
}

export default new BannerService();
