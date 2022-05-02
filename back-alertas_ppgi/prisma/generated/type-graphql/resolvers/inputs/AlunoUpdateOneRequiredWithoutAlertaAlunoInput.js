"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlunoUpdateOneRequiredWithoutAlertaAlunoInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AlunoCreateOrConnectWithoutAlertaAlunoInput_1 = require("../inputs/AlunoCreateOrConnectWithoutAlertaAlunoInput");
const AlunoCreateWithoutAlertaAlunoInput_1 = require("../inputs/AlunoCreateWithoutAlertaAlunoInput");
const AlunoUpdateWithoutAlertaAlunoInput_1 = require("../inputs/AlunoUpdateWithoutAlertaAlunoInput");
const AlunoUpsertWithoutAlertaAlunoInput_1 = require("../inputs/AlunoUpsertWithoutAlertaAlunoInput");
const AlunoWhereUniqueInput_1 = require("../inputs/AlunoWhereUniqueInput");
let AlunoUpdateOneRequiredWithoutAlertaAlunoInput = class AlunoUpdateOneRequiredWithoutAlertaAlunoInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AlunoCreateWithoutAlertaAlunoInput_1.AlunoCreateWithoutAlertaAlunoInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AlunoCreateWithoutAlertaAlunoInput_1.AlunoCreateWithoutAlertaAlunoInput)
], AlunoUpdateOneRequiredWithoutAlertaAlunoInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AlunoCreateOrConnectWithoutAlertaAlunoInput_1.AlunoCreateOrConnectWithoutAlertaAlunoInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AlunoCreateOrConnectWithoutAlertaAlunoInput_1.AlunoCreateOrConnectWithoutAlertaAlunoInput)
], AlunoUpdateOneRequiredWithoutAlertaAlunoInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AlunoUpsertWithoutAlertaAlunoInput_1.AlunoUpsertWithoutAlertaAlunoInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AlunoUpsertWithoutAlertaAlunoInput_1.AlunoUpsertWithoutAlertaAlunoInput)
], AlunoUpdateOneRequiredWithoutAlertaAlunoInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AlunoWhereUniqueInput_1.AlunoWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AlunoWhereUniqueInput_1.AlunoWhereUniqueInput)
], AlunoUpdateOneRequiredWithoutAlertaAlunoInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AlunoUpdateWithoutAlertaAlunoInput_1.AlunoUpdateWithoutAlertaAlunoInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AlunoUpdateWithoutAlertaAlunoInput_1.AlunoUpdateWithoutAlertaAlunoInput)
], AlunoUpdateOneRequiredWithoutAlertaAlunoInput.prototype, "update", void 0);
AlunoUpdateOneRequiredWithoutAlertaAlunoInput = tslib_1.__decorate([
    TypeGraphQL.InputType("AlunoUpdateOneRequiredWithoutAlertaAlunoInput", {
        isAbstract: true
    })
], AlunoUpdateOneRequiredWithoutAlertaAlunoInput);
exports.AlunoUpdateOneRequiredWithoutAlertaAlunoInput = AlunoUpdateOneRequiredWithoutAlertaAlunoInput;
