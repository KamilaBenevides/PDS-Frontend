"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlertaAlunoOrderByWithAggregationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AlertaAlunoAvgOrderByAggregateInput_1 = require("../inputs/AlertaAlunoAvgOrderByAggregateInput");
const AlertaAlunoCountOrderByAggregateInput_1 = require("../inputs/AlertaAlunoCountOrderByAggregateInput");
const AlertaAlunoMaxOrderByAggregateInput_1 = require("../inputs/AlertaAlunoMaxOrderByAggregateInput");
const AlertaAlunoMinOrderByAggregateInput_1 = require("../inputs/AlertaAlunoMinOrderByAggregateInput");
const AlertaAlunoSumOrderByAggregateInput_1 = require("../inputs/AlertaAlunoSumOrderByAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let AlertaAlunoOrderByWithAggregationInput = class AlertaAlunoOrderByWithAggregationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AlertaAlunoOrderByWithAggregationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AlertaAlunoOrderByWithAggregationInput.prototype, "alunoId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AlertaAlunoOrderByWithAggregationInput.prototype, "alertaId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AlertaAlunoOrderByWithAggregationInput.prototype, "enviado", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AlertaAlunoOrderByWithAggregationInput.prototype, "resolvido", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AlertaAlunoOrderByWithAggregationInput.prototype, "ativo", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AlertaAlunoOrderByWithAggregationInput.prototype, "dataEnvioEmail", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AlertaAlunoCountOrderByAggregateInput_1.AlertaAlunoCountOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AlertaAlunoCountOrderByAggregateInput_1.AlertaAlunoCountOrderByAggregateInput)
], AlertaAlunoOrderByWithAggregationInput.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AlertaAlunoAvgOrderByAggregateInput_1.AlertaAlunoAvgOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AlertaAlunoAvgOrderByAggregateInput_1.AlertaAlunoAvgOrderByAggregateInput)
], AlertaAlunoOrderByWithAggregationInput.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AlertaAlunoMaxOrderByAggregateInput_1.AlertaAlunoMaxOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AlertaAlunoMaxOrderByAggregateInput_1.AlertaAlunoMaxOrderByAggregateInput)
], AlertaAlunoOrderByWithAggregationInput.prototype, "_max", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AlertaAlunoMinOrderByAggregateInput_1.AlertaAlunoMinOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AlertaAlunoMinOrderByAggregateInput_1.AlertaAlunoMinOrderByAggregateInput)
], AlertaAlunoOrderByWithAggregationInput.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AlertaAlunoSumOrderByAggregateInput_1.AlertaAlunoSumOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AlertaAlunoSumOrderByAggregateInput_1.AlertaAlunoSumOrderByAggregateInput)
], AlertaAlunoOrderByWithAggregationInput.prototype, "_sum", void 0);
AlertaAlunoOrderByWithAggregationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("AlertaAlunoOrderByWithAggregationInput", {
        isAbstract: true
    })
], AlertaAlunoOrderByWithAggregationInput);
exports.AlertaAlunoOrderByWithAggregationInput = AlertaAlunoOrderByWithAggregationInput;
