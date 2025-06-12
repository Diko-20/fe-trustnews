import axios from "axios"
import { deleteCookie, getCookie } from "cookies-next";
import { useRouter } from "next/navigation"

const baseUrl = process.env.NEXT_PUBLIC_API_URL

const axiosInstance = axios.create({
    baseURL: baseUrl,
    headers: {
        'Content-Type': 'application/json'
    }
})

export function setupInterceptor() {
    const router = useRouter();

    axiosInstance.interceptors.request.use(
        async (config) => {
            if (typeof window !== 'undefined') {
                const token = getCookie("accessToken");

                if (token) {
                    config.headers.Authorization = `Bearer ${token}`;
                }
            }

            return config;
        },
        (error) => {
            return Promise.reject(error);
        }
    );

    axiosInstance.interceptors.response.use(
        (response) => response,
        (error) => {
            if (error.response && error.response.status === 401) {
                deleteCookie('accessToken');

                router.push("/login");
            }

            return Promise.reject(error);
        }
    );
}

export default axiosInstance
