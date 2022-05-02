"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlertaAlunoSumAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let AlertaAlunoSumAggregate = class AlertaAlunoSumAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AlertaAlunoSumAggregate.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AlertaAlunoSumAggregate.prototype, "alunoId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AlertaAlunoSumAggregate.prototype, "alertaId", void 0);
AlertaAlunoSumAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("AlertaAlunoSumAggregate", {
        isAbstract: true
    })
], AlertaAlunoSumAggregate);
exports.AlertaAlunoSumAggregate = AlertaAlunoSumAggregate;
