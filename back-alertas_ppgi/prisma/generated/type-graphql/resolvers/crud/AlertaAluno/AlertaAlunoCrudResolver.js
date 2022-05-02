"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlertaAlunoCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const AggregateAlertaAlunoArgs_1 = require("./args/AggregateAlertaAlunoArgs");
const CreateAlertaAlunoArgs_1 = require("./args/CreateAlertaAlunoArgs");
const CreateManyAlertaAlunoArgs_1 = require("./args/CreateManyAlertaAlunoArgs");
const DeleteAlertaAlunoArgs_1 = require("./args/DeleteAlertaAlunoArgs");
const DeleteManyAlertaAlunoArgs_1 = require("./args/DeleteManyAlertaAlunoArgs");
const FindFirstAlertaAlunoArgs_1 = require("./args/FindFirstAlertaAlunoArgs");
const FindManyAlertaAlunoArgs_1 = require("./args/FindManyAlertaAlunoArgs");
const FindUniqueAlertaAlunoArgs_1 = require("./args/FindUniqueAlertaAlunoArgs");
const GroupByAlertaAlunoArgs_1 = require("./args/GroupByAlertaAlunoArgs");
const UpdateAlertaAlunoArgs_1 = require("./args/UpdateAlertaAlunoArgs");
const UpdateManyAlertaAlunoArgs_1 = require("./args/UpdateManyAlertaAlunoArgs");
const UpsertAlertaAlunoArgs_1 = require("./args/UpsertAlertaAlunoArgs");
const helpers_1 = require("../../../helpers");
const AlertaAluno_1 = require("../../../models/AlertaAluno");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateAlertaAluno_1 = require("../../outputs/AggregateAlertaAluno");
const AlertaAlunoGroupBy_1 = require("../../outputs/AlertaAlunoGroupBy");
let AlertaAlunoCrudResolver = class AlertaAlunoCrudResolver {
    async alertaAluno(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).alertaAluno.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstAlertaAluno(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).alertaAluno.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async alertaAlunos(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).alertaAluno.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createAlertaAluno(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).alertaAluno.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createManyAlertaAluno(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).alertaAluno.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteAlertaAluno(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).alertaAluno.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateAlertaAluno(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).alertaAluno.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyAlertaAluno(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).alertaAluno.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateManyAlertaAluno(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).alertaAluno.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertAlertaAluno(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).alertaAluno.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async aggregateAlertaAluno(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).alertaAluno.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
    async groupByAlertaAluno(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).alertaAluno.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AlertaAluno_1.AlertaAluno, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueAlertaAlunoArgs_1.FindUniqueAlertaAlunoArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AlertaAlunoCrudResolver.prototype, "alertaAluno", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AlertaAluno_1.AlertaAluno, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstAlertaAlunoArgs_1.FindFirstAlertaAlunoArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AlertaAlunoCrudResolver.prototype, "findFirstAlertaAluno", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [AlertaAluno_1.AlertaAluno], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyAlertaAlunoArgs_1.FindManyAlertaAlunoArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AlertaAlunoCrudResolver.prototype, "alertaAlunos", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AlertaAluno_1.AlertaAluno, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateAlertaAlunoArgs_1.CreateAlertaAlunoArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AlertaAlunoCrudResolver.prototype, "createAlertaAluno", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyAlertaAlunoArgs_1.CreateManyAlertaAlunoArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AlertaAlunoCrudResolver.prototype, "createManyAlertaAluno", null);
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
], AlertaAlunoCrudResolver.prototype, "deleteAlertaAluno", null);
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
], AlertaAlunoCrudResolver.prototype, "updateAlertaAluno", null);
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
], AlertaAlunoCrudResolver.prototype, "deleteManyAlertaAluno", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyAlertaAlunoArgs_1.UpdateManyAlertaAlunoArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AlertaAlunoCrudResolver.prototype, "updateManyAlertaAluno", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AlertaAluno_1.AlertaAluno, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertAlertaAlunoArgs_1.UpsertAlertaAlunoArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AlertaAlunoCrudResolver.prototype, "upsertAlertaAluno", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateAlertaAluno_1.AggregateAlertaAluno, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateAlertaAlunoArgs_1.AggregateAlertaAlunoArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AlertaAlunoCrudResolver.prototype, "aggregateAlertaAluno", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [AlertaAlunoGroupBy_1.AlertaAlunoGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByAlertaAlunoArgs_1.GroupByAlertaAlunoArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AlertaAlunoCrudResolver.prototype, "groupByAlertaAluno", null);
AlertaAlunoCrudResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => AlertaAluno_1.AlertaAluno)
], AlertaAlunoCrudResolver);
exports.AlertaAlunoCrudResolver = AlertaAlunoCrudResolver;
