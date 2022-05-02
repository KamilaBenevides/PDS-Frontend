"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocenteMaxOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let DocenteMaxOrderByAggregateInput = class DocenteMaxOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], DocenteMaxOrderByAggregateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], DocenteMaxOrderByAggregateInput.prototype, "nomeCompleto", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], DocenteMaxOrderByAggregateInput.prototype, "email", void 0);
DocenteMaxOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("DocenteMaxOrderByAggregateInput", {
        isAbstract: true
    })
], DocenteMaxOrderByAggregateInput);
exports.DocenteMaxOrderByAggregateInput = DocenteMaxOrderByAggregateInput;
