"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlertaSumOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let AlertaSumOrderByAggregateInput = class AlertaSumOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AlertaSumOrderByAggregateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AlertaSumOrderByAggregateInput.prototype, "diasIntervalo", void 0);
AlertaSumOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("AlertaSumOrderByAggregateInput", {
        isAbstract: true
    })
], AlertaSumOrderByAggregateInput);
exports.AlertaSumOrderByAggregateInput = AlertaSumOrderByAggregateInput;
