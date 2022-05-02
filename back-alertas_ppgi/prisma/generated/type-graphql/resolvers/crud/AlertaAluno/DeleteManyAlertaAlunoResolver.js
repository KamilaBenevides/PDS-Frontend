"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyAlertaAlunoResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const DeleteManyAlertaAlunoArgs_1 = require("./args/DeleteManyAlertaAlunoArgs");
const AlertaAluno_1 = require("../../../models/AlertaAluno");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let DeleteManyAlertaAlunoResolver = class DeleteManyAlertaAlunoResolver {
    async deleteManyAlertaAluno(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).alertaAluno.deleteMany({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyAlertaAlunoArgs_1.DeleteManyAlertaAlunoArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DeleteManyAlertaAlunoResolver.prototype, "deleteManyAlertaAluno", null);
DeleteManyAlertaAlunoResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => AlertaAluno_1.AlertaAluno)
], DeleteManyAlertaAlunoResolver);
exports.DeleteManyAlertaAlunoResolver = DeleteManyAlertaAlunoResolver;
