"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlertaAlunoSumOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let AlertaAlunoSumOrderByAggregateInput = class AlertaAlunoSumOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AlertaAlunoSumOrderByAggregateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AlertaAlunoSumOrderByAggregateInput.prototype, "alunoId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AlertaAlunoSumOrderByAggregateInput.prototype, "alertaId", void 0);
AlertaAlunoSumOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("AlertaAlunoSumOrderByAggregateInput", {
        isAbstract: true
    })
], AlertaAlunoSumOrderByAggregateInput);
exports.AlertaAlunoSumOrderByAggregateInput = AlertaAlunoSumOrderByAggregateInput;
