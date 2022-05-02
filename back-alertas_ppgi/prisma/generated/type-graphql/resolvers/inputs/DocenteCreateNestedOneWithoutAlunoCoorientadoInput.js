"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocenteCreateNestedOneWithoutAlunoCoorientadoInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DocenteCreateOrConnectWithoutAlunoCoorientadoInput_1 = require("../inputs/DocenteCreateOrConnectWithoutAlunoCoorientadoInput");
const DocenteCreateWithoutAlunoCoorientadoInput_1 = require("../inputs/DocenteCreateWithoutAlunoCoorientadoInput");
const DocenteWhereUniqueInput_1 = require("../inputs/DocenteWhereUniqueInput");
let DocenteCreateNestedOneWithoutAlunoCoorientadoInput = class DocenteCreateNestedOneWithoutAlunoCoorientadoInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DocenteCreateWithoutAlunoCoorientadoInput_1.DocenteCreateWithoutAlunoCoorientadoInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DocenteCreateWithoutAlunoCoorientadoInput_1.DocenteCreateWithoutAlunoCoorientadoInput)
], DocenteCreateNestedOneWithoutAlunoCoorientadoInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DocenteCreateOrConnectWithoutAlunoCoorientadoInput_1.DocenteCreateOrConnectWithoutAlunoCoorientadoInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DocenteCreateOrConnectWithoutAlunoCoorientadoInput_1.DocenteCreateOrConnectWithoutAlunoCoorientadoInput)
], DocenteCreateNestedOneWithoutAlunoCoorientadoInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DocenteWhereUniqueInput_1.DocenteWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DocenteWhereUniqueInput_1.DocenteWhereUniqueInput)
], DocenteCreateNestedOneWithoutAlunoCoorientadoInput.prototype, "connect", void 0);
DocenteCreateNestedOneWithoutAlunoCoorientadoInput = tslib_1.__decorate([
    TypeGraphQL.InputType("DocenteCreateNestedOneWithoutAlunoCoorientadoInput", {
        isAbstract: true
    })
], DocenteCreateNestedOneWithoutAlunoCoorientadoInput);
exports.DocenteCreateNestedOneWithoutAlunoCoorientadoInput = DocenteCreateNestedOneWithoutAlunoCoorientadoInput;
