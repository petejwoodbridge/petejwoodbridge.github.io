import type { APIRoute } from "astro";
import { experimentDialogsJson } from "../data/experiments-dialog";

/** The experiments page's dialog content, fetched the first time a tile is opened. */
export const GET: APIRoute = () =>
  new Response(experimentDialogsJson, { headers: { "Content-Type": "application/json; charset=utf-8" } });
