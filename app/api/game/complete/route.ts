// app/api/game/complete/route.ts
import { type NextRequest, NextResponse } from "next/server";
import { verifyToken } from "@/lib/auth";
import { gameEngine } from "@/lib/game-engine";

export const runtime = "nodejs";
export const revalidate = 0;

export async function POST(request: NextRequest) {
  try {
    // 1) Autenticación por cookie
    const token = request.cookies.get("auth-token")?.value;
    if (!token) {
      return NextResponse.json({ error: "No autenticado" }, { status: 401 });
    }

    // 2) Verificar JWT
    const payload = verifyToken(token);
    if (!payload) {
      return NextResponse.json({ error: "Token inválido" }, { status: 401 });
    }

    // 3) Leer y validar body
    const body = await request.json().catch(() => ({}));
    const sessionId = Number(body?.sessionId);
    if (!Number.isFinite(sessionId)) {
      return NextResponse.json(
        { error: "Payload inválido: { sessionId:number }" },
        { status: 400 },
      );
    }

    // 4) Completar la sesión (el motor calcula y actualiza stats)
    const { session } = await gameEngine.completeGame(sessionId);

    return NextResponse.json({
      session,
      message: "¡Juego completado exitosamente!",
    });
  } catch (error) {
    console.error("Error completing game:", error);
    return NextResponse.json({ error: "Error interno del servidor" }, { status: 500 });
  }
}
