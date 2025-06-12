export interface Meta {
    status: boolean;
    message: string;
}

export interface ApiResponse<T> {
    data: T;
    meta: Meta;
    pagination?: Pagination
}

export interface Pagination {
    total_count: number;
    per_page: number;
    page: number;
    total_pages: number;
}