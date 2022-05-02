"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlertaWhereUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let AlertaWhereUniqueInput = class AlertaWhereUniqueInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AlertaWhereUniqueInput.prototype, "id", void 0);
AlertaWhereUniqueInput = tslib_1.__decorate([
    TypeGraphQL.InputType("AlertaWhereUniqueInput", {
        isAbstract: true
    })
], AlertaWhereUniqueInput);
exports.AlertaWhereUniqueInput = AlertaWhereUniqueInput;
