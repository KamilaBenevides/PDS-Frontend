"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlertaOrderByWithAggregationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AlertaAvgOrderByAggregateInput_1 = require("../inputs/AlertaAvgOrderByAggregateInput");
const AlertaCountOrderByAggregateInput_1 = require("../inputs/AlertaCountOrderByAggregateInput");
const AlertaMaxOrderByAggregateInput_1 = require("../inputs/AlertaMaxOrderByAggregateInput");
const AlertaMinOrderByAggregateInput_1 = require("../inputs/AlertaMinOrderByAggregateInput");
const AlertaSumOrderByAggregateInput_1 = require("../inputs/AlertaSumOrderByAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let AlertaOrderByWithAggregationInput = class AlertaOrderByWithAggregationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AlertaOrderByWithAggregationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AlertaOrderByWithAggregationInput.prototype, "diasIntervalo", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AlertaOrderByWithAggregationInput.prototype, "nome", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AlertaOrderByWithAggregationInput.prototype, "corpoEmail", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AlertaCountOrderByAggregateInput_1.AlertaCountOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AlertaCountOrderByAggregateInput_1.AlertaCountOrderByAggregateInput)
], AlertaOrderByWithAggregationInput.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AlertaAvgOrderByAggregateInput_1.AlertaAvgOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AlertaAvgOrderByAggregateInput_1.AlertaAvgOrderByAggregateInput)
], AlertaOrderByWithAggregationInput.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AlertaMaxOrderByAggregateInput_1.AlertaMaxOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AlertaMaxOrderByAggregateInput_1.AlertaMaxOrderByAggregateInput)
], AlertaOrderByWithAggregationInput.prototype, "_max", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AlertaMinOrderByAggregateInput_1.AlertaMinOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AlertaMinOrderByAggregateInput_1.AlertaMinOrderByAggregateInput)
], AlertaOrderByWithAggregationInput.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AlertaSumOrderByAggregateInput_1.AlertaSumOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AlertaSumOrderByAggregateInput_1.AlertaSumOrderByAggregateInput)
], AlertaOrderByWithAggregationInput.prototype, "_sum", void 0);
AlertaOrderByWithAggregationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("AlertaOrderByWithAggregationInput", {
        isAbstract: true
    })
], AlertaOrderByWithAggregationInput);
exports.AlertaOrderByWithAggregationInput = AlertaOrderByWithAggregationInput;
