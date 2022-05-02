"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindManyAlunoResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const FindManyAlunoArgs_1 = require("./args/FindManyAlunoArgs");
const Aluno_1 = require("../../../models/Aluno");
const helpers_1 = require("../../../helpers");
let FindManyAlunoResolver = class FindManyAlunoResolver {
    async alunos(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).aluno.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Aluno_1.Aluno], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyAlunoArgs_1.FindManyAlunoArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindManyAlunoResolver.prototype, "alunos", null);
FindManyAlunoResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Aluno_1.Aluno)
], FindManyAlunoResolver);
exports.FindManyAlunoResolver = FindManyAlunoResolver;
