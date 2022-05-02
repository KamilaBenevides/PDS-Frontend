"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlertaRelationsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Alerta_1 = require("../../../models/Alerta");
const AlertaAluno_1 = require("../../../models/AlertaAluno");
const AlertaAlertaAlunoArgs_1 = require("./args/AlertaAlertaAlunoArgs");
const helpers_1 = require("../../../helpers");
let AlertaRelationsResolver = class AlertaRelationsResolver {
    async AlertaAluno(alerta, ctx, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).alerta.findUnique({
            where: {
                id: alerta.id,
            },
        }).AlertaAluno(args);
    }
};
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => [AlertaAluno_1.AlertaAluno], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Alerta_1.Alerta, Object, AlertaAlertaAlunoArgs_1.AlertaAlertaAlunoArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AlertaRelationsResolver.prototype, "AlertaAluno", null);
AlertaRelationsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Alerta_1.Alerta)
], AlertaRelationsResolver);
exports.AlertaRelationsResolver = AlertaRelationsResolver;
