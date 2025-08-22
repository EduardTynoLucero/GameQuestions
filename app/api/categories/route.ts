import { NextResponse } from "next/server";
import { gameEngine } from "@/lib/game-engine";

export const runtime = "nodejs";        // MySQL necesita Node runtime
export const revalidate = 0;            // no caches para desarrollo

export async function GET() {
  try {
    const categories = await gameEngine.getCategories();

    // Normaliza por si acaso
    const list = Array.isArray(categories) ? categories : [];

    return NextResponse.json({ categories: list }, { status: 200 });
  } catch (error) {
    console.error("Error fetching categories:", error);
    return NextResponse.json({ categories: [] }, { status: 200 }); // evita romper el map
  }
}
