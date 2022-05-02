"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyAlunoResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const UpdateManyAlunoArgs_1 = require("./args/UpdateManyAlunoArgs");
const Aluno_1 = require("../../../models/Aluno");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let UpdateManyAlunoResolver = class UpdateManyAlunoResolver {
    async updateManyAluno(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).aluno.updateMany({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyAlunoArgs_1.UpdateManyAlunoArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpdateManyAlunoResolver.prototype, "updateManyAluno", null);
UpdateManyAlunoResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Aluno_1.Aluno)
], UpdateManyAlunoResolver);
exports.UpdateManyAlunoResolver = UpdateManyAlunoResolver;
