"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstDocenteResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const FindFirstDocenteArgs_1 = require("./args/FindFirstDocenteArgs");
const Docente_1 = require("../../../models/Docente");
const helpers_1 = require("../../../helpers");
let FindFirstDocenteResolver = class FindFirstDocenteResolver {
    async findFirstDocente(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).docente.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Docente_1.Docente, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstDocenteArgs_1.FindFirstDocenteArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindFirstDocenteResolver.prototype, "findFirstDocente", null);
FindFirstDocenteResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Docente_1.Docente)
], FindFirstDocenteResolver);
exports.FindFirstDocenteResolver = FindFirstDocenteResolver;
