"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByAlertaResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const GroupByAlertaArgs_1 = require("./args/GroupByAlertaArgs");
const Alerta_1 = require("../../../models/Alerta");
const AlertaGroupBy_1 = require("../../outputs/AlertaGroupBy");
const helpers_1 = require("../../../helpers");
let GroupByAlertaResolver = class GroupByAlertaResolver {
    async groupByAlerta(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).alerta.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [AlertaGroupBy_1.AlertaGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByAlertaArgs_1.GroupByAlertaArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], GroupByAlertaResolver.prototype, "groupByAlerta", null);
GroupByAlertaResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Alerta_1.Alerta)
], GroupByAlertaResolver);
exports.GroupByAlertaResolver = GroupByAlertaResolver;
