import { Context } from "telegraf";
import { IWikiResponse } from "./interfaces";
export interface IContext extends Context {
    session?: any;
}
export declare type hits = Array<hits>;
export declare type SearchResponse = IWikiResponse | null;
