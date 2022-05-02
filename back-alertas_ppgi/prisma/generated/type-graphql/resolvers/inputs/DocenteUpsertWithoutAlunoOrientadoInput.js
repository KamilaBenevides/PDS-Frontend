"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocenteUpsertWithoutAlunoOrientadoInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DocenteCreateWithoutAlunoOrientadoInput_1 = require("../inputs/DocenteCreateWithoutAlunoOrientadoInput");
const DocenteUpdateWithoutAlunoOrientadoInput_1 = require("../inputs/DocenteUpdateWithoutAlunoOrientadoInput");
let DocenteUpsertWithoutAlunoOrientadoInput = class DocenteUpsertWithoutAlunoOrientadoInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DocenteUpdateWithoutAlunoOrientadoInput_1.DocenteUpdateWithoutAlunoOrientadoInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", DocenteUpdateWithoutAlunoOrientadoInput_1.DocenteUpdateWithoutAlunoOrientadoInput)
], DocenteUpsertWithoutAlunoOrientadoInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DocenteCreateWithoutAlunoOrientadoInput_1.DocenteCreateWithoutAlunoOrientadoInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", DocenteCreateWithoutAlunoOrientadoInput_1.DocenteCreateWithoutAlunoOrientadoInput)
], DocenteUpsertWithoutAlunoOrientadoInput.prototype, "create", void 0);
DocenteUpsertWithoutAlunoOrientadoInput = tslib_1.__decorate([
    TypeGraphQL.InputType("DocenteUpsertWithoutAlunoOrientadoInput", {
        isAbstract: true
    })
], DocenteUpsertWithoutAlunoOrientadoInput);
exports.DocenteUpsertWithoutAlunoOrientadoInput = DocenteUpsertWithoutAlunoOrientadoInput;
