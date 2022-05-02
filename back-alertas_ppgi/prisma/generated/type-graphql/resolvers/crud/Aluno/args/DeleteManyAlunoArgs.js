"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyAlunoArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AlunoWhereInput_1 = require("../../../inputs/AlunoWhereInput");
let DeleteManyAlunoArgs = class DeleteManyAlunoArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AlunoWhereInput_1.AlunoWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AlunoWhereInput_1.AlunoWhereInput)
], DeleteManyAlunoArgs.prototype, "where", void 0);
DeleteManyAlunoArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteManyAlunoArgs);
exports.DeleteManyAlunoArgs = DeleteManyAlunoArgs;
