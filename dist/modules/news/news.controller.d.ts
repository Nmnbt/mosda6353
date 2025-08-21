import { NewsService } from './news.service';
import { QueryDto } from 'globals/dto/query.dto';
import { NewsDto } from './news.dto';
export declare class NewsController {
    private readonly newsService;
    constructor(newsService: NewsService);
    findAll(query: QueryDto): Promise<{
        rows: import("../../models/news.entity").News[];
        count: number;
    }>;
    create(news: NewsDto): Promise<import("../../models/news.entity").News>;
    findOne(id: number): Promise<import("../../models/news.entity").News>;
    update(id: number, news: NewsDto): Promise<import("../../models/news.entity").News>;
    delete(id: number): Promise<number>;
}
