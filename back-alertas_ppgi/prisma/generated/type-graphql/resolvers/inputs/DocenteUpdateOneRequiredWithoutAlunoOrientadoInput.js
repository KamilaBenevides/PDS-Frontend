"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocenteUpdateOneRequiredWithoutAlunoOrientadoInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DocenteCreateOrConnectWithoutAlunoOrientadoInput_1 = require("../inputs/DocenteCreateOrConnectWithoutAlunoOrientadoInput");
const DocenteCreateWithoutAlunoOrientadoInput_1 = require("../inputs/DocenteCreateWithoutAlunoOrientadoInput");
const DocenteUpdateWithoutAlunoOrientadoInput_1 = require("../inputs/DocenteUpdateWithoutAlunoOrientadoInput");
const DocenteUpsertWithoutAlunoOrientadoInput_1 = require("../inputs/DocenteUpsertWithoutAlunoOrientadoInput");
const DocenteWhereUniqueInput_1 = require("../inputs/DocenteWhereUniqueInput");
let DocenteUpdateOneRequiredWithoutAlunoOrientadoInput = class DocenteUpdateOneRequiredWithoutAlunoOrientadoInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DocenteCreateWithoutAlunoOrientadoInput_1.DocenteCreateWithoutAlunoOrientadoInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DocenteCreateWithoutAlunoOrientadoInput_1.DocenteCreateWithoutAlunoOrientadoInput)
], DocenteUpdateOneRequiredWithoutAlunoOrientadoInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DocenteCreateOrConnectWithoutAlunoOrientadoInput_1.DocenteCreateOrConnectWithoutAlunoOrientadoInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DocenteCreateOrConnectWithoutAlunoOrientadoInput_1.DocenteCreateOrConnectWithoutAlunoOrientadoInput)
], DocenteUpdateOneRequiredWithoutAlunoOrientadoInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DocenteUpsertWithoutAlunoOrientadoInput_1.DocenteUpsertWithoutAlunoOrientadoInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DocenteUpsertWithoutAlunoOrientadoInput_1.DocenteUpsertWithoutAlunoOrientadoInput)
], DocenteUpdateOneRequiredWithoutAlunoOrientadoInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DocenteWhereUniqueInput_1.DocenteWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DocenteWhereUniqueInput_1.DocenteWhereUniqueInput)
], DocenteUpdateOneRequiredWithoutAlunoOrientadoInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DocenteUpdateWithoutAlunoOrientadoInput_1.DocenteUpdateWithoutAlunoOrientadoInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DocenteUpdateWithoutAlunoOrientadoInput_1.DocenteUpdateWithoutAlunoOrientadoInput)
], DocenteUpdateOneRequiredWithoutAlunoOrientadoInput.prototype, "update", void 0);
DocenteUpdateOneRequiredWithoutAlunoOrientadoInput = tslib_1.__decorate([
    TypeGraphQL.InputType("DocenteUpdateOneRequiredWithoutAlunoOrientadoInput", {
        isAbstract: true
    })
], DocenteUpdateOneRequiredWithoutAlunoOrientadoInput);
exports.DocenteUpdateOneRequiredWithoutAlunoOrientadoInput = DocenteUpdateOneRequiredWithoutAlunoOrientadoInput;
