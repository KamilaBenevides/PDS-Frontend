"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlertaAlunoCreateWithoutAlunoInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AlertaCreateNestedOneWithoutAlertaAlunoInput_1 = require("../inputs/AlertaCreateNestedOneWithoutAlertaAlunoInput");
let AlertaAlunoCreateWithoutAlunoInput = class AlertaAlunoCreateWithoutAlunoInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AlertaCreateNestedOneWithoutAlertaAlunoInput_1.AlertaCreateNestedOneWithoutAlertaAlunoInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", AlertaCreateNestedOneWithoutAlertaAlunoInput_1.AlertaCreateNestedOneWithoutAlertaAlunoInput)
], AlertaAlunoCreateWithoutAlunoInput.prototype, "Alerta", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], AlertaAlunoCreateWithoutAlunoInput.prototype, "enviado", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], AlertaAlunoCreateWithoutAlunoInput.prototype, "resolvido", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], AlertaAlunoCreateWithoutAlunoInput.prototype, "ativo", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], AlertaAlunoCreateWithoutAlunoInput.prototype, "dataEnvioEmail", void 0);
AlertaAlunoCreateWithoutAlunoInput = tslib_1.__decorate([
    TypeGraphQL.InputType("AlertaAlunoCreateWithoutAlunoInput", {
        isAbstract: true
    })
], AlertaAlunoCreateWithoutAlunoInput);
exports.AlertaAlunoCreateWithoutAlunoInput = AlertaAlunoCreateWithoutAlunoInput;
