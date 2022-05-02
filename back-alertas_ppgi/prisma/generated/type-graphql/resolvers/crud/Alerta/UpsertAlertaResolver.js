"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertAlertaResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const UpsertAlertaArgs_1 = require("./args/UpsertAlertaArgs");
const Alerta_1 = require("../../../models/Alerta");
const helpers_1 = require("../../../helpers");
let UpsertAlertaResolver = class UpsertAlertaResolver {
    async upsertAlerta(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).alerta.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Alerta_1.Alerta, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertAlertaArgs_1.UpsertAlertaArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpsertAlertaResolver.prototype, "upsertAlerta", null);
UpsertAlertaResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Alerta_1.Alerta)
], UpsertAlertaResolver);
exports.UpsertAlertaResolver = UpsertAlertaResolver;
