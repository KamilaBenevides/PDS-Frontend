"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateDocenteResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const AggregateDocenteArgs_1 = require("./args/AggregateDocenteArgs");
const Docente_1 = require("../../../models/Docente");
const AggregateDocente_1 = require("../../outputs/AggregateDocente");
const helpers_1 = require("../../../helpers");
let AggregateDocenteResolver = class AggregateDocenteResolver {
    async aggregateDocente(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).docente.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateDocente_1.AggregateDocente, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateDocenteArgs_1.AggregateDocenteArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AggregateDocenteResolver.prototype, "aggregateDocente", null);
AggregateDocenteResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Docente_1.Docente)
], AggregateDocenteResolver);
exports.AggregateDocenteResolver = AggregateDocenteResolver;
