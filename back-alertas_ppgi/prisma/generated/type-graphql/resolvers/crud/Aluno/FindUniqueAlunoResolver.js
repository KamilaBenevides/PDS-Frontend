"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueAlunoResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const FindUniqueAlunoArgs_1 = require("./args/FindUniqueAlunoArgs");
const Aluno_1 = require("../../../models/Aluno");
const helpers_1 = require("../../../helpers");
let FindUniqueAlunoResolver = class FindUniqueAlunoResolver {
    async aluno(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).aluno.findUnique({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueAlunoArgs_1.FindUniqueAlunoArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindUniqueAlunoResolver.prototype, "aluno", null);
FindUniqueAlunoResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Aluno_1.Aluno)
], FindUniqueAlunoResolver);
exports.FindUniqueAlunoResolver = FindUniqueAlunoResolver;
