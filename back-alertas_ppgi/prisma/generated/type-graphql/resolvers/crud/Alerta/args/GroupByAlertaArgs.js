"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByAlertaArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AlertaOrderByWithAggregationInput_1 = require("../../../inputs/AlertaOrderByWithAggregationInput");
const AlertaScalarWhereWithAggregatesInput_1 = require("../../../inputs/AlertaScalarWhereWithAggregatesInput");
const AlertaWhereInput_1 = require("../../../inputs/AlertaWhereInput");
const AlertaScalarFieldEnum_1 = require("../../../../enums/AlertaScalarFieldEnum");
let GroupByAlertaArgs = class GroupByAlertaArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AlertaWhereInput_1.AlertaWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AlertaWhereInput_1.AlertaWhereInput)
], GroupByAlertaArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AlertaOrderByWithAggregationInput_1.AlertaOrderByWithAggregationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByAlertaArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AlertaScalarFieldEnum_1.AlertaScalarFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByAlertaArgs.prototype, "by", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AlertaScalarWhereWithAggregatesInput_1.AlertaScalarWhereWithAggregatesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AlertaScalarWhereWithAggregatesInput_1.AlertaScalarWhereWithAggregatesInput)
], GroupByAlertaArgs.prototype, "having", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByAlertaArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByAlertaArgs.prototype, "skip", void 0);
GroupByAlertaArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], GroupByAlertaArgs);
exports.GroupByAlertaArgs = GroupByAlertaArgs;
