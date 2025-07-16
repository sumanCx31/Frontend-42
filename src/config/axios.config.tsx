import axios, { AxiosError, type AxiosResponse } from "axios";

export const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_APP_API_URL,
    timeout:30000,
    timeoutErrorMessage:"Server timed out...",
    headers:{
        "Content-Type":"application/json",
    }
})

export interface SuccessResponse {
    data: any;
    message: string;
    status: string;
    options: any;
}

axiosInstance.interceptors.request.use((config)=>{
    const token = localStorage.getItem("_at_42") || null;
    if(token){
        config.headers.Authorization = `Bearer ${token}`;
        console.log(token);
    }
    return config;
    
    
})

axiosInstance.interceptors.response.use(
    (response:AxiosResponse) => {
        return response.data as AxiosResponse;
    },
    (exception: AxiosError) => {
        if(exception.response) {
            throw exception.response?.data
        }else {
            throw exception
        }
    }
)