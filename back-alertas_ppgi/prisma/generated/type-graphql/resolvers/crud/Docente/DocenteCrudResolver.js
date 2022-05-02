"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocenteCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const AggregateDocenteArgs_1 = require("./args/AggregateDocenteArgs");
const CreateDocenteArgs_1 = require("./args/CreateDocenteArgs");
const CreateManyDocenteArgs_1 = require("./args/CreateManyDocenteArgs");
const DeleteDocenteArgs_1 = require("./args/DeleteDocenteArgs");
const DeleteManyDocenteArgs_1 = require("./args/DeleteManyDocenteArgs");
const FindFirstDocenteArgs_1 = require("./args/FindFirstDocenteArgs");
const FindManyDocenteArgs_1 = require("./args/FindManyDocenteArgs");
const FindUniqueDocenteArgs_1 = require("./args/FindUniqueDocenteArgs");
const GroupByDocenteArgs_1 = require("./args/GroupByDocenteArgs");
const UpdateDocenteArgs_1 = require("./args/UpdateDocenteArgs");
const UpdateManyDocenteArgs_1 = require("./args/UpdateManyDocenteArgs");
const UpsertDocenteArgs_1 = require("./args/UpsertDocenteArgs");
const helpers_1 = require("../../../helpers");
const Docente_1 = require("../../../models/Docente");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateDocente_1 = require("../../outputs/AggregateDocente");
const DocenteGroupBy_1 = require("../../outputs/DocenteGroupBy");
let DocenteCrudResolver = class DocenteCrudResolver {
    async docente(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).docente.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstDocente(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).docente.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async docentes(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).docente.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createDocente(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).docente.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createManyDocente(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).docente.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteDocente(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).docente.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateDocente(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).docente.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyDocente(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).docente.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateManyDocente(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).docente.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertDocente(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).docente.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async aggregateDocente(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).docente.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
    async groupByDocente(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).docente.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Docente_1.Docente, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueDocenteArgs_1.FindUniqueDocenteArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DocenteCrudResolver.prototype, "docente", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Docente_1.Docente, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstDocenteArgs_1.FindFirstDocenteArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DocenteCrudResolver.prototype, "findFirstDocente", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Docente_1.Docente], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyDocenteArgs_1.FindManyDocenteArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DocenteCrudResolver.prototype, "docentes", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Docente_1.Docente, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateDocenteArgs_1.CreateDocenteArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DocenteCrudResolver.prototype, "createDocente", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyDocenteArgs_1.CreateManyDocenteArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DocenteCrudResolver.prototype, "createManyDocente", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Docente_1.Docente, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteDocenteArgs_1.DeleteDocenteArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DocenteCrudResolver.prototype, "deleteDocente", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Docente_1.Docente, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateDocenteArgs_1.UpdateDocenteArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DocenteCrudResolver.prototype, "updateDocente", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyDocenteArgs_1.DeleteManyDocenteArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DocenteCrudResolver.prototype, "deleteManyDocente", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyDocenteArgs_1.UpdateManyDocenteArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DocenteCrudResolver.prototype, "updateManyDocente", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Docente_1.Docente, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertDocenteArgs_1.UpsertDocenteArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DocenteCrudResolver.prototype, "upsertDocente", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateDocente_1.AggregateDocente, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateDocenteArgs_1.AggregateDocenteArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DocenteCrudResolver.prototype, "aggregateDocente", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [DocenteGroupBy_1.DocenteGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByDocenteArgs_1.GroupByDocenteArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DocenteCrudResolver.prototype, "groupByDocente", null);
DocenteCrudResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Docente_1.Docente)
], DocenteCrudResolver);
exports.DocenteCrudResolver = DocenteCrudResolver;
