"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateAlertaResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const AggregateAlertaArgs_1 = require("./args/AggregateAlertaArgs");
const Alerta_1 = require("../../../models/Alerta");
const AggregateAlerta_1 = require("../../outputs/AggregateAlerta");
const helpers_1 = require("../../../helpers");
let AggregateAlertaResolver = class AggregateAlertaResolver {
    async aggregateAlerta(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).alerta.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateAlerta_1.AggregateAlerta, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateAlertaArgs_1.AggregateAlertaArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AggregateAlertaResolver.prototype, "aggregateAlerta", null);
AggregateAlertaResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Alerta_1.Alerta)
], AggregateAlertaResolver);
exports.AggregateAlertaResolver = AggregateAlertaResolver;
