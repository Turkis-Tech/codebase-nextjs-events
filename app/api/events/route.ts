import { TEvent } from "@/app/types/Event";
import { sql } from "@vercel/postgres";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest
): Promise<NextResponse<TEvent | TEvent[]>> {
  const searchParams = request.nextUrl.searchParams;
  const id = searchParams.get("id");

  if (id) {
    const { rows } = await sql`SELECT * from events WHERE id = ${id}`;

    return NextResponse.json(rows[0] as TEvent);
  } else {
    const { rows } = await sql`SELECT * from events`;

    return NextResponse.json(rows as TEvent[]);
  }
}

export async function POST(request: NextRequest): Promise<NextResponse<any>> {
  const { name, description, location, date, time } = await request.json();
  console.log(name, description, location, date, time);

  const { rows } =
    await sql`INSERT INTO events (name, description, location, date, time)
VALUES (${name}, ${description}, ${location}, ${date}, ${time});`;

  return NextResponse.json({ message: "ok" });
}

export async function DELETE(request: NextRequest): Promise<NextResponse<any>> {
  const searchParams = request.nextUrl.searchParams;
  const id = searchParams.get("id");

  const { rowCount } = await sql`DELETE FROM events WHERE id = ${id}`;

  if (rowCount === 0) {
    return NextResponse.json({ message: "Event not found" }, { status: 404 });
  }

  return NextResponse.json({ message: "Event deleted" });
}
