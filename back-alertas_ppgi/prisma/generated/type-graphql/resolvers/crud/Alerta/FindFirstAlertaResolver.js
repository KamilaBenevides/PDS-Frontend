"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstAlertaResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const FindFirstAlertaArgs_1 = require("./args/FindFirstAlertaArgs");
const Alerta_1 = require("../../../models/Alerta");
const helpers_1 = require("../../../helpers");
let FindFirstAlertaResolver = class FindFirstAlertaResolver {
    async findFirstAlerta(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).alerta.findFirst({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstAlertaArgs_1.FindFirstAlertaArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindFirstAlertaResolver.prototype, "findFirstAlerta", null);
FindFirstAlertaResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Alerta_1.Alerta)
], FindFirstAlertaResolver);
exports.FindFirstAlertaResolver = FindFirstAlertaResolver;
