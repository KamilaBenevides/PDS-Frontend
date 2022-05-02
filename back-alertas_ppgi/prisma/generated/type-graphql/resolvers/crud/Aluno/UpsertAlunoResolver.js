"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertAlunoResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const UpsertAlunoArgs_1 = require("./args/UpsertAlunoArgs");
const Aluno_1 = require("../../../models/Aluno");
const helpers_1 = require("../../../helpers");
let UpsertAlunoResolver = class UpsertAlunoResolver {
    async upsertAluno(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).aluno.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Aluno_1.Aluno, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertAlunoArgs_1.UpsertAlunoArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpsertAlunoResolver.prototype, "upsertAluno", null);
UpsertAlunoResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Aluno_1.Aluno)
], UpsertAlunoResolver);
exports.UpsertAlunoResolver = UpsertAlunoResolver;
