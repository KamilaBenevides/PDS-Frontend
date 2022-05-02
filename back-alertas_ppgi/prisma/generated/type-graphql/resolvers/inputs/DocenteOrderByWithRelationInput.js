"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocenteOrderByWithRelationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AlunoOrderByRelationAggregateInput_1 = require("../inputs/AlunoOrderByRelationAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let DocenteOrderByWithRelationInput = class DocenteOrderByWithRelationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], DocenteOrderByWithRelationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], DocenteOrderByWithRelationInput.prototype, "nomeCompleto", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], DocenteOrderByWithRelationInput.prototype, "email", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AlunoOrderByRelationAggregateInput_1.AlunoOrderByRelationAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AlunoOrderByRelationAggregateInput_1.AlunoOrderByRelationAggregateInput)
], DocenteOrderByWithRelationInput.prototype, "AlunoOrientado", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AlunoOrderByRelationAggregateInput_1.AlunoOrderByRelationAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AlunoOrderByRelationAggregateInput_1.AlunoOrderByRelationAggregateInput)
], DocenteOrderByWithRelationInput.prototype, "AlunoCoorientado", void 0);
DocenteOrderByWithRelationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("DocenteOrderByWithRelationInput", {
        isAbstract: true
    })
], DocenteOrderByWithRelationInput);
exports.DocenteOrderByWithRelationInput = DocenteOrderByWithRelationInput;
