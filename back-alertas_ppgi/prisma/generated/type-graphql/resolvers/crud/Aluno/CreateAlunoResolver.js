"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateAlunoResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const CreateAlunoArgs_1 = require("./args/CreateAlunoArgs");
const Aluno_1 = require("../../../models/Aluno");
const helpers_1 = require("../../../helpers");
let CreateAlunoResolver = class CreateAlunoResolver {
    async createAluno(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).aluno.create({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateAlunoArgs_1.CreateAlunoArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CreateAlunoResolver.prototype, "createAluno", null);
CreateAlunoResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Aluno_1.Aluno)
], CreateAlunoResolver);
exports.CreateAlunoResolver = CreateAlunoResolver;
