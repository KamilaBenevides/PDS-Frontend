"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlertaAlunoScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var AlertaAlunoScalarFieldEnum;
(function (AlertaAlunoScalarFieldEnum) {
    AlertaAlunoScalarFieldEnum["id"] = "id";
    AlertaAlunoScalarFieldEnum["alunoId"] = "alunoId";
    AlertaAlunoScalarFieldEnum["alertaId"] = "alertaId";
    AlertaAlunoScalarFieldEnum["enviado"] = "enviado";
    AlertaAlunoScalarFieldEnum["resolvido"] = "resolvido";
    AlertaAlunoScalarFieldEnum["ativo"] = "ativo";
    AlertaAlunoScalarFieldEnum["dataEnvioEmail"] = "dataEnvioEmail";
})(AlertaAlunoScalarFieldEnum = exports.AlertaAlunoScalarFieldEnum || (exports.AlertaAlunoScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(AlertaAlunoScalarFieldEnum, {
    name: "AlertaAlunoScalarFieldEnum",
    description: undefined,
});
