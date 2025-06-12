'use client';

import { Category } from "@/model/Category";
import { useEffect, useState } from "react";
import axiosInstance from "../../lib/axios";
import { ApiResponse } from "@/model/ApiResponse";
import Swal from "sweetalert2";
import Link from "next/link";
import Image from "next/image";
import { MenuButton, MenuItem, MenuItems, Menu as MenuList } from "@headlessui/react";
import { ChevronDownIcon, Menu, X } from "lucide-react";
import { Button } from "./ui/button";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const [categories, setCategories] = useState<Category[]>([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axiosInstance.get<ApiResponse<Category[]>>("/fe/categories");
                setCategories(response.data.data);
            } catch (error: any) {
                Swal.fire({
                    icon: "error",
                    title: "Oops!",
                    text: error.message,
                    toast: true,
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        }

        fetchData();
    }, []);

    return (
        <div className="container px-8 mx-auto xl:px-5 max-w-screen-lg py-5 lg:py-8">
            <nav>
                <div className="flex flex-wrap justify-between md:flex-nowrap md:gap-10">
                    <div className="order-1 hidden w-full flex-col items-center
                        justify-start md:order-none md:flex md:w-auto md:flex-row md:justify-start">
                        <Link href={"/"} className="w-28">
                            <Image alt="logo" src={"/img/news-logo.png"} width={132} height={52}/>
                        </Link>
                        <Link href={"/"} className="px-5 py-2 text-sm font-medium text-gray-600 hover:text-blue-500">Home</Link>
                        <MenuList as={"div"} className="relative inline-block text-left">
                            <div>
                                <MenuButton className="inline-flex w-full justify-center gap-x-1.5 
                                    bg-white px-3 py-2 text-sm  font-medium text-gray-900 ring-inset ring-gray-300 hover:bg-ray-50">
                                    Kategori
                                    <ChevronDownIcon aria-hidden="true" className="-mr-1 size-5 text-gray-400"/>
                                </MenuButton>
                            </div>
                            <MenuItems
                                transition
                                className="absolute z-10 mt-2 w-56 
                                    origin-top-right divide-y divide-gray-100 
                                    rounded-md bg-white shadow-lg ring-1 ring-black/5 
                                    transition focus:outline-none"
                            >
                                <div className="py-1">
                                    {categories.map((category) => (
                                        <MenuItem key={category.id}>
                                            <Link href={`/category/${category.id}`} className="block px-4 py-2 text-sm font-medium text-gray-900 hover:text-blue-500">
                                                {category.title}
                                            </Link>
                                        </MenuItem>
                                    ))}
                                </div>
                            </MenuItems>
                        </MenuList> 
                    </div>
                    <div className="flex w-full items-center justify-between md:w-auto">
                        <Link href={"/"} className="md:hidden w-28">
                            <Image alt="logo" src={"/img/news-logo.png"} width={132} height={52}/>
                        </Link>

                        <Button onClick={() => setMenuOpen(!menuOpen)}
                            className="ml-auto bg-transparent rounded-md px-2 py-1 text-gray-500 focus:bg-transparent focus:text-blue-500 focus:outline-none md:hidden">
                            {menuOpen && (
                                <X/>
                            )}

                            {!menuOpen && (
                                <Menu color="#178e96"/>
                            )}
                        </Button>
                    </div>
                    {menuOpen && (
                        <div className="order-2 -ml-4 mt-4 flex w-full flex-col items-center justify-start md:hidden">
                            {categories.map((category) => (
                                <Link href={`/category/${category.id}`} key={category.id} className="w-full px-5 py-2 text-sm font-medium text-gray-600 hover:text-blue-500">
                                    {category.title}
                                </Link>
                            ))}
                        </div>
                    )}
                </div>
            </nav>
        </div>
    );
}