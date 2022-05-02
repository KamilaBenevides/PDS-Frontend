import { GraphQLResolveInfo } from "graphql";
import { CreateAlertaArgs } from "./args/CreateAlertaArgs";
import { Alerta } from "../../../models/Alerta";
export declare class CreateAlertaResolver {
    createAlerta(ctx: any, info: GraphQLResolveInfo, args: CreateAlertaArgs): Promise<Alerta>;
}
