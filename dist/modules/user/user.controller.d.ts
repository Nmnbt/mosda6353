import { QueryDto } from 'globals/dto/query.dto';
import { UserDto } from './user.dto';
import { UserService } from './user.service';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    findAll(query: QueryDto): Promise<{
        rows: import("../../models/user.entity").User[];
        count: number;
    }>;
    create(data: UserDto): Promise<import("../../models/user.entity").User>;
}
