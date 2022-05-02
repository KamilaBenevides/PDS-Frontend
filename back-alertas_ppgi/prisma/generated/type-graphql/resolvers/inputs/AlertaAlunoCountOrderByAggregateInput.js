"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlertaAlunoCountOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let AlertaAlunoCountOrderByAggregateInput = class AlertaAlunoCountOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AlertaAlunoCountOrderByAggregateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AlertaAlunoCountOrderByAggregateInput.prototype, "alunoId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AlertaAlunoCountOrderByAggregateInput.prototype, "alertaId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AlertaAlunoCountOrderByAggregateInput.prototype, "enviado", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AlertaAlunoCountOrderByAggregateInput.prototype, "resolvido", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AlertaAlunoCountOrderByAggregateInput.prototype, "ativo", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AlertaAlunoCountOrderByAggregateInput.prototype, "dataEnvioEmail", void 0);
AlertaAlunoCountOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("AlertaAlunoCountOrderByAggregateInput", {
        isAbstract: true
    })
], AlertaAlunoCountOrderByAggregateInput);
exports.AlertaAlunoCountOrderByAggregateInput = AlertaAlunoCountOrderByAggregateInput;
