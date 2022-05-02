"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteAlertaAlunoResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const DeleteAlertaAlunoArgs_1 = require("./args/DeleteAlertaAlunoArgs");
const AlertaAluno_1 = require("../../../models/AlertaAluno");
const helpers_1 = require("../../../helpers");
let DeleteAlertaAlunoResolver = class DeleteAlertaAlunoResolver {
    async deleteAlertaAluno(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).alertaAluno.delete({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteAlertaAlunoArgs_1.DeleteAlertaAlunoArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DeleteAlertaAlunoResolver.prototype, "deleteAlertaAluno", null);
DeleteAlertaAlunoResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => AlertaAluno_1.AlertaAluno)
], DeleteAlertaAlunoResolver);
exports.DeleteAlertaAlunoResolver = DeleteAlertaAlunoResolver;
