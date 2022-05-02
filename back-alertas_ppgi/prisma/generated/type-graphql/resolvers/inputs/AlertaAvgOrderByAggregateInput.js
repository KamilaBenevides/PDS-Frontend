"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlertaAvgOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let AlertaAvgOrderByAggregateInput = class AlertaAvgOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AlertaAvgOrderByAggregateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AlertaAvgOrderByAggregateInput.prototype, "diasIntervalo", void 0);
AlertaAvgOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("AlertaAvgOrderByAggregateInput", {
        isAbstract: true
    })
], AlertaAvgOrderByAggregateInput);
exports.AlertaAvgOrderByAggregateInput = AlertaAvgOrderByAggregateInput;
