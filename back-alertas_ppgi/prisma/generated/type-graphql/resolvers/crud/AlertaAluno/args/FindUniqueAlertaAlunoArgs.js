"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueAlertaAlunoArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AlertaAlunoWhereUniqueInput_1 = require("../../../inputs/AlertaAlunoWhereUniqueInput");
let FindUniqueAlertaAlunoArgs = class FindUniqueAlertaAlunoArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AlertaAlunoWhereUniqueInput_1.AlertaAlunoWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", AlertaAlunoWhereUniqueInput_1.AlertaAlunoWhereUniqueInput)
], FindUniqueAlertaAlunoArgs.prototype, "where", void 0);
FindUniqueAlertaAlunoArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindUniqueAlertaAlunoArgs);
exports.FindUniqueAlertaAlunoArgs = FindUniqueAlertaAlunoArgs;
