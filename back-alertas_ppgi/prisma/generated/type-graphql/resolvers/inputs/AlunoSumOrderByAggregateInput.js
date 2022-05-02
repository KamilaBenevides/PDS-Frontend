"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlunoSumOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let AlunoSumOrderByAggregateInput = class AlunoSumOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AlunoSumOrderByAggregateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AlunoSumOrderByAggregateInput.prototype, "orientadorId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AlunoSumOrderByAggregateInput.prototype, "coorientadorId", void 0);
AlunoSumOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("AlunoSumOrderByAggregateInput", {
        isAbstract: true
    })
], AlunoSumOrderByAggregateInput);
exports.AlunoSumOrderByAggregateInput = AlunoSumOrderByAggregateInput;
