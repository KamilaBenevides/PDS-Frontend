"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocenteMinOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let DocenteMinOrderByAggregateInput = class DocenteMinOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], DocenteMinOrderByAggregateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], DocenteMinOrderByAggregateInput.prototype, "nomeCompleto", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], DocenteMinOrderByAggregateInput.prototype, "email", void 0);
DocenteMinOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("DocenteMinOrderByAggregateInput", {
        isAbstract: true
    })
], DocenteMinOrderByAggregateInput);
exports.DocenteMinOrderByAggregateInput = DocenteMinOrderByAggregateInput;
