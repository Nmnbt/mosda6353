"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginate = void 0;
function paginate(query) {
    if (query.interval) {
        return {
            offset: query.interval[0],
            limit: query.interval[1] - query.interval[0],
        };
    }
    return {
        offset: (query.page - 1) * query.limit || 0,
        limit: query.limit || 24,
    };
}
exports.paginate = paginate;
//# sourceMappingURL=pagination.js.map