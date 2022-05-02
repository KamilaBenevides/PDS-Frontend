"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocenteSumAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let DocenteSumAggregate = class DocenteSumAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], DocenteSumAggregate.prototype, "id", void 0);
DocenteSumAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("DocenteSumAggregate", {
        isAbstract: true
    })
], DocenteSumAggregate);
exports.DocenteSumAggregate = DocenteSumAggregate;
