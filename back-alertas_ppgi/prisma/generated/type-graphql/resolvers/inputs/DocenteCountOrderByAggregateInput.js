"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocenteCountOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let DocenteCountOrderByAggregateInput = class DocenteCountOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], DocenteCountOrderByAggregateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], DocenteCountOrderByAggregateInput.prototype, "nomeCompleto", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], DocenteCountOrderByAggregateInput.prototype, "email", void 0);
DocenteCountOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("DocenteCountOrderByAggregateInput", {
        isAbstract: true
    })
], DocenteCountOrderByAggregateInput);
exports.DocenteCountOrderByAggregateInput = DocenteCountOrderByAggregateInput;
