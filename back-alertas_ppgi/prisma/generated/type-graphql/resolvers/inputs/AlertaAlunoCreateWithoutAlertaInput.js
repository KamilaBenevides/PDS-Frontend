"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlertaAlunoCreateWithoutAlertaInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AlunoCreateNestedOneWithoutAlertaAlunoInput_1 = require("../inputs/AlunoCreateNestedOneWithoutAlertaAlunoInput");
let AlertaAlunoCreateWithoutAlertaInput = class AlertaAlunoCreateWithoutAlertaInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AlunoCreateNestedOneWithoutAlertaAlunoInput_1.AlunoCreateNestedOneWithoutAlertaAlunoInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", AlunoCreateNestedOneWithoutAlertaAlunoInput_1.AlunoCreateNestedOneWithoutAlertaAlunoInput)
], AlertaAlunoCreateWithoutAlertaInput.prototype, "aluno", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], AlertaAlunoCreateWithoutAlertaInput.prototype, "enviado", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], AlertaAlunoCreateWithoutAlertaInput.prototype, "resolvido", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], AlertaAlunoCreateWithoutAlertaInput.prototype, "ativo", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], AlertaAlunoCreateWithoutAlertaInput.prototype, "dataEnvioEmail", void 0);
AlertaAlunoCreateWithoutAlertaInput = tslib_1.__decorate([
    TypeGraphQL.InputType("AlertaAlunoCreateWithoutAlertaInput", {
        isAbstract: true
    })
], AlertaAlunoCreateWithoutAlertaInput);
exports.AlertaAlunoCreateWithoutAlertaInput = AlertaAlunoCreateWithoutAlertaInput;
