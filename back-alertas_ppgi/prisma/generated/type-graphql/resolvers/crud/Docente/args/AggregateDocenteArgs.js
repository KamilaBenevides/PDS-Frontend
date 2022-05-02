"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateDocenteArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DocenteOrderByWithRelationInput_1 = require("../../../inputs/DocenteOrderByWithRelationInput");
const DocenteWhereInput_1 = require("../../../inputs/DocenteWhereInput");
const DocenteWhereUniqueInput_1 = require("../../../inputs/DocenteWhereUniqueInput");
let AggregateDocenteArgs = class AggregateDocenteArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DocenteWhereInput_1.DocenteWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DocenteWhereInput_1.DocenteWhereInput)
], AggregateDocenteArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [DocenteOrderByWithRelationInput_1.DocenteOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AggregateDocenteArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DocenteWhereUniqueInput_1.DocenteWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DocenteWhereUniqueInput_1.DocenteWhereUniqueInput)
], AggregateDocenteArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateDocenteArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateDocenteArgs.prototype, "skip", void 0);
AggregateDocenteArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], AggregateDocenteArgs);
exports.AggregateDocenteArgs = AggregateDocenteArgs;
