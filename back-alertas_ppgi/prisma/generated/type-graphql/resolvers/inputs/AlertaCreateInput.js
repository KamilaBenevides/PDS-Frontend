"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlertaCreateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AlertaAlunoCreateNestedManyWithoutAlertaInput_1 = require("../inputs/AlertaAlunoCreateNestedManyWithoutAlertaInput");
let AlertaCreateInput = class AlertaCreateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], AlertaCreateInput.prototype, "diasIntervalo", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], AlertaCreateInput.prototype, "nome", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AlertaCreateInput.prototype, "corpoEmail", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AlertaAlunoCreateNestedManyWithoutAlertaInput_1.AlertaAlunoCreateNestedManyWithoutAlertaInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AlertaAlunoCreateNestedManyWithoutAlertaInput_1.AlertaAlunoCreateNestedManyWithoutAlertaInput)
], AlertaCreateInput.prototype, "AlertaAluno", void 0);
AlertaCreateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("AlertaCreateInput", {
        isAbstract: true
    })
], AlertaCreateInput);
exports.AlertaCreateInput = AlertaCreateInput;
