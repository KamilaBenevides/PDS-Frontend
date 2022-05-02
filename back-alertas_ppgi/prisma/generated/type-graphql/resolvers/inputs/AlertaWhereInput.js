"use strict";
var AlertaWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlertaWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AlertaAlunoListRelationFilter_1 = require("../inputs/AlertaAlunoListRelationFilter");
const IntFilter_1 = require("../inputs/IntFilter");
const StringFilter_1 = require("../inputs/StringFilter");
const StringNullableFilter_1 = require("../inputs/StringNullableFilter");
let AlertaWhereInput = AlertaWhereInput_1 = class AlertaWhereInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AlertaWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AlertaWhereInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AlertaWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AlertaWhereInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AlertaWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AlertaWhereInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFilter_1.IntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFilter_1.IntFilter)
], AlertaWhereInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFilter_1.IntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFilter_1.IntFilter)
], AlertaWhereInput.prototype, "diasIntervalo", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], AlertaWhereInput.prototype, "nome", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], AlertaWhereInput.prototype, "corpoEmail", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AlertaAlunoListRelationFilter_1.AlertaAlunoListRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AlertaAlunoListRelationFilter_1.AlertaAlunoListRelationFilter)
], AlertaWhereInput.prototype, "AlertaAluno", void 0);
AlertaWhereInput = AlertaWhereInput_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("AlertaWhereInput", {
        isAbstract: true
    })
], AlertaWhereInput);
exports.AlertaWhereInput = AlertaWhereInput;
