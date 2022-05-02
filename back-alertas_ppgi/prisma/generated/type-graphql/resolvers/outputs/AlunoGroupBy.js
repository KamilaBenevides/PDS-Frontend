"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlunoGroupBy = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AlunoAvgAggregate_1 = require("../outputs/AlunoAvgAggregate");
const AlunoCountAggregate_1 = require("../outputs/AlunoCountAggregate");
const AlunoMaxAggregate_1 = require("../outputs/AlunoMaxAggregate");
const AlunoMinAggregate_1 = require("../outputs/AlunoMinAggregate");
const AlunoSumAggregate_1 = require("../outputs/AlunoSumAggregate");
let AlunoGroupBy = class AlunoGroupBy {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], AlunoGroupBy.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], AlunoGroupBy.prototype, "nomeCompleto", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], AlunoGroupBy.prototype, "matricula", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], AlunoGroupBy.prototype, "dataIngresso", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], AlunoGroupBy.prototype, "dataLimite", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], AlunoGroupBy.prototype, "cpf", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AlunoGroupBy.prototype, "emailInstitucional", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AlunoGroupBy.prototype, "emailPessoal", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Boolean)
], AlunoGroupBy.prototype, "ativo", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], AlunoGroupBy.prototype, "orientadorId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AlunoGroupBy.prototype, "coorientadorId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AlunoCountAggregate_1.AlunoCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AlunoCountAggregate_1.AlunoCountAggregate)
], AlunoGroupBy.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AlunoAvgAggregate_1.AlunoAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AlunoAvgAggregate_1.AlunoAvgAggregate)
], AlunoGroupBy.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AlunoSumAggregate_1.AlunoSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AlunoSumAggregate_1.AlunoSumAggregate)
], AlunoGroupBy.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AlunoMinAggregate_1.AlunoMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AlunoMinAggregate_1.AlunoMinAggregate)
], AlunoGroupBy.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AlunoMaxAggregate_1.AlunoMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AlunoMaxAggregate_1.AlunoMaxAggregate)
], AlunoGroupBy.prototype, "_max", void 0);
AlunoGroupBy = tslib_1.__decorate([
    TypeGraphQL.ObjectType("AlunoGroupBy", {
        isAbstract: true
    })
], AlunoGroupBy);
exports.AlunoGroupBy = AlunoGroupBy;
