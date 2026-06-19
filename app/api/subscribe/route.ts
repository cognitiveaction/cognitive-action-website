import { NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";

const DATA_FILE = path.join(process.cwd(), "data", "subscribers.json");

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: "Invalid email address." }, { status: 400 });
    }

    let subscribers: { email: string; date: string }[] = [];
    try {
      const data = await fs.readFile(DATA_FILE, "utf-8");
      subscribers = JSON.parse(data);
    } catch {
      // file doesn't exist yet
    }

    if (subscribers.some((s) => s.email === email)) {
      return NextResponse.json({ success: true });
    }

    subscribers.push({ email, date: new Date().toISOString() });

    await fs.mkdir(path.dirname(DATA_FILE), { recursive: true });
    await fs.writeFile(DATA_FILE, JSON.stringify(subscribers, null, 2));

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Server error." }, { status: 500 });
  }
}
