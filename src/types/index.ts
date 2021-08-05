import { Context } from "telegraf";

export interface IContext extends Context {
  session?: any;
}

type hit = {};
export type hits = Array<hits>;
