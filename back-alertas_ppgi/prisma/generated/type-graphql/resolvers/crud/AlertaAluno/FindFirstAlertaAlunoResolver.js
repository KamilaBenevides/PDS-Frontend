"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstAlertaAlunoResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const FindFirstAlertaAlunoArgs_1 = require("./args/FindFirstAlertaAlunoArgs");
const AlertaAluno_1 = require("../../../models/AlertaAluno");
const helpers_1 = require("../../../helpers");
let FindFirstAlertaAlunoResolver = class FindFirstAlertaAlunoResolver {
    async findFirstAlertaAluno(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).alertaAluno.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AlertaAluno_1.AlertaAluno, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstAlertaAlunoArgs_1.FindFirstAlertaAlunoArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindFirstAlertaAlunoResolver.prototype, "findFirstAlertaAluno", null);
FindFirstAlertaAlunoResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => AlertaAluno_1.AlertaAluno)
], FindFirstAlertaAlunoResolver);
exports.FindFirstAlertaAlunoResolver = FindFirstAlertaAlunoResolver;
