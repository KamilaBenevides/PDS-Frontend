"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlertaAlunoUpdateManyWithoutAlunoInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AlertaAlunoCreateManyAlunoInputEnvelope_1 = require("../inputs/AlertaAlunoCreateManyAlunoInputEnvelope");
const AlertaAlunoCreateOrConnectWithoutAlunoInput_1 = require("../inputs/AlertaAlunoCreateOrConnectWithoutAlunoInput");
const AlertaAlunoCreateWithoutAlunoInput_1 = require("../inputs/AlertaAlunoCreateWithoutAlunoInput");
const AlertaAlunoScalarWhereInput_1 = require("../inputs/AlertaAlunoScalarWhereInput");
const AlertaAlunoUpdateManyWithWhereWithoutAlunoInput_1 = require("../inputs/AlertaAlunoUpdateManyWithWhereWithoutAlunoInput");
const AlertaAlunoUpdateWithWhereUniqueWithoutAlunoInput_1 = require("../inputs/AlertaAlunoUpdateWithWhereUniqueWithoutAlunoInput");
const AlertaAlunoUpsertWithWhereUniqueWithoutAlunoInput_1 = require("../inputs/AlertaAlunoUpsertWithWhereUniqueWithoutAlunoInput");
const AlertaAlunoWhereUniqueInput_1 = require("../inputs/AlertaAlunoWhereUniqueInput");
let AlertaAlunoUpdateManyWithoutAlunoInput = class AlertaAlunoUpdateManyWithoutAlunoInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AlertaAlunoCreateWithoutAlunoInput_1.AlertaAlunoCreateWithoutAlunoInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AlertaAlunoUpdateManyWithoutAlunoInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AlertaAlunoCreateOrConnectWithoutAlunoInput_1.AlertaAlunoCreateOrConnectWithoutAlunoInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AlertaAlunoUpdateManyWithoutAlunoInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AlertaAlunoUpsertWithWhereUniqueWithoutAlunoInput_1.AlertaAlunoUpsertWithWhereUniqueWithoutAlunoInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AlertaAlunoUpdateManyWithoutAlunoInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AlertaAlunoCreateManyAlunoInputEnvelope_1.AlertaAlunoCreateManyAlunoInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AlertaAlunoCreateManyAlunoInputEnvelope_1.AlertaAlunoCreateManyAlunoInputEnvelope)
], AlertaAlunoUpdateManyWithoutAlunoInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AlertaAlunoWhereUniqueInput_1.AlertaAlunoWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AlertaAlunoUpdateManyWithoutAlunoInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AlertaAlunoWhereUniqueInput_1.AlertaAlunoWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AlertaAlunoUpdateManyWithoutAlunoInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AlertaAlunoWhereUniqueInput_1.AlertaAlunoWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AlertaAlunoUpdateManyWithoutAlunoInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AlertaAlunoWhereUniqueInput_1.AlertaAlunoWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AlertaAlunoUpdateManyWithoutAlunoInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AlertaAlunoUpdateWithWhereUniqueWithoutAlunoInput_1.AlertaAlunoUpdateWithWhereUniqueWithoutAlunoInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AlertaAlunoUpdateManyWithoutAlunoInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AlertaAlunoUpdateManyWithWhereWithoutAlunoInput_1.AlertaAlunoUpdateManyWithWhereWithoutAlunoInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AlertaAlunoUpdateManyWithoutAlunoInput.prototype, "updateMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AlertaAlunoScalarWhereInput_1.AlertaAlunoScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AlertaAlunoUpdateManyWithoutAlunoInput.prototype, "deleteMany", void 0);
AlertaAlunoUpdateManyWithoutAlunoInput = tslib_1.__decorate([
    TypeGraphQL.InputType("AlertaAlunoUpdateManyWithoutAlunoInput", {
        isAbstract: true
    })
], AlertaAlunoUpdateManyWithoutAlunoInput);
exports.AlertaAlunoUpdateManyWithoutAlunoInput = AlertaAlunoUpdateManyWithoutAlunoInput;
