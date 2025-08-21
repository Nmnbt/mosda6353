import { QueryDto } from 'globals/dto/query.dto';
import { News } from 'models/news.entity';
import { NewsDto } from './news.dto';
export declare class NewsService {
    private newsModel;
    constructor(newsModel: typeof News);
    findAll(query: QueryDto): Promise<{
        rows: News[];
        count: number;
    }>;
    findOne(id: number): Promise<News>;
    create(news: NewsDto): Promise<News>;
    update(id: number, news: NewsDto): Promise<News>;
    delete(id: number): Promise<number>;
}
