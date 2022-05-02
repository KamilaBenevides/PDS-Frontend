"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlertaAlunoMaxAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let AlertaAlunoMaxAggregate = class AlertaAlunoMaxAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AlertaAlunoMaxAggregate.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AlertaAlunoMaxAggregate.prototype, "alunoId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AlertaAlunoMaxAggregate.prototype, "alertaId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], AlertaAlunoMaxAggregate.prototype, "enviado", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], AlertaAlunoMaxAggregate.prototype, "resolvido", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], AlertaAlunoMaxAggregate.prototype, "ativo", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], AlertaAlunoMaxAggregate.prototype, "dataEnvioEmail", void 0);
AlertaAlunoMaxAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("AlertaAlunoMaxAggregate", {
        isAbstract: true
    })
], AlertaAlunoMaxAggregate);
exports.AlertaAlunoMaxAggregate = AlertaAlunoMaxAggregate;
