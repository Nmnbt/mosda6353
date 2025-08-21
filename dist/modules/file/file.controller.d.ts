/// <reference types="node" />
import { FileService } from './file.service';
import { File } from '@nest-lab/fastify-multer';
export declare class FileController {
    private readonly fileService;
    constructor(fileService: FileService);
    singleFile(file: File): Promise<{
        path: string;
    }>;
    getFile(path: string): Promise<Buffer>;
}
