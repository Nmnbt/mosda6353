import { EventService } from './event.service';
import { QueryDto } from 'globals/dto/query.dto';
import { EventDto } from './event.dto';
export declare class EventController {
    private readonly eventService;
    constructor(eventService: EventService);
    findAll(query: QueryDto): Promise<{
        rows: import("../../models/event.entity").Event[];
        count: number;
    }>;
    create(body: EventDto): Promise<import("../../models/event.entity").Event>;
    findOne(id: number): Promise<import("../../models/event.entity").Event>;
    update(id: number, body: EventDto): Promise<import("../../models/event.entity").Event>;
    delete(id: number): Promise<number>;
}
