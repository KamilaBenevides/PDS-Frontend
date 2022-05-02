"use strict";
var DocenteWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocenteWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AlunoListRelationFilter_1 = require("../inputs/AlunoListRelationFilter");
const IntFilter_1 = require("../inputs/IntFilter");
const StringFilter_1 = require("../inputs/StringFilter");
const StringNullableFilter_1 = require("../inputs/StringNullableFilter");
let DocenteWhereInput = DocenteWhereInput_1 = class DocenteWhereInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [DocenteWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], DocenteWhereInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [DocenteWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], DocenteWhereInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [DocenteWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], DocenteWhereInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFilter_1.IntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFilter_1.IntFilter)
], DocenteWhereInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], DocenteWhereInput.prototype, "nomeCompleto", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], DocenteWhereInput.prototype, "email", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AlunoListRelationFilter_1.AlunoListRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AlunoListRelationFilter_1.AlunoListRelationFilter)
], DocenteWhereInput.prototype, "AlunoOrientado", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AlunoListRelationFilter_1.AlunoListRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AlunoListRelationFilter_1.AlunoListRelationFilter)
], DocenteWhereInput.prototype, "AlunoCoorientado", void 0);
DocenteWhereInput = DocenteWhereInput_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("DocenteWhereInput", {
        isAbstract: true
    })
], DocenteWhereInput);
exports.DocenteWhereInput = DocenteWhereInput;
