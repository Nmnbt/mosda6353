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
exports.NewsService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const news_entity_1 = require("../../models/news.entity");
const pagination_1 = require("../../utilities/pagination");
let NewsService = exports.NewsService = class NewsService {
    constructor(newsModel) {
        this.newsModel = newsModel;
    }
    async findAll(query) {
        return await this.newsModel.findAndCountAll(Object.assign({}, (0, pagination_1.paginate)(query)));
    }
    async findOne(id) {
        return await this.newsModel.findByPk(id);
    }
    async create(news) {
        return await this.newsModel.create(Object.assign({}, news));
    }
    async update(id, news) {
        const [_, [rows]] = await this.newsModel.update(Object.assign({}, news), { where: { id }, returning: ['*'] });
        return rows;
    }
    async delete(id) {
        return await this.newsModel.destroy({ where: { id } });
    }
};
exports.NewsService = NewsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(news_entity_1.News)),
    __metadata("design:paramtypes", [Object])
], NewsService);
//# sourceMappingURL=news.service.js.map