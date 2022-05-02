import { GraphQLResolveInfo } from "graphql";
import { UpsertAlertaArgs } from "./args/UpsertAlertaArgs";
import { Alerta } from "../../../models/Alerta";
export declare class UpsertAlertaResolver {
    upsertAlerta(ctx: any, info: GraphQLResolveInfo, args: UpsertAlertaArgs): Promise<Alerta>;
}
