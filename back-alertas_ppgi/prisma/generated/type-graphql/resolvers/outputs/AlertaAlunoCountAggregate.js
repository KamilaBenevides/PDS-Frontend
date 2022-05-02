"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlertaAlunoCountAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let AlertaAlunoCountAggregate = class AlertaAlunoCountAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], AlertaAlunoCountAggregate.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], AlertaAlunoCountAggregate.prototype, "alunoId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], AlertaAlunoCountAggregate.prototype, "alertaId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], AlertaAlunoCountAggregate.prototype, "enviado", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], AlertaAlunoCountAggregate.prototype, "resolvido", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], AlertaAlunoCountAggregate.prototype, "ativo", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], AlertaAlunoCountAggregate.prototype, "dataEnvioEmail", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], AlertaAlunoCountAggregate.prototype, "_all", void 0);
AlertaAlunoCountAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("AlertaAlunoCountAggregate", {
        isAbstract: true
    })
], AlertaAlunoCountAggregate);
exports.AlertaAlunoCountAggregate = AlertaAlunoCountAggregate;
