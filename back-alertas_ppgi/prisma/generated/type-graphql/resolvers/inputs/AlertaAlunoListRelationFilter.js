"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlertaAlunoListRelationFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AlertaAlunoWhereInput_1 = require("../inputs/AlertaAlunoWhereInput");
let AlertaAlunoListRelationFilter = class AlertaAlunoListRelationFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AlertaAlunoWhereInput_1.AlertaAlunoWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AlertaAlunoWhereInput_1.AlertaAlunoWhereInput)
], AlertaAlunoListRelationFilter.prototype, "every", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AlertaAlunoWhereInput_1.AlertaAlunoWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AlertaAlunoWhereInput_1.AlertaAlunoWhereInput)
], AlertaAlunoListRelationFilter.prototype, "some", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AlertaAlunoWhereInput_1.AlertaAlunoWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AlertaAlunoWhereInput_1.AlertaAlunoWhereInput)
], AlertaAlunoListRelationFilter.prototype, "none", void 0);
AlertaAlunoListRelationFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("AlertaAlunoListRelationFilter", {
        isAbstract: true
    })
], AlertaAlunoListRelationFilter);
exports.AlertaAlunoListRelationFilter = AlertaAlunoListRelationFilter;
