import { QueryDto } from '../../globals/dto/query.dto';
import { User } from 'models/user.entity';
import { UserDto } from './user.dto';
export declare class UserService {
    private userRepository;
    constructor(userRepository: typeof User);
    findAll(query: QueryDto): Promise<{
        rows: User[];
        count: number;
    }>;
    findOneByNumber(email: string): Promise<User>;
    create(data: UserDto): Promise<User>;
}
