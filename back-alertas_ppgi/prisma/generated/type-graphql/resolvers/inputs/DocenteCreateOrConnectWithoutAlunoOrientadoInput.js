"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocenteCreateOrConnectWithoutAlunoOrientadoInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DocenteCreateWithoutAlunoOrientadoInput_1 = require("../inputs/DocenteCreateWithoutAlunoOrientadoInput");
const DocenteWhereUniqueInput_1 = require("../inputs/DocenteWhereUniqueInput");
let DocenteCreateOrConnectWithoutAlunoOrientadoInput = class DocenteCreateOrConnectWithoutAlunoOrientadoInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DocenteWhereUniqueInput_1.DocenteWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", DocenteWhereUniqueInput_1.DocenteWhereUniqueInput)
], DocenteCreateOrConnectWithoutAlunoOrientadoInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DocenteCreateWithoutAlunoOrientadoInput_1.DocenteCreateWithoutAlunoOrientadoInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", DocenteCreateWithoutAlunoOrientadoInput_1.DocenteCreateWithoutAlunoOrientadoInput)
], DocenteCreateOrConnectWithoutAlunoOrientadoInput.prototype, "create", void 0);
DocenteCreateOrConnectWithoutAlunoOrientadoInput = tslib_1.__decorate([
    TypeGraphQL.InputType("DocenteCreateOrConnectWithoutAlunoOrientadoInput", {
        isAbstract: true
    })
], DocenteCreateOrConnectWithoutAlunoOrientadoInput);
exports.DocenteCreateOrConnectWithoutAlunoOrientadoInput = DocenteCreateOrConnectWithoutAlunoOrientadoInput;
