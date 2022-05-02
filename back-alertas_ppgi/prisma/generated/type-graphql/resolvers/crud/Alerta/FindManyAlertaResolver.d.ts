import { GraphQLResolveInfo } from "graphql";
import { FindManyAlertaArgs } from "./args/FindManyAlertaArgs";
import { Alerta } from "../../../models/Alerta";
export declare class FindManyAlertaResolver {
    alertas(ctx: any, info: GraphQLResolveInfo, args: FindManyAlertaArgs): Promise<Alerta[]>;
}
