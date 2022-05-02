"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateAlertaResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const UpdateAlertaArgs_1 = require("./args/UpdateAlertaArgs");
const Alerta_1 = require("../../../models/Alerta");
const helpers_1 = require("../../../helpers");
let UpdateAlertaResolver = class UpdateAlertaResolver {
    async updateAlerta(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).alerta.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Alerta_1.Alerta, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateAlertaArgs_1.UpdateAlertaArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpdateAlertaResolver.prototype, "updateAlerta", null);
UpdateAlertaResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Alerta_1.Alerta)
], UpdateAlertaResolver);
exports.UpdateAlertaResolver = UpdateAlertaResolver;
