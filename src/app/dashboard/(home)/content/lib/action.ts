import { ContentRequest } from "@/model/Content";
import axiosInstance from "../../../../../../lib/axios";

export const uploadImage = async (fileUpload: File) => {
    try {
        const formData = new FormData();
        formData.append("image", fileUpload)
        const response = await axiosInstance.post("/admin/contents/upload-image", formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });

        return response.data;
    } catch (error) {
        throw error;
    }
}

export const createContent = async (contentData: ContentRequest) => {
    try {
        const response = await axiosInstance.post('admin/contents', contentData);
        return response.data;
    } catch (error) {
        throw error;
    }
}


export const editContent = async (contentData: ContentRequest, id: number) => {
    try {
        const response = await axiosInstance.put(`admin/contents/${id}`, contentData);
        return response.data;
    } catch (error) {
        throw error;
    }
}


export const deleteContent = async (id: number) => {
    try {
        const response = await axiosInstance.delete(`admin/contents/${id}`);
        return response.data;
    } catch (error) {
        throw error;
    }
}

