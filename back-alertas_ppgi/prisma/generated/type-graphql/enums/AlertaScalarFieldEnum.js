"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlertaScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var AlertaScalarFieldEnum;
(function (AlertaScalarFieldEnum) {
    AlertaScalarFieldEnum["id"] = "id";
    AlertaScalarFieldEnum["diasIntervalo"] = "diasIntervalo";
    AlertaScalarFieldEnum["nome"] = "nome";
    AlertaScalarFieldEnum["corpoEmail"] = "corpoEmail";
})(AlertaScalarFieldEnum = exports.AlertaScalarFieldEnum || (exports.AlertaScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(AlertaScalarFieldEnum, {
    name: "AlertaScalarFieldEnum",
    description: undefined,
});
