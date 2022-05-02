import { GraphQLResolveInfo } from "graphql";
import { UpdateAlertaArgs } from "./args/UpdateAlertaArgs";
import { Alerta } from "../../../models/Alerta";
export declare class UpdateAlertaResolver {
    updateAlerta(ctx: any, info: GraphQLResolveInfo, args: UpdateAlertaArgs): Promise<Alerta | null>;
}
