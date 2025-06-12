import { UpdatePasswordRequest } from "@/model/User";
import axiosInstance from "../../../../../../lib/axios";

export const updatePassword = async (updatePassword: UpdatePasswordRequest) => {
    try {
        const response = await axiosInstance.put("/admin/users/update-password", updatePassword);
        return response.data;
    } catch (error) {
        throw error;
    }
} 