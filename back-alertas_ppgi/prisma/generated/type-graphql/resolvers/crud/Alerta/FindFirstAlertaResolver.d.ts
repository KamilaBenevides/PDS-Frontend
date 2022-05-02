import { GraphQLResolveInfo } from "graphql";
import { FindFirstAlertaArgs } from "./args/FindFirstAlertaArgs";
import { Alerta } from "../../../models/Alerta";
export declare class FindFirstAlertaResolver {
    findFirstAlerta(ctx: any, info: GraphQLResolveInfo, args: FindFirstAlertaArgs): Promise<Alerta | null>;
}
