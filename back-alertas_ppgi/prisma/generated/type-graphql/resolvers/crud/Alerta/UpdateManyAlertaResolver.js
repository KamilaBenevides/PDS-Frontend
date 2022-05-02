"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyAlertaResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const UpdateManyAlertaArgs_1 = require("./args/UpdateManyAlertaArgs");
const Alerta_1 = require("../../../models/Alerta");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let UpdateManyAlertaResolver = class UpdateManyAlertaResolver {
    async updateManyAlerta(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).alerta.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyAlertaArgs_1.UpdateManyAlertaArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpdateManyAlertaResolver.prototype, "updateManyAlerta", null);
UpdateManyAlertaResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Alerta_1.Alerta)
], UpdateManyAlertaResolver);
exports.UpdateManyAlertaResolver = UpdateManyAlertaResolver;
