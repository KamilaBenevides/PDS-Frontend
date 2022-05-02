"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateAlertaAlunoResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const CreateAlertaAlunoArgs_1 = require("./args/CreateAlertaAlunoArgs");
const AlertaAluno_1 = require("../../../models/AlertaAluno");
const helpers_1 = require("../../../helpers");
let CreateAlertaAlunoResolver = class CreateAlertaAlunoResolver {
    async createAlertaAluno(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).alertaAluno.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AlertaAluno_1.AlertaAluno, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateAlertaAlunoArgs_1.CreateAlertaAlunoArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CreateAlertaAlunoResolver.prototype, "createAlertaAluno", null);
CreateAlertaAlunoResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => AlertaAluno_1.AlertaAluno)
], CreateAlertaAlunoResolver);
exports.CreateAlertaAlunoResolver = CreateAlertaAlunoResolver;
