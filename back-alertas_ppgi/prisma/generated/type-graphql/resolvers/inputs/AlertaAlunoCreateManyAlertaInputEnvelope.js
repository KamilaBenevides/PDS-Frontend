"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlertaAlunoCreateManyAlertaInputEnvelope = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AlertaAlunoCreateManyAlertaInput_1 = require("../inputs/AlertaAlunoCreateManyAlertaInput");
let AlertaAlunoCreateManyAlertaInputEnvelope = class AlertaAlunoCreateManyAlertaInputEnvelope {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AlertaAlunoCreateManyAlertaInput_1.AlertaAlunoCreateManyAlertaInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], AlertaAlunoCreateManyAlertaInputEnvelope.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], AlertaAlunoCreateManyAlertaInputEnvelope.prototype, "skipDuplicates", void 0);
AlertaAlunoCreateManyAlertaInputEnvelope = tslib_1.__decorate([
    TypeGraphQL.InputType("AlertaAlunoCreateManyAlertaInputEnvelope", {
        isAbstract: true
    })
], AlertaAlunoCreateManyAlertaInputEnvelope);
exports.AlertaAlunoCreateManyAlertaInputEnvelope = AlertaAlunoCreateManyAlertaInputEnvelope;
