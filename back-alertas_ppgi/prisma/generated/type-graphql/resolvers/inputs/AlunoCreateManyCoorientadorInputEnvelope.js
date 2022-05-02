"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlunoCreateManyCoorientadorInputEnvelope = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AlunoCreateManyCoorientadorInput_1 = require("../inputs/AlunoCreateManyCoorientadorInput");
let AlunoCreateManyCoorientadorInputEnvelope = class AlunoCreateManyCoorientadorInputEnvelope {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AlunoCreateManyCoorientadorInput_1.AlunoCreateManyCoorientadorInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], AlunoCreateManyCoorientadorInputEnvelope.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], AlunoCreateManyCoorientadorInputEnvelope.prototype, "skipDuplicates", void 0);
AlunoCreateManyCoorientadorInputEnvelope = tslib_1.__decorate([
    TypeGraphQL.InputType("AlunoCreateManyCoorientadorInputEnvelope", {
        isAbstract: true
    })
], AlunoCreateManyCoorientadorInputEnvelope);
exports.AlunoCreateManyCoorientadorInputEnvelope = AlunoCreateManyCoorientadorInputEnvelope;
