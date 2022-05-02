"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlertaMinOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let AlertaMinOrderByAggregateInput = class AlertaMinOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AlertaMinOrderByAggregateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AlertaMinOrderByAggregateInput.prototype, "diasIntervalo", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AlertaMinOrderByAggregateInput.prototype, "nome", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AlertaMinOrderByAggregateInput.prototype, "corpoEmail", void 0);
AlertaMinOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("AlertaMinOrderByAggregateInput", {
        isAbstract: true
    })
], AlertaMinOrderByAggregateInput);
exports.AlertaMinOrderByAggregateInput = AlertaMinOrderByAggregateInput;
