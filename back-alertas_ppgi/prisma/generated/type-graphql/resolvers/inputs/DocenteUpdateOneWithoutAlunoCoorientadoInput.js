"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocenteUpdateOneWithoutAlunoCoorientadoInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DocenteCreateOrConnectWithoutAlunoCoorientadoInput_1 = require("../inputs/DocenteCreateOrConnectWithoutAlunoCoorientadoInput");
const DocenteCreateWithoutAlunoCoorientadoInput_1 = require("../inputs/DocenteCreateWithoutAlunoCoorientadoInput");
const DocenteUpdateWithoutAlunoCoorientadoInput_1 = require("../inputs/DocenteUpdateWithoutAlunoCoorientadoInput");
const DocenteUpsertWithoutAlunoCoorientadoInput_1 = require("../inputs/DocenteUpsertWithoutAlunoCoorientadoInput");
const DocenteWhereUniqueInput_1 = require("../inputs/DocenteWhereUniqueInput");
let DocenteUpdateOneWithoutAlunoCoorientadoInput = class DocenteUpdateOneWithoutAlunoCoorientadoInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DocenteCreateWithoutAlunoCoorientadoInput_1.DocenteCreateWithoutAlunoCoorientadoInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DocenteCreateWithoutAlunoCoorientadoInput_1.DocenteCreateWithoutAlunoCoorientadoInput)
], DocenteUpdateOneWithoutAlunoCoorientadoInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DocenteCreateOrConnectWithoutAlunoCoorientadoInput_1.DocenteCreateOrConnectWithoutAlunoCoorientadoInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DocenteCreateOrConnectWithoutAlunoCoorientadoInput_1.DocenteCreateOrConnectWithoutAlunoCoorientadoInput)
], DocenteUpdateOneWithoutAlunoCoorientadoInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DocenteUpsertWithoutAlunoCoorientadoInput_1.DocenteUpsertWithoutAlunoCoorientadoInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DocenteUpsertWithoutAlunoCoorientadoInput_1.DocenteUpsertWithoutAlunoCoorientadoInput)
], DocenteUpdateOneWithoutAlunoCoorientadoInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], DocenteUpdateOneWithoutAlunoCoorientadoInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], DocenteUpdateOneWithoutAlunoCoorientadoInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DocenteWhereUniqueInput_1.DocenteWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DocenteWhereUniqueInput_1.DocenteWhereUniqueInput)
], DocenteUpdateOneWithoutAlunoCoorientadoInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DocenteUpdateWithoutAlunoCoorientadoInput_1.DocenteUpdateWithoutAlunoCoorientadoInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DocenteUpdateWithoutAlunoCoorientadoInput_1.DocenteUpdateWithoutAlunoCoorientadoInput)
], DocenteUpdateOneWithoutAlunoCoorientadoInput.prototype, "update", void 0);
DocenteUpdateOneWithoutAlunoCoorientadoInput = tslib_1.__decorate([
    TypeGraphQL.InputType("DocenteUpdateOneWithoutAlunoCoorientadoInput", {
        isAbstract: true
    })
], DocenteUpdateOneWithoutAlunoCoorientadoInput);
exports.DocenteUpdateOneWithoutAlunoCoorientadoInput = DocenteUpdateOneWithoutAlunoCoorientadoInput;
