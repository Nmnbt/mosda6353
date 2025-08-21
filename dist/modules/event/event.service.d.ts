import { QueryDto } from 'globals/dto/query.dto';
import { Event } from 'models/event.entity';
import { EventDto } from './event.dto';
export declare class EventService {
    private readonly eventRepository;
    constructor(eventRepository: typeof Event);
    findAll(query: QueryDto): Promise<{
        rows: Event[];
        count: number;
    }>;
    findOne(id: number): Promise<Event>;
    create(event: EventDto): Promise<Event>;
    update(id: number, event: EventDto): Promise<Event>;
    delete(id: number): Promise<number>;
}
