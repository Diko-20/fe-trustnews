"use client";

import { Button } from "@/components/ui/button";
import { DataTable } from "@/components/ui/data-table";
import { AlertCircle, Plus } from "lucide-react";
import Link from "next/link";
import axiosInstance, { setupInterceptor } from "../../../../../lib/axios";
import { useEffect, useState } from "react";
import { User } from "@/model/User";
import { ApiResponse } from "@/model/ApiResponse";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import FormUserPage from "./components/form-user";

export default function UserPage() {
    setupInterceptor();
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axiosInstance.get<ApiResponse<User>>("/admin/users/profile");
                setUser(response.data.data);
                setLoading(false);
            } catch (error: any) {
                setError(error.message || "Error Fetching Data");
                setLoading(false);
            }
        }

        fetchData();
    }, [])

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) return (
        <Alert variant="destructive">
            <AlertCircle className="h-4 w-4"/>
            <AlertTitle> Error</AlertTitle>
            <AlertDescription>
                {error}
            </AlertDescription>
        </Alert>
    )

    return (
        <>
            <div className="flex flex-row items-center justify-between">
                <div className="my-5 text-2xl font-bold">Profile</div>
            </div>
            <FormUserPage defaultValues={user} />
        </>
    );
}