"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateAlertaAlunoResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const UpdateAlertaAlunoArgs_1 = require("./args/UpdateAlertaAlunoArgs");
const AlertaAluno_1 = require("../../../models/AlertaAluno");
const helpers_1 = require("../../../helpers");
let UpdateAlertaAlunoResolver = class UpdateAlertaAlunoResolver {
    async updateAlertaAluno(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).alertaAluno.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AlertaAluno_1.AlertaAluno, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateAlertaAlunoArgs_1.UpdateAlertaAlunoArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpdateAlertaAlunoResolver.prototype, "updateAlertaAluno", null);
UpdateAlertaAlunoResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => AlertaAluno_1.AlertaAluno)
], UpdateAlertaAlunoResolver);
exports.UpdateAlertaAlunoResolver = UpdateAlertaAlunoResolver;
