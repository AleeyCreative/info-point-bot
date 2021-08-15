import { Context } from "telegraf";
import { IWikiResponse } from "./interfaces";

export interface IContext extends Context {
  session?: any;
}

type hit = {};
export type hits = Array<hits>;

export type SearchResponse = IWikiResponse | null;
