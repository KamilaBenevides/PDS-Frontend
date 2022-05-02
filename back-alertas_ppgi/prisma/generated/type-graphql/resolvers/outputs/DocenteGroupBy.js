"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocenteGroupBy = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DocenteAvgAggregate_1 = require("../outputs/DocenteAvgAggregate");
const DocenteCountAggregate_1 = require("../outputs/DocenteCountAggregate");
const DocenteMaxAggregate_1 = require("../outputs/DocenteMaxAggregate");
const DocenteMinAggregate_1 = require("../outputs/DocenteMinAggregate");
const DocenteSumAggregate_1 = require("../outputs/DocenteSumAggregate");
let DocenteGroupBy = class DocenteGroupBy {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], DocenteGroupBy.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], DocenteGroupBy.prototype, "nomeCompleto", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], DocenteGroupBy.prototype, "email", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DocenteCountAggregate_1.DocenteCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DocenteCountAggregate_1.DocenteCountAggregate)
], DocenteGroupBy.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DocenteAvgAggregate_1.DocenteAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DocenteAvgAggregate_1.DocenteAvgAggregate)
], DocenteGroupBy.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DocenteSumAggregate_1.DocenteSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DocenteSumAggregate_1.DocenteSumAggregate)
], DocenteGroupBy.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DocenteMinAggregate_1.DocenteMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DocenteMinAggregate_1.DocenteMinAggregate)
], DocenteGroupBy.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DocenteMaxAggregate_1.DocenteMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DocenteMaxAggregate_1.DocenteMaxAggregate)
], DocenteGroupBy.prototype, "_max", void 0);
DocenteGroupBy = tslib_1.__decorate([
    TypeGraphQL.ObjectType("DocenteGroupBy", {
        isAbstract: true
    })
], DocenteGroupBy);
exports.DocenteGroupBy = DocenteGroupBy;
