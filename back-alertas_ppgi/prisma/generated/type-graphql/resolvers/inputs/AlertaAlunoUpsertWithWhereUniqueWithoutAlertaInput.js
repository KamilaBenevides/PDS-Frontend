"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlertaAlunoUpsertWithWhereUniqueWithoutAlertaInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AlertaAlunoCreateWithoutAlertaInput_1 = require("../inputs/AlertaAlunoCreateWithoutAlertaInput");
const AlertaAlunoUpdateWithoutAlertaInput_1 = require("../inputs/AlertaAlunoUpdateWithoutAlertaInput");
const AlertaAlunoWhereUniqueInput_1 = require("../inputs/AlertaAlunoWhereUniqueInput");
let AlertaAlunoUpsertWithWhereUniqueWithoutAlertaInput = class AlertaAlunoUpsertWithWhereUniqueWithoutAlertaInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AlertaAlunoWhereUniqueInput_1.AlertaAlunoWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", AlertaAlunoWhereUniqueInput_1.AlertaAlunoWhereUniqueInput)
], AlertaAlunoUpsertWithWhereUniqueWithoutAlertaInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AlertaAlunoUpdateWithoutAlertaInput_1.AlertaAlunoUpdateWithoutAlertaInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", AlertaAlunoUpdateWithoutAlertaInput_1.AlertaAlunoUpdateWithoutAlertaInput)
], AlertaAlunoUpsertWithWhereUniqueWithoutAlertaInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AlertaAlunoCreateWithoutAlertaInput_1.AlertaAlunoCreateWithoutAlertaInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", AlertaAlunoCreateWithoutAlertaInput_1.AlertaAlunoCreateWithoutAlertaInput)
], AlertaAlunoUpsertWithWhereUniqueWithoutAlertaInput.prototype, "create", void 0);
AlertaAlunoUpsertWithWhereUniqueWithoutAlertaInput = tslib_1.__decorate([
    TypeGraphQL.InputType("AlertaAlunoUpsertWithWhereUniqueWithoutAlertaInput", {
        isAbstract: true
    })
], AlertaAlunoUpsertWithWhereUniqueWithoutAlertaInput);
exports.AlertaAlunoUpsertWithWhereUniqueWithoutAlertaInput = AlertaAlunoUpsertWithWhereUniqueWithoutAlertaInput;
