"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlertaCountOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let AlertaCountOrderByAggregateInput = class AlertaCountOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AlertaCountOrderByAggregateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AlertaCountOrderByAggregateInput.prototype, "diasIntervalo", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AlertaCountOrderByAggregateInput.prototype, "nome", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AlertaCountOrderByAggregateInput.prototype, "corpoEmail", void 0);
AlertaCountOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("AlertaCountOrderByAggregateInput", {
        isAbstract: true
    })
], AlertaCountOrderByAggregateInput);
exports.AlertaCountOrderByAggregateInput = AlertaCountOrderByAggregateInput;
