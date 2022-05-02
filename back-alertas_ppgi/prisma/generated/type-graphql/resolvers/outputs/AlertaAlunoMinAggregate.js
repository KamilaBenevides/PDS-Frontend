"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlertaAlunoMinAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let AlertaAlunoMinAggregate = class AlertaAlunoMinAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AlertaAlunoMinAggregate.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AlertaAlunoMinAggregate.prototype, "alunoId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AlertaAlunoMinAggregate.prototype, "alertaId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], AlertaAlunoMinAggregate.prototype, "enviado", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], AlertaAlunoMinAggregate.prototype, "resolvido", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], AlertaAlunoMinAggregate.prototype, "ativo", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], AlertaAlunoMinAggregate.prototype, "dataEnvioEmail", void 0);
AlertaAlunoMinAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("AlertaAlunoMinAggregate", {
        isAbstract: true
    })
], AlertaAlunoMinAggregate);
exports.AlertaAlunoMinAggregate = AlertaAlunoMinAggregate;
