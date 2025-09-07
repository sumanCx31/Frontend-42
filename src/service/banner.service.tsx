import { axiosInstance } from "../config/axios.config";

class BannerService {
  // GET request
  async getRequest(path: string, options?: any) {
    return axiosInstance.get(path, options);
  }

  // POST request with JSON
  async postJson(path: string, data: any) {
    return axiosInstance.post(path, data, {
      headers: { "Content-Type": "application/json" },
    });
  }

  // POST request with FormData (file upload)
  async postFormData(path: string, formData: FormData) {
    return axiosInstance.post(path, formData);
  }

  // DELETE request
  async deleteRequest(path: string) {
    return axiosInstance.delete(path);
  }
}

export default new BannerService();
