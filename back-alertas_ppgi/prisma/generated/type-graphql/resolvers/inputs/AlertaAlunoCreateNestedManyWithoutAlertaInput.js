"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlertaAlunoCreateNestedManyWithoutAlertaInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AlertaAlunoCreateManyAlertaInputEnvelope_1 = require("../inputs/AlertaAlunoCreateManyAlertaInputEnvelope");
const AlertaAlunoCreateOrConnectWithoutAlertaInput_1 = require("../inputs/AlertaAlunoCreateOrConnectWithoutAlertaInput");
const AlertaAlunoCreateWithoutAlertaInput_1 = require("../inputs/AlertaAlunoCreateWithoutAlertaInput");
const AlertaAlunoWhereUniqueInput_1 = require("../inputs/AlertaAlunoWhereUniqueInput");
let AlertaAlunoCreateNestedManyWithoutAlertaInput = class AlertaAlunoCreateNestedManyWithoutAlertaInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AlertaAlunoCreateWithoutAlertaInput_1.AlertaAlunoCreateWithoutAlertaInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AlertaAlunoCreateNestedManyWithoutAlertaInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AlertaAlunoCreateOrConnectWithoutAlertaInput_1.AlertaAlunoCreateOrConnectWithoutAlertaInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AlertaAlunoCreateNestedManyWithoutAlertaInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AlertaAlunoCreateManyAlertaInputEnvelope_1.AlertaAlunoCreateManyAlertaInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AlertaAlunoCreateManyAlertaInputEnvelope_1.AlertaAlunoCreateManyAlertaInputEnvelope)
], AlertaAlunoCreateNestedManyWithoutAlertaInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AlertaAlunoWhereUniqueInput_1.AlertaAlunoWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AlertaAlunoCreateNestedManyWithoutAlertaInput.prototype, "connect", void 0);
AlertaAlunoCreateNestedManyWithoutAlertaInput = tslib_1.__decorate([
    TypeGraphQL.InputType("AlertaAlunoCreateNestedManyWithoutAlertaInput", {
        isAbstract: true
    })
], AlertaAlunoCreateNestedManyWithoutAlertaInput);
exports.AlertaAlunoCreateNestedManyWithoutAlertaInput = AlertaAlunoCreateNestedManyWithoutAlertaInput;
