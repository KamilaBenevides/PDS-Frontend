"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstAlunoResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const FindFirstAlunoArgs_1 = require("./args/FindFirstAlunoArgs");
const Aluno_1 = require("../../../models/Aluno");
const helpers_1 = require("../../../helpers");
let FindFirstAlunoResolver = class FindFirstAlunoResolver {
    async findFirstAluno(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).aluno.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Aluno_1.Aluno, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstAlunoArgs_1.FindFirstAlunoArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindFirstAlunoResolver.prototype, "findFirstAluno", null);
FindFirstAlunoResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Aluno_1.Aluno)
], FindFirstAlunoResolver);
exports.FindFirstAlunoResolver = FindFirstAlunoResolver;
