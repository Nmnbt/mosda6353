import { IPagination } from 'types/pagination.type';
export declare class QueryDto implements IPagination {
    interval?: [number, number];
    page?: number;
    limit?: number;
}
