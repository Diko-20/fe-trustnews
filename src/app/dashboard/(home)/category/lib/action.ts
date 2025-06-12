import axiosInstance from "../../../../../../lib/axios"

export const createCategory = async (categoryData: any) => {
    try {
        const response = await axiosInstance.post("/admin/categories", categoryData);
        return response.data;
    } catch (error) {
        throw error;
    }
}

export const editCategory = async (categoryData: any, categoryID: number) => {
    try {
        const response = await axiosInstance.put(`/admin/categories/${categoryID}`, categoryData);
        return response.data;
    } catch (error) {
        throw error;
    }
}

export const deleteCategory = async (categoryID: number) => {
    try {
        const response = await axiosInstance.delete(`/admin/categories/${categoryID}`);
        return response.data;
    } catch (error) {
        throw error;
    }
}