"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlunoOrderByRelationAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let AlunoOrderByRelationAggregateInput = class AlunoOrderByRelationAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AlunoOrderByRelationAggregateInput.prototype, "_count", void 0);
AlunoOrderByRelationAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("AlunoOrderByRelationAggregateInput", {
        isAbstract: true
    })
], AlunoOrderByRelationAggregateInput);
exports.AlunoOrderByRelationAggregateInput = AlunoOrderByRelationAggregateInput;
