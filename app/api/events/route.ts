import { TEvent } from "@/app/types/Event";
import { sql } from "@vercel/postgres";
import { NextRequest, NextResponse } from "next/server";

export async function GET(): Promise<NextResponse<TEvent[]>> {
  const { rows } = await sql`SELECT * from events`;

  return NextResponse.json(rows as TEvent[]);
}

export async function POST(request: NextRequest): Promise<NextResponse<any>> {
  const { name, description, location, date, time } = await request.json();
  console.log(name, description, location, date, time);

  const { rows } =
    await sql`INSERT INTO events (name, description, location, date, time)
VALUES (${name}, ${description}, ${location}, ${date}, ${time});`;

  return NextResponse.json({ message: "ok" });
}
