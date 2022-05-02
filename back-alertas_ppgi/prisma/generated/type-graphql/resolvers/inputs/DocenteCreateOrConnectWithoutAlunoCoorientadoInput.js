"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocenteCreateOrConnectWithoutAlunoCoorientadoInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DocenteCreateWithoutAlunoCoorientadoInput_1 = require("../inputs/DocenteCreateWithoutAlunoCoorientadoInput");
const DocenteWhereUniqueInput_1 = require("../inputs/DocenteWhereUniqueInput");
let DocenteCreateOrConnectWithoutAlunoCoorientadoInput = class DocenteCreateOrConnectWithoutAlunoCoorientadoInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DocenteWhereUniqueInput_1.DocenteWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", DocenteWhereUniqueInput_1.DocenteWhereUniqueInput)
], DocenteCreateOrConnectWithoutAlunoCoorientadoInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DocenteCreateWithoutAlunoCoorientadoInput_1.DocenteCreateWithoutAlunoCoorientadoInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", DocenteCreateWithoutAlunoCoorientadoInput_1.DocenteCreateWithoutAlunoCoorientadoInput)
], DocenteCreateOrConnectWithoutAlunoCoorientadoInput.prototype, "create", void 0);
DocenteCreateOrConnectWithoutAlunoCoorientadoInput = tslib_1.__decorate([
    TypeGraphQL.InputType("DocenteCreateOrConnectWithoutAlunoCoorientadoInput", {
        isAbstract: true
    })
], DocenteCreateOrConnectWithoutAlunoCoorientadoInput);
exports.DocenteCreateOrConnectWithoutAlunoCoorientadoInput = DocenteCreateOrConnectWithoutAlunoCoorientadoInput;
