"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateAlertaResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const CreateAlertaArgs_1 = require("./args/CreateAlertaArgs");
const Alerta_1 = require("../../../models/Alerta");
const helpers_1 = require("../../../helpers");
let CreateAlertaResolver = class CreateAlertaResolver {
    async createAlerta(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).alerta.create({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateAlertaArgs_1.CreateAlertaArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CreateAlertaResolver.prototype, "createAlerta", null);
CreateAlertaResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Alerta_1.Alerta)
], CreateAlertaResolver);
exports.CreateAlertaResolver = CreateAlertaResolver;
