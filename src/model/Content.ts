
export interface Content {
    id: number;
    title: string;
    description: string;
    excerpt: string;
    image: string;
    tags: string[];
    status: string;
    category_name: string;
    created_at: string;
    author: string;
    created_by_name: string;
    created_by_id: number;
    category_id: number;
}

export interface ContentRequest {
    title: string;
    description: string;
    excerpt: string;
    image: string;
    tags: string;
    status: string;
    category_id: number;
}