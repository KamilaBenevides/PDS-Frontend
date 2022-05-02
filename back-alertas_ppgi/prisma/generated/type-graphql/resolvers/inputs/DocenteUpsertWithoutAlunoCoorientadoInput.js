"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocenteUpsertWithoutAlunoCoorientadoInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DocenteCreateWithoutAlunoCoorientadoInput_1 = require("../inputs/DocenteCreateWithoutAlunoCoorientadoInput");
const DocenteUpdateWithoutAlunoCoorientadoInput_1 = require("../inputs/DocenteUpdateWithoutAlunoCoorientadoInput");
let DocenteUpsertWithoutAlunoCoorientadoInput = class DocenteUpsertWithoutAlunoCoorientadoInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DocenteUpdateWithoutAlunoCoorientadoInput_1.DocenteUpdateWithoutAlunoCoorientadoInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", DocenteUpdateWithoutAlunoCoorientadoInput_1.DocenteUpdateWithoutAlunoCoorientadoInput)
], DocenteUpsertWithoutAlunoCoorientadoInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DocenteCreateWithoutAlunoCoorientadoInput_1.DocenteCreateWithoutAlunoCoorientadoInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", DocenteCreateWithoutAlunoCoorientadoInput_1.DocenteCreateWithoutAlunoCoorientadoInput)
], DocenteUpsertWithoutAlunoCoorientadoInput.prototype, "create", void 0);
DocenteUpsertWithoutAlunoCoorientadoInput = tslib_1.__decorate([
    TypeGraphQL.InputType("DocenteUpsertWithoutAlunoCoorientadoInput", {
        isAbstract: true
    })
], DocenteUpsertWithoutAlunoCoorientadoInput);
exports.DocenteUpsertWithoutAlunoCoorientadoInput = DocenteUpsertWithoutAlunoCoorientadoInput;
