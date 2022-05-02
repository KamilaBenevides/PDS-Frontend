"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlertaCreateWithoutAlertaAlunoInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let AlertaCreateWithoutAlertaAlunoInput = class AlertaCreateWithoutAlertaAlunoInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], AlertaCreateWithoutAlertaAlunoInput.prototype, "diasIntervalo", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], AlertaCreateWithoutAlertaAlunoInput.prototype, "nome", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AlertaCreateWithoutAlertaAlunoInput.prototype, "corpoEmail", void 0);
AlertaCreateWithoutAlertaAlunoInput = tslib_1.__decorate([
    TypeGraphQL.InputType("AlertaCreateWithoutAlertaAlunoInput", {
        isAbstract: true
    })
], AlertaCreateWithoutAlertaAlunoInput);
exports.AlertaCreateWithoutAlertaAlunoInput = AlertaCreateWithoutAlertaAlunoInput;
