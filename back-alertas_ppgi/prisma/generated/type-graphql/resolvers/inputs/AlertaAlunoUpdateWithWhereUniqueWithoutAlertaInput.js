"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlertaAlunoUpdateWithWhereUniqueWithoutAlertaInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AlertaAlunoUpdateWithoutAlertaInput_1 = require("../inputs/AlertaAlunoUpdateWithoutAlertaInput");
const AlertaAlunoWhereUniqueInput_1 = require("../inputs/AlertaAlunoWhereUniqueInput");
let AlertaAlunoUpdateWithWhereUniqueWithoutAlertaInput = class AlertaAlunoUpdateWithWhereUniqueWithoutAlertaInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AlertaAlunoWhereUniqueInput_1.AlertaAlunoWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", AlertaAlunoWhereUniqueInput_1.AlertaAlunoWhereUniqueInput)
], AlertaAlunoUpdateWithWhereUniqueWithoutAlertaInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AlertaAlunoUpdateWithoutAlertaInput_1.AlertaAlunoUpdateWithoutAlertaInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", AlertaAlunoUpdateWithoutAlertaInput_1.AlertaAlunoUpdateWithoutAlertaInput)
], AlertaAlunoUpdateWithWhereUniqueWithoutAlertaInput.prototype, "data", void 0);
AlertaAlunoUpdateWithWhereUniqueWithoutAlertaInput = tslib_1.__decorate([
    TypeGraphQL.InputType("AlertaAlunoUpdateWithWhereUniqueWithoutAlertaInput", {
        isAbstract: true
    })
], AlertaAlunoUpdateWithWhereUniqueWithoutAlertaInput);
exports.AlertaAlunoUpdateWithWhereUniqueWithoutAlertaInput = AlertaAlunoUpdateWithWhereUniqueWithoutAlertaInput;
