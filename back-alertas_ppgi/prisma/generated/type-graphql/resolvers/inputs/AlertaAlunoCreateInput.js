"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlertaAlunoCreateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AlertaCreateNestedOneWithoutAlertaAlunoInput_1 = require("../inputs/AlertaCreateNestedOneWithoutAlertaAlunoInput");
const AlunoCreateNestedOneWithoutAlertaAlunoInput_1 = require("../inputs/AlunoCreateNestedOneWithoutAlertaAlunoInput");
let AlertaAlunoCreateInput = class AlertaAlunoCreateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AlunoCreateNestedOneWithoutAlertaAlunoInput_1.AlunoCreateNestedOneWithoutAlertaAlunoInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", AlunoCreateNestedOneWithoutAlertaAlunoInput_1.AlunoCreateNestedOneWithoutAlertaAlunoInput)
], AlertaAlunoCreateInput.prototype, "aluno", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AlertaCreateNestedOneWithoutAlertaAlunoInput_1.AlertaCreateNestedOneWithoutAlertaAlunoInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", AlertaCreateNestedOneWithoutAlertaAlunoInput_1.AlertaCreateNestedOneWithoutAlertaAlunoInput)
], AlertaAlunoCreateInput.prototype, "Alerta", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], AlertaAlunoCreateInput.prototype, "enviado", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], AlertaAlunoCreateInput.prototype, "resolvido", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], AlertaAlunoCreateInput.prototype, "ativo", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], AlertaAlunoCreateInput.prototype, "dataEnvioEmail", void 0);
AlertaAlunoCreateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("AlertaAlunoCreateInput", {
        isAbstract: true
    })
], AlertaAlunoCreateInput);
exports.AlertaAlunoCreateInput = AlertaAlunoCreateInput;
