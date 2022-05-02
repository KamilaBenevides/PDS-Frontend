"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Alerta = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AlertaCount_1 = require("../resolvers/outputs/AlertaCount");
let Alerta = class Alerta {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], Alerta.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], Alerta.prototype, "diasIntervalo", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], Alerta.prototype, "nome", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Alerta.prototype, "corpoEmail", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AlertaCount_1.AlertaCount, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AlertaCount_1.AlertaCount)
], Alerta.prototype, "_count", void 0);
Alerta = tslib_1.__decorate([
    TypeGraphQL.ObjectType("Alerta", {
        isAbstract: true
    })
], Alerta);
exports.Alerta = Alerta;
