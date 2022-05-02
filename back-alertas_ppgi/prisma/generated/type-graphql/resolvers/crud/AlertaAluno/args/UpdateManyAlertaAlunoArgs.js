"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyAlertaAlunoArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AlertaAlunoUpdateManyMutationInput_1 = require("../../../inputs/AlertaAlunoUpdateManyMutationInput");
const AlertaAlunoWhereInput_1 = require("../../../inputs/AlertaAlunoWhereInput");
let UpdateManyAlertaAlunoArgs = class UpdateManyAlertaAlunoArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AlertaAlunoUpdateManyMutationInput_1.AlertaAlunoUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", AlertaAlunoUpdateManyMutationInput_1.AlertaAlunoUpdateManyMutationInput)
], UpdateManyAlertaAlunoArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AlertaAlunoWhereInput_1.AlertaAlunoWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AlertaAlunoWhereInput_1.AlertaAlunoWhereInput)
], UpdateManyAlertaAlunoArgs.prototype, "where", void 0);
UpdateManyAlertaAlunoArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateManyAlertaAlunoArgs);
exports.UpdateManyAlertaAlunoArgs = UpdateManyAlertaAlunoArgs;
