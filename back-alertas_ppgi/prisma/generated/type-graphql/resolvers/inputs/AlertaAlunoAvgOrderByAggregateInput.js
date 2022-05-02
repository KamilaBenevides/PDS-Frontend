"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlertaAlunoAvgOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let AlertaAlunoAvgOrderByAggregateInput = class AlertaAlunoAvgOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AlertaAlunoAvgOrderByAggregateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AlertaAlunoAvgOrderByAggregateInput.prototype, "alunoId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AlertaAlunoAvgOrderByAggregateInput.prototype, "alertaId", void 0);
AlertaAlunoAvgOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("AlertaAlunoAvgOrderByAggregateInput", {
        isAbstract: true
    })
], AlertaAlunoAvgOrderByAggregateInput);
exports.AlertaAlunoAvgOrderByAggregateInput = AlertaAlunoAvgOrderByAggregateInput;
