"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByDocenteArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DocenteOrderByWithAggregationInput_1 = require("../../../inputs/DocenteOrderByWithAggregationInput");
const DocenteScalarWhereWithAggregatesInput_1 = require("../../../inputs/DocenteScalarWhereWithAggregatesInput");
const DocenteWhereInput_1 = require("../../../inputs/DocenteWhereInput");
const DocenteScalarFieldEnum_1 = require("../../../../enums/DocenteScalarFieldEnum");
let GroupByDocenteArgs = class GroupByDocenteArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DocenteWhereInput_1.DocenteWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DocenteWhereInput_1.DocenteWhereInput)
], GroupByDocenteArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [DocenteOrderByWithAggregationInput_1.DocenteOrderByWithAggregationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByDocenteArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [DocenteScalarFieldEnum_1.DocenteScalarFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByDocenteArgs.prototype, "by", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DocenteScalarWhereWithAggregatesInput_1.DocenteScalarWhereWithAggregatesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DocenteScalarWhereWithAggregatesInput_1.DocenteScalarWhereWithAggregatesInput)
], GroupByDocenteArgs.prototype, "having", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByDocenteArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByDocenteArgs.prototype, "skip", void 0);
GroupByDocenteArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], GroupByDocenteArgs);
exports.GroupByDocenteArgs = GroupByDocenteArgs;
