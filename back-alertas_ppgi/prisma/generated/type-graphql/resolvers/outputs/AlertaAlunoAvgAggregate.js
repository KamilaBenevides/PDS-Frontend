"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlertaAlunoAvgAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let AlertaAlunoAvgAggregate = class AlertaAlunoAvgAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AlertaAlunoAvgAggregate.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AlertaAlunoAvgAggregate.prototype, "alunoId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AlertaAlunoAvgAggregate.prototype, "alertaId", void 0);
AlertaAlunoAvgAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("AlertaAlunoAvgAggregate", {
        isAbstract: true
    })
], AlertaAlunoAvgAggregate);
exports.AlertaAlunoAvgAggregate = AlertaAlunoAvgAggregate;
