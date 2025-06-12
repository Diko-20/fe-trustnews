"use client"

import { Button } from "@/components/ui/button";
import { Content } from "@/model/Content"
import { ColumnDef } from "@tanstack/react-table"
import { Pencil } from "lucide-react";
import Link from "next/link";
import DeleteContent from "./delete-content";

export const columns: ColumnDef<Content>[] = [
  {
    accessorKey: "title",
    header: "Judul",
  },
  {
    accessorKey: "excerpt",
    header: "Kutipan",
  },
  {
    accessorKey: "image",
    header: "Gambar",
    cell: ({row}) => {
        const content = row.original;

        return (
            <div className="flex items-center">
                <img src={content.image} alt={content.title} width="100" height="100"/>
            </div>
        );
    }
  },
  {
    accessorKey: "category_name",
    header: "Kategori",
  },
  {
    accessorKey: "author",
    header: "Pembuat",
  },
  {
    accessorKey: "actions",
    cell: ({row}) => {
        const content = row.original;

        return (
            <div className="inline-flex gap-5 items-end">
                <Button variant="secondary" size="sm" asChild>
                    <Link href={`/dashboard/content/edit/${content.id}`}>
                    <Pencil className="mr-2 h-4 w-4"/>
                    Ubah
                    </Link>
                </Button>
                <DeleteContent id={content.id}/>
            </div>
        );
    },
  },
]
