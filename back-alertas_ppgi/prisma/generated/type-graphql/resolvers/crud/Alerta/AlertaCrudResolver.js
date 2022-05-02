"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlertaCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const AggregateAlertaArgs_1 = require("./args/AggregateAlertaArgs");
const CreateAlertaArgs_1 = require("./args/CreateAlertaArgs");
const CreateManyAlertaArgs_1 = require("./args/CreateManyAlertaArgs");
const DeleteAlertaArgs_1 = require("./args/DeleteAlertaArgs");
const DeleteManyAlertaArgs_1 = require("./args/DeleteManyAlertaArgs");
const FindFirstAlertaArgs_1 = require("./args/FindFirstAlertaArgs");
const FindManyAlertaArgs_1 = require("./args/FindManyAlertaArgs");
const FindUniqueAlertaArgs_1 = require("./args/FindUniqueAlertaArgs");
const GroupByAlertaArgs_1 = require("./args/GroupByAlertaArgs");
const UpdateAlertaArgs_1 = require("./args/UpdateAlertaArgs");
const UpdateManyAlertaArgs_1 = require("./args/UpdateManyAlertaArgs");
const UpsertAlertaArgs_1 = require("./args/UpsertAlertaArgs");
const helpers_1 = require("../../../helpers");
const Alerta_1 = require("../../../models/Alerta");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateAlerta_1 = require("../../outputs/AggregateAlerta");
const AlertaGroupBy_1 = require("../../outputs/AlertaGroupBy");
let AlertaCrudResolver = class AlertaCrudResolver {
    async alerta(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).alerta.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstAlerta(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).alerta.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async alertas(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).alerta.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createAlerta(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).alerta.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createManyAlerta(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).alerta.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteAlerta(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).alerta.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateAlerta(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).alerta.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyAlerta(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).alerta.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateManyAlerta(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).alerta.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertAlerta(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).alerta.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async aggregateAlerta(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).alerta.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
    async groupByAlerta(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).alerta.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Alerta_1.Alerta, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueAlertaArgs_1.FindUniqueAlertaArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AlertaCrudResolver.prototype, "alerta", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Alerta_1.Alerta, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstAlertaArgs_1.FindFirstAlertaArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AlertaCrudResolver.prototype, "findFirstAlerta", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Alerta_1.Alerta], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyAlertaArgs_1.FindManyAlertaArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AlertaCrudResolver.prototype, "alertas", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Alerta_1.Alerta, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateAlertaArgs_1.CreateAlertaArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AlertaCrudResolver.prototype, "createAlerta", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyAlertaArgs_1.CreateManyAlertaArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AlertaCrudResolver.prototype, "createManyAlerta", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Alerta_1.Alerta, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteAlertaArgs_1.DeleteAlertaArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AlertaCrudResolver.prototype, "deleteAlerta", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Alerta_1.Alerta, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateAlertaArgs_1.UpdateAlertaArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AlertaCrudResolver.prototype, "updateAlerta", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyAlertaArgs_1.DeleteManyAlertaArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AlertaCrudResolver.prototype, "deleteManyAlerta", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyAlertaArgs_1.UpdateManyAlertaArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AlertaCrudResolver.prototype, "updateManyAlerta", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Alerta_1.Alerta, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertAlertaArgs_1.UpsertAlertaArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AlertaCrudResolver.prototype, "upsertAlerta", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateAlerta_1.AggregateAlerta, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateAlertaArgs_1.AggregateAlertaArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AlertaCrudResolver.prototype, "aggregateAlerta", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [AlertaGroupBy_1.AlertaGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByAlertaArgs_1.GroupByAlertaArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AlertaCrudResolver.prototype, "groupByAlerta", null);
AlertaCrudResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Alerta_1.Alerta)
], AlertaCrudResolver);
exports.AlertaCrudResolver = AlertaCrudResolver;
