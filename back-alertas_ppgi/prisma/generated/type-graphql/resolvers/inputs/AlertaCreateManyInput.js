"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlertaCreateManyInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let AlertaCreateManyInput = class AlertaCreateManyInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AlertaCreateManyInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], AlertaCreateManyInput.prototype, "diasIntervalo", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], AlertaCreateManyInput.prototype, "nome", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AlertaCreateManyInput.prototype, "corpoEmail", void 0);
AlertaCreateManyInput = tslib_1.__decorate([
    TypeGraphQL.InputType("AlertaCreateManyInput", {
        isAbstract: true
    })
], AlertaCreateManyInput);
exports.AlertaCreateManyInput = AlertaCreateManyInput;
