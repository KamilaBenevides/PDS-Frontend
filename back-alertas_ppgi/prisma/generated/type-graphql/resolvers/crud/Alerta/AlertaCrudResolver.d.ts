import { GraphQLResolveInfo } from "graphql";
import { AggregateAlertaArgs } from "./args/AggregateAlertaArgs";
import { CreateAlertaArgs } from "./args/CreateAlertaArgs";
import { CreateManyAlertaArgs } from "./args/CreateManyAlertaArgs";
import { DeleteAlertaArgs } from "./args/DeleteAlertaArgs";
import { DeleteManyAlertaArgs } from "./args/DeleteManyAlertaArgs";
import { FindFirstAlertaArgs } from "./args/FindFirstAlertaArgs";
import { FindManyAlertaArgs } from "./args/FindManyAlertaArgs";
import { FindUniqueAlertaArgs } from "./args/FindUniqueAlertaArgs";
import { GroupByAlertaArgs } from "./args/GroupByAlertaArgs";
import { UpdateAlertaArgs } from "./args/UpdateAlertaArgs";
import { UpdateManyAlertaArgs } from "./args/UpdateManyAlertaArgs";
import { UpsertAlertaArgs } from "./args/UpsertAlertaArgs";
import { Alerta } from "../../../models/Alerta";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateAlerta } from "../../outputs/AggregateAlerta";
import { AlertaGroupBy } from "../../outputs/AlertaGroupBy";
export declare class AlertaCrudResolver {
    alerta(ctx: any, info: GraphQLResolveInfo, args: FindUniqueAlertaArgs): Promise<Alerta | null>;
    findFirstAlerta(ctx: any, info: GraphQLResolveInfo, args: FindFirstAlertaArgs): Promise<Alerta | null>;
    alertas(ctx: any, info: GraphQLResolveInfo, args: FindManyAlertaArgs): Promise<Alerta[]>;
    createAlerta(ctx: any, info: GraphQLResolveInfo, args: CreateAlertaArgs): Promise<Alerta>;
    createManyAlerta(ctx: any, info: GraphQLResolveInfo, args: CreateManyAlertaArgs): Promise<AffectedRowsOutput>;
    deleteAlerta(ctx: any, info: GraphQLResolveInfo, args: DeleteAlertaArgs): Promise<Alerta | null>;
    updateAlerta(ctx: any, info: GraphQLResolveInfo, args: UpdateAlertaArgs): Promise<Alerta | null>;
    deleteManyAlerta(ctx: any, info: GraphQLResolveInfo, args: DeleteManyAlertaArgs): Promise<AffectedRowsOutput>;
    updateManyAlerta(ctx: any, info: GraphQLResolveInfo, args: UpdateManyAlertaArgs): Promise<AffectedRowsOutput>;
    upsertAlerta(ctx: any, info: GraphQLResolveInfo, args: UpsertAlertaArgs): Promise<Alerta>;
    aggregateAlerta(ctx: any, info: GraphQLResolveInfo, args: AggregateAlertaArgs): Promise<AggregateAlerta>;
    groupByAlerta(ctx: any, info: GraphQLResolveInfo, args: GroupByAlertaArgs): Promise<AlertaGroupBy[]>;
}
