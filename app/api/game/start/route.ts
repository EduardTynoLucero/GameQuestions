import { type NextRequest, NextResponse } from "next/server";
import { verifyToken, getUserById } from "@/lib/auth";
import { gameEngine } from "@/lib/game-engine";

export async function POST(request: NextRequest) {
  try {
    const token = request.cookies.get("auth-token")?.value;
    if (!token) {
      return NextResponse.json({ error: "No autenticado" }, { status: 401 });
    }

    const payload = verifyToken(token);
    if (!payload) {
      return NextResponse.json({ error: "Token inválido" }, { status: 401 });
    }

    const user = await getUserById(payload.userId);
    if (!user) {
      return NextResponse.json({ error: "Usuario no encontrado" }, { status: 404 });
    }

    const { categoryId } = await request.json();


    const { session, questions } = await gameEngine.startGame(user.id, categoryId ?? null);

    if (!Array.isArray(questions) || questions.length === 0) {
      return NextResponse.json({ error: "No hay preguntas disponibles" }, { status: 404 });
    }

    // No enviar respuestas correctas al cliente
    const questionsForClient = questions.map((q: any) => ({
      id: q.id,
      category_id: q.category_id,
      question_text: q.question_text,
      option_a: q.option_a,
      option_b: q.option_b,
      option_c: q.option_c,
      option_d: q.option_d,
      difficulty: q.difficulty,
    }));

    return NextResponse.json({
      session,
      questions: questionsForClient,
      totalQuestions: questions.length,
    });
  } catch (error) {
    console.error("Error starting game:", error);
    return NextResponse.json({ error: "Error interno del servidor" }, { status: 500 });
  }
}
