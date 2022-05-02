"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlertaAlunoCreateManyAlunoInputEnvelope = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AlertaAlunoCreateManyAlunoInput_1 = require("../inputs/AlertaAlunoCreateManyAlunoInput");
let AlertaAlunoCreateManyAlunoInputEnvelope = class AlertaAlunoCreateManyAlunoInputEnvelope {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AlertaAlunoCreateManyAlunoInput_1.AlertaAlunoCreateManyAlunoInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], AlertaAlunoCreateManyAlunoInputEnvelope.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], AlertaAlunoCreateManyAlunoInputEnvelope.prototype, "skipDuplicates", void 0);
AlertaAlunoCreateManyAlunoInputEnvelope = tslib_1.__decorate([
    TypeGraphQL.InputType("AlertaAlunoCreateManyAlunoInputEnvelope", {
        isAbstract: true
    })
], AlertaAlunoCreateManyAlunoInputEnvelope);
exports.AlertaAlunoCreateManyAlunoInputEnvelope = AlertaAlunoCreateManyAlunoInputEnvelope;
