"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateAlertaAlunoArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AlertaAlunoUpdateInput_1 = require("../../../inputs/AlertaAlunoUpdateInput");
const AlertaAlunoWhereUniqueInput_1 = require("../../../inputs/AlertaAlunoWhereUniqueInput");
let UpdateAlertaAlunoArgs = class UpdateAlertaAlunoArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AlertaAlunoUpdateInput_1.AlertaAlunoUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", AlertaAlunoUpdateInput_1.AlertaAlunoUpdateInput)
], UpdateAlertaAlunoArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AlertaAlunoWhereUniqueInput_1.AlertaAlunoWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", AlertaAlunoWhereUniqueInput_1.AlertaAlunoWhereUniqueInput)
], UpdateAlertaAlunoArgs.prototype, "where", void 0);
UpdateAlertaAlunoArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateAlertaAlunoArgs);
exports.UpdateAlertaAlunoArgs = UpdateAlertaAlunoArgs;
