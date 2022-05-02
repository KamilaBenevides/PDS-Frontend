"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocenteAvgOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let DocenteAvgOrderByAggregateInput = class DocenteAvgOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], DocenteAvgOrderByAggregateInput.prototype, "id", void 0);
DocenteAvgOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("DocenteAvgOrderByAggregateInput", {
        isAbstract: true
    })
], DocenteAvgOrderByAggregateInput);
exports.DocenteAvgOrderByAggregateInput = DocenteAvgOrderByAggregateInput;
