"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlertaAlunoOrderByWithRelationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AlertaOrderByWithRelationInput_1 = require("../inputs/AlertaOrderByWithRelationInput");
const AlunoOrderByWithRelationInput_1 = require("../inputs/AlunoOrderByWithRelationInput");
const SortOrder_1 = require("../../enums/SortOrder");
let AlertaAlunoOrderByWithRelationInput = class AlertaAlunoOrderByWithRelationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AlertaAlunoOrderByWithRelationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AlunoOrderByWithRelationInput_1.AlunoOrderByWithRelationInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AlunoOrderByWithRelationInput_1.AlunoOrderByWithRelationInput)
], AlertaAlunoOrderByWithRelationInput.prototype, "aluno", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AlertaAlunoOrderByWithRelationInput.prototype, "alunoId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AlertaOrderByWithRelationInput_1.AlertaOrderByWithRelationInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AlertaOrderByWithRelationInput_1.AlertaOrderByWithRelationInput)
], AlertaAlunoOrderByWithRelationInput.prototype, "Alerta", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AlertaAlunoOrderByWithRelationInput.prototype, "alertaId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AlertaAlunoOrderByWithRelationInput.prototype, "enviado", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AlertaAlunoOrderByWithRelationInput.prototype, "resolvido", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AlertaAlunoOrderByWithRelationInput.prototype, "ativo", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AlertaAlunoOrderByWithRelationInput.prototype, "dataEnvioEmail", void 0);
AlertaAlunoOrderByWithRelationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("AlertaAlunoOrderByWithRelationInput", {
        isAbstract: true
    })
], AlertaAlunoOrderByWithRelationInput);
exports.AlertaAlunoOrderByWithRelationInput = AlertaAlunoOrderByWithRelationInput;
