"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlunoListRelationFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AlunoWhereInput_1 = require("../inputs/AlunoWhereInput");
let AlunoListRelationFilter = class AlunoListRelationFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AlunoWhereInput_1.AlunoWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AlunoWhereInput_1.AlunoWhereInput)
], AlunoListRelationFilter.prototype, "every", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AlunoWhereInput_1.AlunoWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AlunoWhereInput_1.AlunoWhereInput)
], AlunoListRelationFilter.prototype, "some", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AlunoWhereInput_1.AlunoWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AlunoWhereInput_1.AlunoWhereInput)
], AlunoListRelationFilter.prototype, "none", void 0);
AlunoListRelationFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("AlunoListRelationFilter", {
        isAbstract: true
    })
], AlunoListRelationFilter);
exports.AlunoListRelationFilter = AlunoListRelationFilter;
