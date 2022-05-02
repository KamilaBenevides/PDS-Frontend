"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlunoUpdateManyWithoutOrientadorInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AlunoCreateManyOrientadorInputEnvelope_1 = require("../inputs/AlunoCreateManyOrientadorInputEnvelope");
const AlunoCreateOrConnectWithoutOrientadorInput_1 = require("../inputs/AlunoCreateOrConnectWithoutOrientadorInput");
const AlunoCreateWithoutOrientadorInput_1 = require("../inputs/AlunoCreateWithoutOrientadorInput");
const AlunoScalarWhereInput_1 = require("../inputs/AlunoScalarWhereInput");
const AlunoUpdateManyWithWhereWithoutOrientadorInput_1 = require("../inputs/AlunoUpdateManyWithWhereWithoutOrientadorInput");
const AlunoUpdateWithWhereUniqueWithoutOrientadorInput_1 = require("../inputs/AlunoUpdateWithWhereUniqueWithoutOrientadorInput");
const AlunoUpsertWithWhereUniqueWithoutOrientadorInput_1 = require("../inputs/AlunoUpsertWithWhereUniqueWithoutOrientadorInput");
const AlunoWhereUniqueInput_1 = require("../inputs/AlunoWhereUniqueInput");
let AlunoUpdateManyWithoutOrientadorInput = class AlunoUpdateManyWithoutOrientadorInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AlunoCreateWithoutOrientadorInput_1.AlunoCreateWithoutOrientadorInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AlunoUpdateManyWithoutOrientadorInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AlunoCreateOrConnectWithoutOrientadorInput_1.AlunoCreateOrConnectWithoutOrientadorInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AlunoUpdateManyWithoutOrientadorInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AlunoUpsertWithWhereUniqueWithoutOrientadorInput_1.AlunoUpsertWithWhereUniqueWithoutOrientadorInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AlunoUpdateManyWithoutOrientadorInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AlunoCreateManyOrientadorInputEnvelope_1.AlunoCreateManyOrientadorInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AlunoCreateManyOrientadorInputEnvelope_1.AlunoCreateManyOrientadorInputEnvelope)
], AlunoUpdateManyWithoutOrientadorInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AlunoWhereUniqueInput_1.AlunoWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AlunoUpdateManyWithoutOrientadorInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AlunoWhereUniqueInput_1.AlunoWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AlunoUpdateManyWithoutOrientadorInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AlunoWhereUniqueInput_1.AlunoWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AlunoUpdateManyWithoutOrientadorInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AlunoWhereUniqueInput_1.AlunoWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AlunoUpdateManyWithoutOrientadorInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AlunoUpdateWithWhereUniqueWithoutOrientadorInput_1.AlunoUpdateWithWhereUniqueWithoutOrientadorInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AlunoUpdateManyWithoutOrientadorInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AlunoUpdateManyWithWhereWithoutOrientadorInput_1.AlunoUpdateManyWithWhereWithoutOrientadorInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AlunoUpdateManyWithoutOrientadorInput.prototype, "updateMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AlunoScalarWhereInput_1.AlunoScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AlunoUpdateManyWithoutOrientadorInput.prototype, "deleteMany", void 0);
AlunoUpdateManyWithoutOrientadorInput = tslib_1.__decorate([
    TypeGraphQL.InputType("AlunoUpdateManyWithoutOrientadorInput", {
        isAbstract: true
    })
], AlunoUpdateManyWithoutOrientadorInput);
exports.AlunoUpdateManyWithoutOrientadorInput = AlunoUpdateManyWithoutOrientadorInput;
