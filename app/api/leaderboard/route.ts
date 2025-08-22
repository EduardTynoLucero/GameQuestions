import { NextResponse } from "next/server"
import { getLeaderboard } from "@/lib/game"

export async function GET() {
  try {
    const leaderboard = await getLeaderboard(50)
    return NextResponse.json({ leaderboard })
  } catch (error) {
    console.error("Error fetching leaderboard:", error)
    return NextResponse.json({ error: "Error interno del servidor" }, { status: 500 })
  }
}
