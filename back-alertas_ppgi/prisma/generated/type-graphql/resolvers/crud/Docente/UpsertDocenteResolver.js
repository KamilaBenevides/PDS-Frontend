"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertDocenteResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const UpsertDocenteArgs_1 = require("./args/UpsertDocenteArgs");
const Docente_1 = require("../../../models/Docente");
const helpers_1 = require("../../../helpers");
let UpsertDocenteResolver = class UpsertDocenteResolver {
    async upsertDocente(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).docente.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Docente_1.Docente, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertDocenteArgs_1.UpsertDocenteArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpsertDocenteResolver.prototype, "upsertDocente", null);
UpsertDocenteResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Docente_1.Docente)
], UpsertDocenteResolver);
exports.UpsertDocenteResolver = UpsertDocenteResolver;
