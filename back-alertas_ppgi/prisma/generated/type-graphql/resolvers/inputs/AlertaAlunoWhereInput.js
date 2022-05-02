"use strict";
var AlertaAlunoWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlertaAlunoWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AlertaRelationFilter_1 = require("../inputs/AlertaRelationFilter");
const AlunoRelationFilter_1 = require("../inputs/AlunoRelationFilter");
const BoolFilter_1 = require("../inputs/BoolFilter");
const DateTimeFilter_1 = require("../inputs/DateTimeFilter");
const IntFilter_1 = require("../inputs/IntFilter");
let AlertaAlunoWhereInput = AlertaAlunoWhereInput_1 = class AlertaAlunoWhereInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AlertaAlunoWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AlertaAlunoWhereInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AlertaAlunoWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AlertaAlunoWhereInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AlertaAlunoWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AlertaAlunoWhereInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFilter_1.IntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFilter_1.IntFilter)
], AlertaAlunoWhereInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AlunoRelationFilter_1.AlunoRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AlunoRelationFilter_1.AlunoRelationFilter)
], AlertaAlunoWhereInput.prototype, "aluno", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFilter_1.IntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFilter_1.IntFilter)
], AlertaAlunoWhereInput.prototype, "alunoId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AlertaRelationFilter_1.AlertaRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AlertaRelationFilter_1.AlertaRelationFilter)
], AlertaAlunoWhereInput.prototype, "Alerta", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFilter_1.IntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFilter_1.IntFilter)
], AlertaAlunoWhereInput.prototype, "alertaId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BoolFilter_1.BoolFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BoolFilter_1.BoolFilter)
], AlertaAlunoWhereInput.prototype, "enviado", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BoolFilter_1.BoolFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BoolFilter_1.BoolFilter)
], AlertaAlunoWhereInput.prototype, "resolvido", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BoolFilter_1.BoolFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BoolFilter_1.BoolFilter)
], AlertaAlunoWhereInput.prototype, "ativo", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], AlertaAlunoWhereInput.prototype, "dataEnvioEmail", void 0);
AlertaAlunoWhereInput = AlertaAlunoWhereInput_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("AlertaAlunoWhereInput", {
        isAbstract: true
    })
], AlertaAlunoWhereInput);
exports.AlertaAlunoWhereInput = AlertaAlunoWhereInput;
