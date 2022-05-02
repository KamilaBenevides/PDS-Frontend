"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocenteRelationFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DocenteWhereInput_1 = require("../inputs/DocenteWhereInput");
let DocenteRelationFilter = class DocenteRelationFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DocenteWhereInput_1.DocenteWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DocenteWhereInput_1.DocenteWhereInput)
], DocenteRelationFilter.prototype, "is", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DocenteWhereInput_1.DocenteWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DocenteWhereInput_1.DocenteWhereInput)
], DocenteRelationFilter.prototype, "isNot", void 0);
DocenteRelationFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("DocenteRelationFilter", {
        isAbstract: true
    })
], DocenteRelationFilter);
exports.DocenteRelationFilter = DocenteRelationFilter;
