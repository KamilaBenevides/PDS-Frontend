"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstAlunoArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AlunoOrderByWithRelationInput_1 = require("../../../inputs/AlunoOrderByWithRelationInput");
const AlunoWhereInput_1 = require("../../../inputs/AlunoWhereInput");
const AlunoWhereUniqueInput_1 = require("../../../inputs/AlunoWhereUniqueInput");
const AlunoScalarFieldEnum_1 = require("../../../../enums/AlunoScalarFieldEnum");
let FindFirstAlunoArgs = class FindFirstAlunoArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AlunoWhereInput_1.AlunoWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AlunoWhereInput_1.AlunoWhereInput)
], FindFirstAlunoArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AlunoOrderByWithRelationInput_1.AlunoOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstAlunoArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AlunoWhereUniqueInput_1.AlunoWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AlunoWhereUniqueInput_1.AlunoWhereUniqueInput)
], FindFirstAlunoArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstAlunoArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstAlunoArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AlunoScalarFieldEnum_1.AlunoScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstAlunoArgs.prototype, "distinct", void 0);
FindFirstAlunoArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindFirstAlunoArgs);
exports.FindFirstAlunoArgs = FindFirstAlunoArgs;
