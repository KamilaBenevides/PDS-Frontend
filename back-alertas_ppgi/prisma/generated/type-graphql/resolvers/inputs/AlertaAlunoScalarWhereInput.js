"use strict";
var AlertaAlunoScalarWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlertaAlunoScalarWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BoolFilter_1 = require("../inputs/BoolFilter");
const DateTimeFilter_1 = require("../inputs/DateTimeFilter");
const IntFilter_1 = require("../inputs/IntFilter");
let AlertaAlunoScalarWhereInput = AlertaAlunoScalarWhereInput_1 = class AlertaAlunoScalarWhereInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AlertaAlunoScalarWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AlertaAlunoScalarWhereInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AlertaAlunoScalarWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AlertaAlunoScalarWhereInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AlertaAlunoScalarWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AlertaAlunoScalarWhereInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFilter_1.IntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFilter_1.IntFilter)
], AlertaAlunoScalarWhereInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFilter_1.IntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFilter_1.IntFilter)
], AlertaAlunoScalarWhereInput.prototype, "alunoId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFilter_1.IntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFilter_1.IntFilter)
], AlertaAlunoScalarWhereInput.prototype, "alertaId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BoolFilter_1.BoolFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BoolFilter_1.BoolFilter)
], AlertaAlunoScalarWhereInput.prototype, "enviado", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BoolFilter_1.BoolFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BoolFilter_1.BoolFilter)
], AlertaAlunoScalarWhereInput.prototype, "resolvido", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BoolFilter_1.BoolFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BoolFilter_1.BoolFilter)
], AlertaAlunoScalarWhereInput.prototype, "ativo", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], AlertaAlunoScalarWhereInput.prototype, "dataEnvioEmail", void 0);
AlertaAlunoScalarWhereInput = AlertaAlunoScalarWhereInput_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("AlertaAlunoScalarWhereInput", {
        isAbstract: true
    })
], AlertaAlunoScalarWhereInput);
exports.AlertaAlunoScalarWhereInput = AlertaAlunoScalarWhereInput;
