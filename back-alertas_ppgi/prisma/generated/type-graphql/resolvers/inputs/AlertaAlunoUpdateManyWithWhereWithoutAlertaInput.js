"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlertaAlunoUpdateManyWithWhereWithoutAlertaInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AlertaAlunoScalarWhereInput_1 = require("../inputs/AlertaAlunoScalarWhereInput");
const AlertaAlunoUpdateManyMutationInput_1 = require("../inputs/AlertaAlunoUpdateManyMutationInput");
let AlertaAlunoUpdateManyWithWhereWithoutAlertaInput = class AlertaAlunoUpdateManyWithWhereWithoutAlertaInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AlertaAlunoScalarWhereInput_1.AlertaAlunoScalarWhereInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", AlertaAlunoScalarWhereInput_1.AlertaAlunoScalarWhereInput)
], AlertaAlunoUpdateManyWithWhereWithoutAlertaInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AlertaAlunoUpdateManyMutationInput_1.AlertaAlunoUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", AlertaAlunoUpdateManyMutationInput_1.AlertaAlunoUpdateManyMutationInput)
], AlertaAlunoUpdateManyWithWhereWithoutAlertaInput.prototype, "data", void 0);
AlertaAlunoUpdateManyWithWhereWithoutAlertaInput = tslib_1.__decorate([
    TypeGraphQL.InputType("AlertaAlunoUpdateManyWithWhereWithoutAlertaInput", {
        isAbstract: true
    })
], AlertaAlunoUpdateManyWithWhereWithoutAlertaInput);
exports.AlertaAlunoUpdateManyWithWhereWithoutAlertaInput = AlertaAlunoUpdateManyWithWhereWithoutAlertaInput;
