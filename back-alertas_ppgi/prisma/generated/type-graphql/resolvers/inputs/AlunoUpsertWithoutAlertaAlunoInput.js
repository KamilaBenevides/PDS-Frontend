"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlunoUpsertWithoutAlertaAlunoInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AlunoCreateWithoutAlertaAlunoInput_1 = require("../inputs/AlunoCreateWithoutAlertaAlunoInput");
const AlunoUpdateWithoutAlertaAlunoInput_1 = require("../inputs/AlunoUpdateWithoutAlertaAlunoInput");
let AlunoUpsertWithoutAlertaAlunoInput = class AlunoUpsertWithoutAlertaAlunoInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AlunoUpdateWithoutAlertaAlunoInput_1.AlunoUpdateWithoutAlertaAlunoInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", AlunoUpdateWithoutAlertaAlunoInput_1.AlunoUpdateWithoutAlertaAlunoInput)
], AlunoUpsertWithoutAlertaAlunoInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AlunoCreateWithoutAlertaAlunoInput_1.AlunoCreateWithoutAlertaAlunoInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", AlunoCreateWithoutAlertaAlunoInput_1.AlunoCreateWithoutAlertaAlunoInput)
], AlunoUpsertWithoutAlertaAlunoInput.prototype, "create", void 0);
AlunoUpsertWithoutAlertaAlunoInput = tslib_1.__decorate([
    TypeGraphQL.InputType("AlunoUpsertWithoutAlertaAlunoInput", {
        isAbstract: true
    })
], AlunoUpsertWithoutAlertaAlunoInput);
exports.AlunoUpsertWithoutAlertaAlunoInput = AlunoUpsertWithoutAlertaAlunoInput;
