"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlertaAlunoOrderByRelationAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let AlertaAlunoOrderByRelationAggregateInput = class AlertaAlunoOrderByRelationAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AlertaAlunoOrderByRelationAggregateInput.prototype, "_count", void 0);
AlertaAlunoOrderByRelationAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("AlertaAlunoOrderByRelationAggregateInput", {
        isAbstract: true
    })
], AlertaAlunoOrderByRelationAggregateInput);
exports.AlertaAlunoOrderByRelationAggregateInput = AlertaAlunoOrderByRelationAggregateInput;
