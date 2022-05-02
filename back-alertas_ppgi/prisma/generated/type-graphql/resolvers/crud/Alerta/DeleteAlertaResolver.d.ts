import { GraphQLResolveInfo } from "graphql";
import { DeleteAlertaArgs } from "./args/DeleteAlertaArgs";
import { Alerta } from "../../../models/Alerta";
export declare class DeleteAlertaResolver {
    deleteAlerta(ctx: any, info: GraphQLResolveInfo, args: DeleteAlertaArgs): Promise<Alerta | null>;
}
