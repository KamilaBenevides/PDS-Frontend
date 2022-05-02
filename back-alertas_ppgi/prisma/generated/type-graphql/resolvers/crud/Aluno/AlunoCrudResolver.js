"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlunoCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const AggregateAlunoArgs_1 = require("./args/AggregateAlunoArgs");
const CreateAlunoArgs_1 = require("./args/CreateAlunoArgs");
const CreateManyAlunoArgs_1 = require("./args/CreateManyAlunoArgs");
const DeleteAlunoArgs_1 = require("./args/DeleteAlunoArgs");
const DeleteManyAlunoArgs_1 = require("./args/DeleteManyAlunoArgs");
const FindFirstAlunoArgs_1 = require("./args/FindFirstAlunoArgs");
const FindManyAlunoArgs_1 = require("./args/FindManyAlunoArgs");
const FindUniqueAlunoArgs_1 = require("./args/FindUniqueAlunoArgs");
const GroupByAlunoArgs_1 = require("./args/GroupByAlunoArgs");
const UpdateAlunoArgs_1 = require("./args/UpdateAlunoArgs");
const UpdateManyAlunoArgs_1 = require("./args/UpdateManyAlunoArgs");
const UpsertAlunoArgs_1 = require("./args/UpsertAlunoArgs");
const helpers_1 = require("../../../helpers");
const Aluno_1 = require("../../../models/Aluno");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateAluno_1 = require("../../outputs/AggregateAluno");
const AlunoGroupBy_1 = require("../../outputs/AlunoGroupBy");
let AlunoCrudResolver = class AlunoCrudResolver {
    async aluno(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).aluno.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstAluno(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).aluno.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async alunos(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).aluno.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createAluno(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).aluno.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createManyAluno(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).aluno.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteAluno(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).aluno.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateAluno(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).aluno.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyAluno(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).aluno.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateManyAluno(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).aluno.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertAluno(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).aluno.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async aggregateAluno(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).aluno.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
    async groupByAluno(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).aluno.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
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
], AlunoCrudResolver.prototype, "aluno", null);
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
], AlunoCrudResolver.prototype, "findFirstAluno", null);
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
], AlunoCrudResolver.prototype, "alunos", null);
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
], AlunoCrudResolver.prototype, "createAluno", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyAlunoArgs_1.CreateManyAlunoArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AlunoCrudResolver.prototype, "createManyAluno", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Aluno_1.Aluno, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteAlunoArgs_1.DeleteAlunoArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AlunoCrudResolver.prototype, "deleteAluno", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Aluno_1.Aluno, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateAlunoArgs_1.UpdateAlunoArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AlunoCrudResolver.prototype, "updateAluno", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyAlunoArgs_1.DeleteManyAlunoArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AlunoCrudResolver.prototype, "deleteManyAluno", null);
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
], AlunoCrudResolver.prototype, "updateManyAluno", null);
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
], AlunoCrudResolver.prototype, "upsertAluno", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateAluno_1.AggregateAluno, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateAlunoArgs_1.AggregateAlunoArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AlunoCrudResolver.prototype, "aggregateAluno", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [AlunoGroupBy_1.AlunoGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByAlunoArgs_1.GroupByAlunoArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AlunoCrudResolver.prototype, "groupByAluno", null);
AlunoCrudResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Aluno_1.Aluno)
], AlunoCrudResolver);
exports.AlunoCrudResolver = AlunoCrudResolver;
