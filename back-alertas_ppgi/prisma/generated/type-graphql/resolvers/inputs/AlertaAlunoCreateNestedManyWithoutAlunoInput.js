"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlertaAlunoCreateNestedManyWithoutAlunoInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AlertaAlunoCreateManyAlunoInputEnvelope_1 = require("../inputs/AlertaAlunoCreateManyAlunoInputEnvelope");
const AlertaAlunoCreateOrConnectWithoutAlunoInput_1 = require("../inputs/AlertaAlunoCreateOrConnectWithoutAlunoInput");
const AlertaAlunoCreateWithoutAlunoInput_1 = require("../inputs/AlertaAlunoCreateWithoutAlunoInput");
const AlertaAlunoWhereUniqueInput_1 = require("../inputs/AlertaAlunoWhereUniqueInput");
let AlertaAlunoCreateNestedManyWithoutAlunoInput = class AlertaAlunoCreateNestedManyWithoutAlunoInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AlertaAlunoCreateWithoutAlunoInput_1.AlertaAlunoCreateWithoutAlunoInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AlertaAlunoCreateNestedManyWithoutAlunoInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AlertaAlunoCreateOrConnectWithoutAlunoInput_1.AlertaAlunoCreateOrConnectWithoutAlunoInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AlertaAlunoCreateNestedManyWithoutAlunoInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AlertaAlunoCreateManyAlunoInputEnvelope_1.AlertaAlunoCreateManyAlunoInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AlertaAlunoCreateManyAlunoInputEnvelope_1.AlertaAlunoCreateManyAlunoInputEnvelope)
], AlertaAlunoCreateNestedManyWithoutAlunoInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AlertaAlunoWhereUniqueInput_1.AlertaAlunoWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AlertaAlunoCreateNestedManyWithoutAlunoInput.prototype, "connect", void 0);
AlertaAlunoCreateNestedManyWithoutAlunoInput = tslib_1.__decorate([
    TypeGraphQL.InputType("AlertaAlunoCreateNestedManyWithoutAlunoInput", {
        isAbstract: true
    })
], AlertaAlunoCreateNestedManyWithoutAlunoInput);
exports.AlertaAlunoCreateNestedManyWithoutAlunoInput = AlertaAlunoCreateNestedManyWithoutAlunoInput;
