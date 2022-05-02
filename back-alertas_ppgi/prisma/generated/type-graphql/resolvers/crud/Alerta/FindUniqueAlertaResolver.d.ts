import { GraphQLResolveInfo } from "graphql";
import { FindUniqueAlertaArgs } from "./args/FindUniqueAlertaArgs";
import { Alerta } from "../../../models/Alerta";
export declare class FindUniqueAlertaResolver {
    alerta(ctx: any, info: GraphQLResolveInfo, args: FindUniqueAlertaArgs): Promise<Alerta | null>;
}
