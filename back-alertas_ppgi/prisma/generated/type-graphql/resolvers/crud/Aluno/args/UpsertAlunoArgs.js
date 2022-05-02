"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertAlunoArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AlunoCreateInput_1 = require("../../../inputs/AlunoCreateInput");
const AlunoUpdateInput_1 = require("../../../inputs/AlunoUpdateInput");
const AlunoWhereUniqueInput_1 = require("../../../inputs/AlunoWhereUniqueInput");
let UpsertAlunoArgs = class UpsertAlunoArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AlunoWhereUniqueInput_1.AlunoWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", AlunoWhereUniqueInput_1.AlunoWhereUniqueInput)
], UpsertAlunoArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AlunoCreateInput_1.AlunoCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", AlunoCreateInput_1.AlunoCreateInput)
], UpsertAlunoArgs.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AlunoUpdateInput_1.AlunoUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", AlunoUpdateInput_1.AlunoUpdateInput)
], UpsertAlunoArgs.prototype, "update", void 0);
UpsertAlunoArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpsertAlunoArgs);
exports.UpsertAlunoArgs = UpsertAlunoArgs;
