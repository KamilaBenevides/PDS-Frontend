"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlertaAlunoRelationsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Alerta_1 = require("../../../models/Alerta");
const AlertaAluno_1 = require("../../../models/AlertaAluno");
const Aluno_1 = require("../../../models/Aluno");
const helpers_1 = require("../../../helpers");
let AlertaAlunoRelationsResolver = class AlertaAlunoRelationsResolver {
    async aluno(alertaAluno, ctx) {
        return (0, helpers_1.getPrismaFromContext)(ctx).alertaAluno.findUnique({
            where: {
                id: alertaAluno.id,
            },
        }).aluno({});
    }
    async Alerta(alertaAluno, ctx) {
        return (0, helpers_1.getPrismaFromContext)(ctx).alertaAluno.findUnique({
            where: {
                id: alertaAluno.id,
            },
        }).Alerta({});
    }
};
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => Aluno_1.Aluno, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [AlertaAluno_1.AlertaAluno, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], AlertaAlunoRelationsResolver.prototype, "aluno", null);
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => Alerta_1.Alerta, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [AlertaAluno_1.AlertaAluno, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], AlertaAlunoRelationsResolver.prototype, "Alerta", null);
AlertaAlunoRelationsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => AlertaAluno_1.AlertaAluno)
], AlertaAlunoRelationsResolver);
exports.AlertaAlunoRelationsResolver = AlertaAlunoRelationsResolver;
