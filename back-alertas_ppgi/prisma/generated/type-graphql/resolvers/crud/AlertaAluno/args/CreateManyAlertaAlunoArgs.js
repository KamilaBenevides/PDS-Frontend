"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyAlertaAlunoArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AlertaAlunoCreateManyInput_1 = require("../../../inputs/AlertaAlunoCreateManyInput");
let CreateManyAlertaAlunoArgs = class CreateManyAlertaAlunoArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AlertaAlunoCreateManyInput_1.AlertaAlunoCreateManyInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], CreateManyAlertaAlunoArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], CreateManyAlertaAlunoArgs.prototype, "skipDuplicates", void 0);
CreateManyAlertaAlunoArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateManyAlertaAlunoArgs);
exports.CreateManyAlertaAlunoArgs = CreateManyAlertaAlunoArgs;
