"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocenteOrderByWithAggregationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DocenteAvgOrderByAggregateInput_1 = require("../inputs/DocenteAvgOrderByAggregateInput");
const DocenteCountOrderByAggregateInput_1 = require("../inputs/DocenteCountOrderByAggregateInput");
const DocenteMaxOrderByAggregateInput_1 = require("../inputs/DocenteMaxOrderByAggregateInput");
const DocenteMinOrderByAggregateInput_1 = require("../inputs/DocenteMinOrderByAggregateInput");
const DocenteSumOrderByAggregateInput_1 = require("../inputs/DocenteSumOrderByAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let DocenteOrderByWithAggregationInput = class DocenteOrderByWithAggregationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], DocenteOrderByWithAggregationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], DocenteOrderByWithAggregationInput.prototype, "nomeCompleto", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], DocenteOrderByWithAggregationInput.prototype, "email", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DocenteCountOrderByAggregateInput_1.DocenteCountOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DocenteCountOrderByAggregateInput_1.DocenteCountOrderByAggregateInput)
], DocenteOrderByWithAggregationInput.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DocenteAvgOrderByAggregateInput_1.DocenteAvgOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DocenteAvgOrderByAggregateInput_1.DocenteAvgOrderByAggregateInput)
], DocenteOrderByWithAggregationInput.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DocenteMaxOrderByAggregateInput_1.DocenteMaxOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DocenteMaxOrderByAggregateInput_1.DocenteMaxOrderByAggregateInput)
], DocenteOrderByWithAggregationInput.prototype, "_max", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DocenteMinOrderByAggregateInput_1.DocenteMinOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DocenteMinOrderByAggregateInput_1.DocenteMinOrderByAggregateInput)
], DocenteOrderByWithAggregationInput.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DocenteSumOrderByAggregateInput_1.DocenteSumOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DocenteSumOrderByAggregateInput_1.DocenteSumOrderByAggregateInput)
], DocenteOrderByWithAggregationInput.prototype, "_sum", void 0);
DocenteOrderByWithAggregationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("DocenteOrderByWithAggregationInput", {
        isAbstract: true
    })
], DocenteOrderByWithAggregationInput);
exports.DocenteOrderByWithAggregationInput = DocenteOrderByWithAggregationInput;
