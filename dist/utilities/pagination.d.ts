import { IPagination } from 'types/pagination.type';
export declare function paginate(query: IPagination): {
    offset: number;
    limit: number;
};
