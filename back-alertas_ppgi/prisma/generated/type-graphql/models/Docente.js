"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Docente = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DocenteCount_1 = require("../resolvers/outputs/DocenteCount");
let Docente = class Docente {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], Docente.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], Docente.prototype, "nomeCompleto", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Docente.prototype, "email", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DocenteCount_1.DocenteCount, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DocenteCount_1.DocenteCount)
], Docente.prototype, "_count", void 0);
Docente = tslib_1.__decorate([
    TypeGraphQL.ObjectType("Docente", {
        isAbstract: true
    })
], Docente);
exports.Docente = Docente;
