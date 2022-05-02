"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateAlertaAlunoResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const AggregateAlertaAlunoArgs_1 = require("./args/AggregateAlertaAlunoArgs");
const AlertaAluno_1 = require("../../../models/AlertaAluno");
const AggregateAlertaAluno_1 = require("../../outputs/AggregateAlertaAluno");
const helpers_1 = require("../../../helpers");
let AggregateAlertaAlunoResolver = class AggregateAlertaAlunoResolver {
    async aggregateAlertaAluno(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).alertaAluno.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateAlertaAluno_1.AggregateAlertaAluno, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateAlertaAlunoArgs_1.AggregateAlertaAlunoArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AggregateAlertaAlunoResolver.prototype, "aggregateAlertaAluno", null);
AggregateAlertaAlunoResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => AlertaAluno_1.AlertaAluno)
], AggregateAlertaAlunoResolver);
exports.AggregateAlertaAlunoResolver = AggregateAlertaAlunoResolver;
