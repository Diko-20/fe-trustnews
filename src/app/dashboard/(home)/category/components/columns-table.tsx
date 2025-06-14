"use client"

import { Button } from "@/components/ui/button";
import { Category } from "@/model/Category"
import { ColumnDef } from "@tanstack/react-table"
import { Pencil } from "lucide-react";
import Link from "next/link";
import DeleteCategory from "./delete-category";

export const columns: ColumnDef<Category>[] = [
  {
    accessorKey: "title",
    header: "Judul",
  },
  {
    accessorKey: "slug",
    header: "Slug",
  },
  {
    accessorKey: "actions",
    header: "Actions",
    cell: ({row}) => {
        const category = row.original;

        return (
            <div className="inline-flex gap-5 items-end">
                <Button variant="secondary" size="sm" asChild>
                    <Link href={`/dashboard/category/edit/${category.id}`}>
                    <Pencil className="mr-2 h-4 w-4"/>
                    Edit
                    </Link>
                </Button>
                <DeleteCategory id={category.id}/>
            </div>
        );
    },
  },
]
