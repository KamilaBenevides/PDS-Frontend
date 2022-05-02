"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlertaMaxOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let AlertaMaxOrderByAggregateInput = class AlertaMaxOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AlertaMaxOrderByAggregateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AlertaMaxOrderByAggregateInput.prototype, "diasIntervalo", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AlertaMaxOrderByAggregateInput.prototype, "nome", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AlertaMaxOrderByAggregateInput.prototype, "corpoEmail", void 0);
AlertaMaxOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("AlertaMaxOrderByAggregateInput", {
        isAbstract: true
    })
], AlertaMaxOrderByAggregateInput);
exports.AlertaMaxOrderByAggregateInput = AlertaMaxOrderByAggregateInput;
