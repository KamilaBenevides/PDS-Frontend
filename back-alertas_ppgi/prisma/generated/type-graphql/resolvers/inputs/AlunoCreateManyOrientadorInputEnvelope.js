"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlunoCreateManyOrientadorInputEnvelope = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AlunoCreateManyOrientadorInput_1 = require("../inputs/AlunoCreateManyOrientadorInput");
let AlunoCreateManyOrientadorInputEnvelope = class AlunoCreateManyOrientadorInputEnvelope {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AlunoCreateManyOrientadorInput_1.AlunoCreateManyOrientadorInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], AlunoCreateManyOrientadorInputEnvelope.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], AlunoCreateManyOrientadorInputEnvelope.prototype, "skipDuplicates", void 0);
AlunoCreateManyOrientadorInputEnvelope = tslib_1.__decorate([
    TypeGraphQL.InputType("AlunoCreateManyOrientadorInputEnvelope", {
        isAbstract: true
    })
], AlunoCreateManyOrientadorInputEnvelope);
exports.AlunoCreateManyOrientadorInputEnvelope = AlunoCreateManyOrientadorInputEnvelope;
