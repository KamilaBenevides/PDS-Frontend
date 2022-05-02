"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocenteCreateNestedOneWithoutAlunoOrientadoInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DocenteCreateOrConnectWithoutAlunoOrientadoInput_1 = require("../inputs/DocenteCreateOrConnectWithoutAlunoOrientadoInput");
const DocenteCreateWithoutAlunoOrientadoInput_1 = require("../inputs/DocenteCreateWithoutAlunoOrientadoInput");
const DocenteWhereUniqueInput_1 = require("../inputs/DocenteWhereUniqueInput");
let DocenteCreateNestedOneWithoutAlunoOrientadoInput = class DocenteCreateNestedOneWithoutAlunoOrientadoInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DocenteCreateWithoutAlunoOrientadoInput_1.DocenteCreateWithoutAlunoOrientadoInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DocenteCreateWithoutAlunoOrientadoInput_1.DocenteCreateWithoutAlunoOrientadoInput)
], DocenteCreateNestedOneWithoutAlunoOrientadoInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DocenteCreateOrConnectWithoutAlunoOrientadoInput_1.DocenteCreateOrConnectWithoutAlunoOrientadoInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DocenteCreateOrConnectWithoutAlunoOrientadoInput_1.DocenteCreateOrConnectWithoutAlunoOrientadoInput)
], DocenteCreateNestedOneWithoutAlunoOrientadoInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DocenteWhereUniqueInput_1.DocenteWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DocenteWhereUniqueInput_1.DocenteWhereUniqueInput)
], DocenteCreateNestedOneWithoutAlunoOrientadoInput.prototype, "connect", void 0);
DocenteCreateNestedOneWithoutAlunoOrientadoInput = tslib_1.__decorate([
    TypeGraphQL.InputType("DocenteCreateNestedOneWithoutAlunoOrientadoInput", {
        isAbstract: true
    })
], DocenteCreateNestedOneWithoutAlunoOrientadoInput);
exports.DocenteCreateNestedOneWithoutAlunoOrientadoInput = DocenteCreateNestedOneWithoutAlunoOrientadoInput;
