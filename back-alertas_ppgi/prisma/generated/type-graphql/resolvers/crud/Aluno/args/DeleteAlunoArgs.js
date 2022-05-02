"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteAlunoArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AlunoWhereUniqueInput_1 = require("../../../inputs/AlunoWhereUniqueInput");
let DeleteAlunoArgs = class DeleteAlunoArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AlunoWhereUniqueInput_1.AlunoWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", AlunoWhereUniqueInput_1.AlunoWhereUniqueInput)
], DeleteAlunoArgs.prototype, "where", void 0);
DeleteAlunoArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteAlunoArgs);
exports.DeleteAlunoArgs = DeleteAlunoArgs;
