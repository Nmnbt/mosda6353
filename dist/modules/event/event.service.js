"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const event_entity_1 = require("../../models/event.entity");
const pagination_1 = require("../../utilities/pagination");
let EventService = exports.EventService = class EventService {
    constructor(eventRepository) {
        this.eventRepository = eventRepository;
    }
    async findAll(query) {
        return await this.eventRepository.findAndCountAll(Object.assign({}, (0, pagination_1.paginate)(query)));
    }
    async findOne(id) {
        return await this.eventRepository.findByPk(id);
    }
    async create(event) {
        return await this.eventRepository.create(Object.assign({}, event));
    }
    async update(id, event) {
        const [_, [affectedRows]] = await this.eventRepository.update(Object.assign({}, event), { where: { id }, returning: ['*'] });
        return affectedRows;
    }
    async delete(id) {
        return await this.eventRepository.destroy({ where: { id } });
    }
};
exports.EventService = EventService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(event_entity_1.Event)),
    __metadata("design:paramtypes", [Object])
], EventService);
//# sourceMappingURL=event.service.js.map