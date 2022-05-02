"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlunoOrderByWithAggregationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AlunoAvgOrderByAggregateInput_1 = require("../inputs/AlunoAvgOrderByAggregateInput");
const AlunoCountOrderByAggregateInput_1 = require("../inputs/AlunoCountOrderByAggregateInput");
const AlunoMaxOrderByAggregateInput_1 = require("../inputs/AlunoMaxOrderByAggregateInput");
const AlunoMinOrderByAggregateInput_1 = require("../inputs/AlunoMinOrderByAggregateInput");
const AlunoSumOrderByAggregateInput_1 = require("../inputs/AlunoSumOrderByAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let AlunoOrderByWithAggregationInput = class AlunoOrderByWithAggregationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AlunoOrderByWithAggregationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AlunoOrderByWithAggregationInput.prototype, "nomeCompleto", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AlunoOrderByWithAggregationInput.prototype, "matricula", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AlunoOrderByWithAggregationInput.prototype, "dataIngresso", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AlunoOrderByWithAggregationInput.prototype, "dataLimite", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AlunoOrderByWithAggregationInput.prototype, "cpf", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AlunoOrderByWithAggregationInput.prototype, "emailInstitucional", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AlunoOrderByWithAggregationInput.prototype, "emailPessoal", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AlunoOrderByWithAggregationInput.prototype, "ativo", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AlunoOrderByWithAggregationInput.prototype, "orientadorId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AlunoOrderByWithAggregationInput.prototype, "coorientadorId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AlunoCountOrderByAggregateInput_1.AlunoCountOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AlunoCountOrderByAggregateInput_1.AlunoCountOrderByAggregateInput)
], AlunoOrderByWithAggregationInput.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AlunoAvgOrderByAggregateInput_1.AlunoAvgOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AlunoAvgOrderByAggregateInput_1.AlunoAvgOrderByAggregateInput)
], AlunoOrderByWithAggregationInput.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AlunoMaxOrderByAggregateInput_1.AlunoMaxOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AlunoMaxOrderByAggregateInput_1.AlunoMaxOrderByAggregateInput)
], AlunoOrderByWithAggregationInput.prototype, "_max", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AlunoMinOrderByAggregateInput_1.AlunoMinOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AlunoMinOrderByAggregateInput_1.AlunoMinOrderByAggregateInput)
], AlunoOrderByWithAggregationInput.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AlunoSumOrderByAggregateInput_1.AlunoSumOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AlunoSumOrderByAggregateInput_1.AlunoSumOrderByAggregateInput)
], AlunoOrderByWithAggregationInput.prototype, "_sum", void 0);
AlunoOrderByWithAggregationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("AlunoOrderByWithAggregationInput", {
        isAbstract: true
    })
], AlunoOrderByWithAggregationInput);
exports.AlunoOrderByWithAggregationInput = AlunoOrderByWithAggregationInput;
