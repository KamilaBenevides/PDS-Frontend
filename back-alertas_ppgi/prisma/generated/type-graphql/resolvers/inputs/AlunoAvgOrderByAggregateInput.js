"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlunoAvgOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let AlunoAvgOrderByAggregateInput = class AlunoAvgOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AlunoAvgOrderByAggregateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AlunoAvgOrderByAggregateInput.prototype, "orientadorId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AlunoAvgOrderByAggregateInput.prototype, "coorientadorId", void 0);
AlunoAvgOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("AlunoAvgOrderByAggregateInput", {
        isAbstract: true
    })
], AlunoAvgOrderByAggregateInput);
exports.AlunoAvgOrderByAggregateInput = AlunoAvgOrderByAggregateInput;
