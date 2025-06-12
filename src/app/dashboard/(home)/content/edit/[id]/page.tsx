'use client'

import React, { FC, useEffect, useState } from "react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertCircle } from "lucide-react";
import { Category } from "@/model/Category";
import { ApiResponse } from "@/model/ApiResponse";
import { Content } from "@/model/Content";
import FormContentPage from "../../components/form-content";
import axiosInstance, { setupInterceptor } from "../../../../../../../lib/axios";

type Params = {
    id: number
}

interface EditContentPageProps {
    params: Promise<Params>
}
const EditContentPage: FC<EditContentPageProps> = ({params}) => {
    setupInterceptor();

    const resolvedParams = React.use(params);
    const [content, setContent] = useState<Content | null>(null); 
    const [loading, setLoading] = useState<boolean>(true); 
    const [error, setError] = useState<string | null>(null);
    const [categories, setCategories] = useState<Category[]>([]); 

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const response = await axiosInstance.get<ApiResponse<Content>>(`/admin/contents/${resolvedParams.id}`);
                setContent(response.data.data);
            } catch (err: any) {
                setError(err.message || "An error occurred");
            } finally {
                setLoading(false);
            }
        };

        const fetchDataCategory = async () => {
            try {
                const response = await axiosInstance.get<ApiResponse<Category[]>>("/admin/categories")
                setCategories(response.data.data) 
            } catch (err:any) {
                alert(err.message || "Error fetching data")
            }
        }

        fetchDataCategory()
        fetchData();
    }, [resolvedParams.id]);

    if (loading) return <p>Loading...</p>
    if (error) return (
        <Alert variant="destructive">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>
            {error}
            </AlertDescription>
        </Alert>
    )
    return (
        <div>
            <div className="flex flex-row items-center justify-between">
                <div className="my-5 text-2xl fond-bold">Edit data Category</div>
            </div>

            <FormContentPage type="EDIT" defaultValues={content} categoryList={categories}/>
        </div>
    )
}

export default EditContentPage