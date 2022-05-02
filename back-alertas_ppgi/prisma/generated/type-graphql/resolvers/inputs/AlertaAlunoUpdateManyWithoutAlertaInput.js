"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlertaAlunoUpdateManyWithoutAlertaInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AlertaAlunoCreateManyAlertaInputEnvelope_1 = require("../inputs/AlertaAlunoCreateManyAlertaInputEnvelope");
const AlertaAlunoCreateOrConnectWithoutAlertaInput_1 = require("../inputs/AlertaAlunoCreateOrConnectWithoutAlertaInput");
const AlertaAlunoCreateWithoutAlertaInput_1 = require("../inputs/AlertaAlunoCreateWithoutAlertaInput");
const AlertaAlunoScalarWhereInput_1 = require("../inputs/AlertaAlunoScalarWhereInput");
const AlertaAlunoUpdateManyWithWhereWithoutAlertaInput_1 = require("../inputs/AlertaAlunoUpdateManyWithWhereWithoutAlertaInput");
const AlertaAlunoUpdateWithWhereUniqueWithoutAlertaInput_1 = require("../inputs/AlertaAlunoUpdateWithWhereUniqueWithoutAlertaInput");
const AlertaAlunoUpsertWithWhereUniqueWithoutAlertaInput_1 = require("../inputs/AlertaAlunoUpsertWithWhereUniqueWithoutAlertaInput");
const AlertaAlunoWhereUniqueInput_1 = require("../inputs/AlertaAlunoWhereUniqueInput");
let AlertaAlunoUpdateManyWithoutAlertaInput = class AlertaAlunoUpdateManyWithoutAlertaInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AlertaAlunoCreateWithoutAlertaInput_1.AlertaAlunoCreateWithoutAlertaInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AlertaAlunoUpdateManyWithoutAlertaInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AlertaAlunoCreateOrConnectWithoutAlertaInput_1.AlertaAlunoCreateOrConnectWithoutAlertaInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AlertaAlunoUpdateManyWithoutAlertaInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AlertaAlunoUpsertWithWhereUniqueWithoutAlertaInput_1.AlertaAlunoUpsertWithWhereUniqueWithoutAlertaInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AlertaAlunoUpdateManyWithoutAlertaInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AlertaAlunoCreateManyAlertaInputEnvelope_1.AlertaAlunoCreateManyAlertaInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AlertaAlunoCreateManyAlertaInputEnvelope_1.AlertaAlunoCreateManyAlertaInputEnvelope)
], AlertaAlunoUpdateManyWithoutAlertaInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AlertaAlunoWhereUniqueInput_1.AlertaAlunoWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AlertaAlunoUpdateManyWithoutAlertaInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AlertaAlunoWhereUniqueInput_1.AlertaAlunoWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AlertaAlunoUpdateManyWithoutAlertaInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AlertaAlunoWhereUniqueInput_1.AlertaAlunoWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AlertaAlunoUpdateManyWithoutAlertaInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AlertaAlunoWhereUniqueInput_1.AlertaAlunoWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AlertaAlunoUpdateManyWithoutAlertaInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AlertaAlunoUpdateWithWhereUniqueWithoutAlertaInput_1.AlertaAlunoUpdateWithWhereUniqueWithoutAlertaInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AlertaAlunoUpdateManyWithoutAlertaInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AlertaAlunoUpdateManyWithWhereWithoutAlertaInput_1.AlertaAlunoUpdateManyWithWhereWithoutAlertaInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AlertaAlunoUpdateManyWithoutAlertaInput.prototype, "updateMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AlertaAlunoScalarWhereInput_1.AlertaAlunoScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AlertaAlunoUpdateManyWithoutAlertaInput.prototype, "deleteMany", void 0);
AlertaAlunoUpdateManyWithoutAlertaInput = tslib_1.__decorate([
    TypeGraphQL.InputType("AlertaAlunoUpdateManyWithoutAlertaInput", {
        isAbstract: true
    })
], AlertaAlunoUpdateManyWithoutAlertaInput);
exports.AlertaAlunoUpdateManyWithoutAlertaInput = AlertaAlunoUpdateManyWithoutAlertaInput;
