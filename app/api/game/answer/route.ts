// app/api/game/answer/route.ts
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
    const questionId = Number(body?.questionId);
    const userAnswer = String(body?.userAnswer ?? "");
    const timeTaken = Number(body?.timeTaken);

    if (
      !Number.isFinite(sessionId) ||
      !Number.isFinite(questionId) ||
      !userAnswer ||
      !Number.isFinite(timeTaken)
    ) {
      return NextResponse.json(
        { error: "Payload inválido: { sessionId, questionId, userAnswer, timeTaken }" },
        { status: 400 }
      );
    }

    // 4) Delegar al motor de juego (valida, calcula puntaje, persiste)
    const result = await gameEngine.submitAnswer(sessionId, questionId, userAnswer, timeTaken);
    // result = { isCorrect, correctAnswer, explanation, pointsEarned }

    return NextResponse.json(result, { status: 200 });
  } catch (error) {
    console.error("Error submitting answer:", error);
    return NextResponse.json({ error: "Error interno del servidor" }, { status: 500 });
  }
}
