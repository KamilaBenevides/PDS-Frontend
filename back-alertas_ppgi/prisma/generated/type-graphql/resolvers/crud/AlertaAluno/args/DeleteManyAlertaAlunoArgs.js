"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyAlertaAlunoArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AlertaAlunoWhereInput_1 = require("../../../inputs/AlertaAlunoWhereInput");
let DeleteManyAlertaAlunoArgs = class DeleteManyAlertaAlunoArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AlertaAlunoWhereInput_1.AlertaAlunoWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AlertaAlunoWhereInput_1.AlertaAlunoWhereInput)
], DeleteManyAlertaAlunoArgs.prototype, "where", void 0);
DeleteManyAlertaAlunoArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteManyAlertaAlunoArgs);
exports.DeleteManyAlertaAlunoArgs = DeleteManyAlertaAlunoArgs;
