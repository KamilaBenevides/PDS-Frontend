"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlertaRelationFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AlertaWhereInput_1 = require("../inputs/AlertaWhereInput");
let AlertaRelationFilter = class AlertaRelationFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AlertaWhereInput_1.AlertaWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AlertaWhereInput_1.AlertaWhereInput)
], AlertaRelationFilter.prototype, "is", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AlertaWhereInput_1.AlertaWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AlertaWhereInput_1.AlertaWhereInput)
], AlertaRelationFilter.prototype, "isNot", void 0);
AlertaRelationFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("AlertaRelationFilter", {
        isAbstract: true
    })
], AlertaRelationFilter);
exports.AlertaRelationFilter = AlertaRelationFilter;
