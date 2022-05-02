"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByAlertaAlunoArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AlertaAlunoOrderByWithAggregationInput_1 = require("../../../inputs/AlertaAlunoOrderByWithAggregationInput");
const AlertaAlunoScalarWhereWithAggregatesInput_1 = require("../../../inputs/AlertaAlunoScalarWhereWithAggregatesInput");
const AlertaAlunoWhereInput_1 = require("../../../inputs/AlertaAlunoWhereInput");
const AlertaAlunoScalarFieldEnum_1 = require("../../../../enums/AlertaAlunoScalarFieldEnum");
let GroupByAlertaAlunoArgs = class GroupByAlertaAlunoArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AlertaAlunoWhereInput_1.AlertaAlunoWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AlertaAlunoWhereInput_1.AlertaAlunoWhereInput)
], GroupByAlertaAlunoArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AlertaAlunoOrderByWithAggregationInput_1.AlertaAlunoOrderByWithAggregationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByAlertaAlunoArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AlertaAlunoScalarFieldEnum_1.AlertaAlunoScalarFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByAlertaAlunoArgs.prototype, "by", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AlertaAlunoScalarWhereWithAggregatesInput_1.AlertaAlunoScalarWhereWithAggregatesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AlertaAlunoScalarWhereWithAggregatesInput_1.AlertaAlunoScalarWhereWithAggregatesInput)
], GroupByAlertaAlunoArgs.prototype, "having", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByAlertaAlunoArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByAlertaAlunoArgs.prototype, "skip", void 0);
GroupByAlertaAlunoArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], GroupByAlertaAlunoArgs);
exports.GroupByAlertaAlunoArgs = GroupByAlertaAlunoArgs;
