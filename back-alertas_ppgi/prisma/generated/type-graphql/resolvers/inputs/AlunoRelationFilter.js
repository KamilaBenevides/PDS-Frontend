"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlunoRelationFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AlunoWhereInput_1 = require("../inputs/AlunoWhereInput");
let AlunoRelationFilter = class AlunoRelationFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AlunoWhereInput_1.AlunoWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AlunoWhereInput_1.AlunoWhereInput)
], AlunoRelationFilter.prototype, "is", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AlunoWhereInput_1.AlunoWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AlunoWhereInput_1.AlunoWhereInput)
], AlunoRelationFilter.prototype, "isNot", void 0);
AlunoRelationFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("AlunoRelationFilter", {
        isAbstract: true
    })
], AlunoRelationFilter);
exports.AlunoRelationFilter = AlunoRelationFilter;
