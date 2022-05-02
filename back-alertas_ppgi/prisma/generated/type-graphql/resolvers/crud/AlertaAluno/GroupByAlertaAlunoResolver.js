"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByAlertaAlunoResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const GroupByAlertaAlunoArgs_1 = require("./args/GroupByAlertaAlunoArgs");
const AlertaAluno_1 = require("../../../models/AlertaAluno");
const AlertaAlunoGroupBy_1 = require("../../outputs/AlertaAlunoGroupBy");
const helpers_1 = require("../../../helpers");
let GroupByAlertaAlunoResolver = class GroupByAlertaAlunoResolver {
    async groupByAlertaAluno(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).alertaAluno.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [AlertaAlunoGroupBy_1.AlertaAlunoGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByAlertaAlunoArgs_1.GroupByAlertaAlunoArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], GroupByAlertaAlunoResolver.prototype, "groupByAlertaAluno", null);
GroupByAlertaAlunoResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => AlertaAluno_1.AlertaAluno)
], GroupByAlertaAlunoResolver);
exports.GroupByAlertaAlunoResolver = GroupByAlertaAlunoResolver;
