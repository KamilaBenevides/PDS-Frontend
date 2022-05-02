"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlertaAlunoMinOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let AlertaAlunoMinOrderByAggregateInput = class AlertaAlunoMinOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AlertaAlunoMinOrderByAggregateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AlertaAlunoMinOrderByAggregateInput.prototype, "alunoId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AlertaAlunoMinOrderByAggregateInput.prototype, "alertaId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AlertaAlunoMinOrderByAggregateInput.prototype, "enviado", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AlertaAlunoMinOrderByAggregateInput.prototype, "resolvido", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AlertaAlunoMinOrderByAggregateInput.prototype, "ativo", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AlertaAlunoMinOrderByAggregateInput.prototype, "dataEnvioEmail", void 0);
AlertaAlunoMinOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("AlertaAlunoMinOrderByAggregateInput", {
        isAbstract: true
    })
], AlertaAlunoMinOrderByAggregateInput);
exports.AlertaAlunoMinOrderByAggregateInput = AlertaAlunoMinOrderByAggregateInput;
