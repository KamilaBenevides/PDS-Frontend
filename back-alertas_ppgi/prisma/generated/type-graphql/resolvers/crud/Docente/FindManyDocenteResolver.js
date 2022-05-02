"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindManyDocenteResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const FindManyDocenteArgs_1 = require("./args/FindManyDocenteArgs");
const Docente_1 = require("../../../models/Docente");
const helpers_1 = require("../../../helpers");
let FindManyDocenteResolver = class FindManyDocenteResolver {
    async docentes(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).docente.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Docente_1.Docente], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyDocenteArgs_1.FindManyDocenteArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindManyDocenteResolver.prototype, "docentes", null);
FindManyDocenteResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Docente_1.Docente)
], FindManyDocenteResolver);
exports.FindManyDocenteResolver = FindManyDocenteResolver;
