"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlertaOrderByWithRelationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AlertaAlunoOrderByRelationAggregateInput_1 = require("../inputs/AlertaAlunoOrderByRelationAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let AlertaOrderByWithRelationInput = class AlertaOrderByWithRelationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AlertaOrderByWithRelationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AlertaOrderByWithRelationInput.prototype, "diasIntervalo", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AlertaOrderByWithRelationInput.prototype, "nome", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AlertaOrderByWithRelationInput.prototype, "corpoEmail", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AlertaAlunoOrderByRelationAggregateInput_1.AlertaAlunoOrderByRelationAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AlertaAlunoOrderByRelationAggregateInput_1.AlertaAlunoOrderByRelationAggregateInput)
], AlertaOrderByWithRelationInput.prototype, "AlertaAluno", void 0);
AlertaOrderByWithRelationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("AlertaOrderByWithRelationInput", {
        isAbstract: true
    })
], AlertaOrderByWithRelationInput);
exports.AlertaOrderByWithRelationInput = AlertaOrderByWithRelationInput;
