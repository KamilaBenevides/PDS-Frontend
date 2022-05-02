"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocenteAlunoCoorientadoArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AlunoOrderByWithRelationInput_1 = require("../../../inputs/AlunoOrderByWithRelationInput");
const AlunoWhereInput_1 = require("../../../inputs/AlunoWhereInput");
const AlunoWhereUniqueInput_1 = require("../../../inputs/AlunoWhereUniqueInput");
const AlunoScalarFieldEnum_1 = require("../../../../enums/AlunoScalarFieldEnum");
let DocenteAlunoCoorientadoArgs = class DocenteAlunoCoorientadoArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AlunoWhereInput_1.AlunoWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AlunoWhereInput_1.AlunoWhereInput)
], DocenteAlunoCoorientadoArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AlunoOrderByWithRelationInput_1.AlunoOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], DocenteAlunoCoorientadoArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AlunoWhereUniqueInput_1.AlunoWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AlunoWhereUniqueInput_1.AlunoWhereUniqueInput)
], DocenteAlunoCoorientadoArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], DocenteAlunoCoorientadoArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], DocenteAlunoCoorientadoArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AlunoScalarFieldEnum_1.AlunoScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], DocenteAlunoCoorientadoArgs.prototype, "distinct", void 0);
DocenteAlunoCoorientadoArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DocenteAlunoCoorientadoArgs);
exports.DocenteAlunoCoorientadoArgs = DocenteAlunoCoorientadoArgs;
