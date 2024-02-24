import { TEvent } from "@/app/types/Event";
import { NextResponse } from "next/server";
import { sql } from "@vercel/postgres";

export async function GET(): Promise<NextResponse<TEvent[]>> {
  const { rows } = await sql`SELECT * from events`;

  return NextResponse.json(rows as TEvent[]);
}
