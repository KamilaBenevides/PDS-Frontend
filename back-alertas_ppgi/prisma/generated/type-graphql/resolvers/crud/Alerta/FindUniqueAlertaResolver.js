"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueAlertaResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const FindUniqueAlertaArgs_1 = require("./args/FindUniqueAlertaArgs");
const Alerta_1 = require("../../../models/Alerta");
const helpers_1 = require("../../../helpers");
let FindUniqueAlertaResolver = class FindUniqueAlertaResolver {
    async alerta(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).alerta.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Alerta_1.Alerta, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueAlertaArgs_1.FindUniqueAlertaArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindUniqueAlertaResolver.prototype, "alerta", null);
FindUniqueAlertaResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Alerta_1.Alerta)
], FindUniqueAlertaResolver);
exports.FindUniqueAlertaResolver = FindUniqueAlertaResolver;
