"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateAlertaAlunoArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AlertaAlunoCreateInput_1 = require("../../../inputs/AlertaAlunoCreateInput");
let CreateAlertaAlunoArgs = class CreateAlertaAlunoArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AlertaAlunoCreateInput_1.AlertaAlunoCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", AlertaAlunoCreateInput_1.AlertaAlunoCreateInput)
], CreateAlertaAlunoArgs.prototype, "data", void 0);
CreateAlertaAlunoArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateAlertaAlunoArgs);
exports.CreateAlertaAlunoArgs = CreateAlertaAlunoArgs;
