/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/categories/route";
exports.ids = ["app/api/categories/route"];
exports.modules = {

/***/ "(rsc)/./app/api/categories/route.ts":
/*!*************************************!*\
  !*** ./app/api/categories/route.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET),\n/* harmony export */   revalidate: () => (/* binding */ revalidate),\n/* harmony export */   runtime: () => (/* binding */ runtime)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var _lib_game_engine__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/lib/game-engine */ \"(rsc)/./lib/game-engine.ts\");\n\n\nconst runtime = \"nodejs\"; // MySQL necesita Node runtime\nconst revalidate = 0; // no caches para desarrollo\nasync function GET() {\n    try {\n        const categories = await _lib_game_engine__WEBPACK_IMPORTED_MODULE_1__.gameEngine.getCategories();\n        // Normaliza por si acaso\n        const list = Array.isArray(categories) ? categories : [];\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            categories: list\n        }, {\n            status: 200\n        });\n    } catch (error) {\n        console.error(\"Error fetching categories:\", error);\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            categories: []\n        }, {\n            status: 200\n        }); // evita romper el map\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL2NhdGVnb3JpZXMvcm91dGUudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBMkM7QUFDSTtBQUV4QyxNQUFNRSxVQUFVLFNBQVMsQ0FBUSw4QkFBOEI7QUFDL0QsTUFBTUMsYUFBYSxFQUFFLENBQVksNEJBQTRCO0FBRTdELGVBQWVDO0lBQ3BCLElBQUk7UUFDRixNQUFNQyxhQUFhLE1BQU1KLHdEQUFVQSxDQUFDSyxhQUFhO1FBRWpELHlCQUF5QjtRQUN6QixNQUFNQyxPQUFPQyxNQUFNQyxPQUFPLENBQUNKLGNBQWNBLGFBQWEsRUFBRTtRQUV4RCxPQUFPTCxxREFBWUEsQ0FBQ1UsSUFBSSxDQUFDO1lBQUVMLFlBQVlFO1FBQUssR0FBRztZQUFFSSxRQUFRO1FBQUk7SUFDL0QsRUFBRSxPQUFPQyxPQUFPO1FBQ2RDLFFBQVFELEtBQUssQ0FBQyw4QkFBOEJBO1FBQzVDLE9BQU9aLHFEQUFZQSxDQUFDVSxJQUFJLENBQUM7WUFBRUwsWUFBWSxFQUFFO1FBQUMsR0FBRztZQUFFTSxRQUFRO1FBQUksSUFBSSxzQkFBc0I7SUFDdkY7QUFDRiIsInNvdXJjZXMiOlsiQzpcXFVzZXJzXFxlZHVhclxcRG9jdW1lbnRzXFxSRUFDVF9DT1VSU0VcXGVkdWNhdGlvbmFsLWdhbWVcXGFwcFxcYXBpXFxjYXRlZ29yaWVzXFxyb3V0ZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZXh0UmVzcG9uc2UgfSBmcm9tIFwibmV4dC9zZXJ2ZXJcIjtcbmltcG9ydCB7IGdhbWVFbmdpbmUgfSBmcm9tIFwiQC9saWIvZ2FtZS1lbmdpbmVcIjtcblxuZXhwb3J0IGNvbnN0IHJ1bnRpbWUgPSBcIm5vZGVqc1wiOyAgICAgICAgLy8gTXlTUUwgbmVjZXNpdGEgTm9kZSBydW50aW1lXG5leHBvcnQgY29uc3QgcmV2YWxpZGF0ZSA9IDA7ICAgICAgICAgICAgLy8gbm8gY2FjaGVzIHBhcmEgZGVzYXJyb2xsb1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gR0VUKCkge1xuICB0cnkge1xuICAgIGNvbnN0IGNhdGVnb3JpZXMgPSBhd2FpdCBnYW1lRW5naW5lLmdldENhdGVnb3JpZXMoKTtcblxuICAgIC8vIE5vcm1hbGl6YSBwb3Igc2kgYWNhc29cbiAgICBjb25zdCBsaXN0ID0gQXJyYXkuaXNBcnJheShjYXRlZ29yaWVzKSA/IGNhdGVnb3JpZXMgOiBbXTtcblxuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IGNhdGVnb3JpZXM6IGxpc3QgfSwgeyBzdGF0dXM6IDIwMCB9KTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgZmV0Y2hpbmcgY2F0ZWdvcmllczpcIiwgZXJyb3IpO1xuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IGNhdGVnb3JpZXM6IFtdIH0sIHsgc3RhdHVzOiAyMDAgfSk7IC8vIGV2aXRhIHJvbXBlciBlbCBtYXBcbiAgfVxufVxuIl0sIm5hbWVzIjpbIk5leHRSZXNwb25zZSIsImdhbWVFbmdpbmUiLCJydW50aW1lIiwicmV2YWxpZGF0ZSIsIkdFVCIsImNhdGVnb3JpZXMiLCJnZXRDYXRlZ29yaWVzIiwibGlzdCIsIkFycmF5IiwiaXNBcnJheSIsImpzb24iLCJzdGF0dXMiLCJlcnJvciIsImNvbnNvbGUiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./app/api/categories/route.ts\n");

/***/ }),

/***/ "(rsc)/./lib/db.ts":
/*!*******************!*\
  !*** ./lib/db.ts ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mysql2_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mysql2/promise */ \"(rsc)/./node_modules/mysql2/promise.js\");\n\nconst pool = mysql2_promise__WEBPACK_IMPORTED_MODULE_0__.createPool({\n    host: process.env.DB_HOST || \"127.0.0.1\",\n    user: process.env.DB_USER || \"root\",\n    password: process.env.DB_PASSWORD || \"tynolucero\",\n    database: process.env.DB_NAME || \"videogame\",\n    waitForConnections: true,\n    connectionLimit: 10,\n    queueLimit: 0\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (pool);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9saWIvZGIudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBbUM7QUFFbkMsTUFBTUMsT0FBT0Qsc0RBQWdCLENBQUM7SUFDNUJHLE1BQU1DLFFBQVFDLEdBQUcsQ0FBQ0MsT0FBTyxJQUFJO0lBQzdCQyxNQUFNSCxRQUFRQyxHQUFHLENBQUNHLE9BQU8sSUFBSTtJQUM3QkMsVUFBVUwsUUFBUUMsR0FBRyxDQUFDSyxXQUFXLElBQUk7SUFDckNDLFVBQVVQLFFBQVFDLEdBQUcsQ0FBQ08sT0FBTyxJQUFJO0lBQ2pDQyxvQkFBb0I7SUFDcEJDLGlCQUFpQjtJQUNqQkMsWUFBWTtBQUNkO0FBRUEsaUVBQWVkLElBQUlBLEVBQUMiLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcZWR1YXJcXERvY3VtZW50c1xcUkVBQ1RfQ09VUlNFXFxlZHVjYXRpb25hbC1nYW1lXFxsaWJcXGRiLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBteXNxbCBmcm9tIFwibXlzcWwyL3Byb21pc2VcIjtcblxuY29uc3QgcG9vbCA9IG15c3FsLmNyZWF0ZVBvb2woe1xuICBob3N0OiBwcm9jZXNzLmVudi5EQl9IT1NUIHx8IFwiMTI3LjAuMC4xXCIsXG4gIHVzZXI6IHByb2Nlc3MuZW52LkRCX1VTRVIgfHwgXCJyb290XCIsXG4gIHBhc3N3b3JkOiBwcm9jZXNzLmVudi5EQl9QQVNTV09SRCB8fCBcInR5bm9sdWNlcm9cIixcbiAgZGF0YWJhc2U6IHByb2Nlc3MuZW52LkRCX05BTUUgfHwgXCJ2aWRlb2dhbWVcIixcbiAgd2FpdEZvckNvbm5lY3Rpb25zOiB0cnVlLFxuICBjb25uZWN0aW9uTGltaXQ6IDEwLFxuICBxdWV1ZUxpbWl0OiAwLFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IHBvb2w7XG4iXSwibmFtZXMiOlsibXlzcWwiLCJwb29sIiwiY3JlYXRlUG9vbCIsImhvc3QiLCJwcm9jZXNzIiwiZW52IiwiREJfSE9TVCIsInVzZXIiLCJEQl9VU0VSIiwicGFzc3dvcmQiLCJEQl9QQVNTV09SRCIsImRhdGFiYXNlIiwiREJfTkFNRSIsIndhaXRGb3JDb25uZWN0aW9ucyIsImNvbm5lY3Rpb25MaW1pdCIsInF1ZXVlTGltaXQiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./lib/db.ts\n");

/***/ }),

/***/ "(rsc)/./lib/game-engine.ts":
/*!****************************!*\
  !*** ./lib/game-engine.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   gameEngine: () => (/* binding */ gameEngine)\n/* harmony export */ });\n/* harmony import */ var _db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./db */ \"(rsc)/./lib/db.ts\");\n\n/* -------------------- Helpers -------------------- */ function clean(s) {\n    return String(s ?? \"\").trim().toLowerCase();\n}\n/** Normaliza múltiples formatos a A|B|C|D */ function normalizeAnswer(input, question) {\n    const raw = clean(input);\n    if (!raw) return null;\n    // 1) A/B/C/D con adornos (A)  A.  A:  A-\n    if (/^a[\\)\\.\\:\\-_\\s]*$/.test(raw)) return \"A\";\n    if (/^b[\\)\\.\\:\\-_\\s]*$/.test(raw)) return \"B\";\n    if (/^c[\\)\\.\\:\\-_\\s]*$/.test(raw)) return \"C\";\n    if (/^d[\\)\\.\\:\\-_\\s]*$/.test(raw)) return \"D\";\n    // 2) option_a / option-a / optiona / opcion a\n    if (/^(op(c|ci)on|option)[\\s\\-_]*a$/.test(raw)) return \"A\";\n    if (/^(op(c|ci)on|option)[\\s\\-_]*b$/.test(raw)) return \"B\";\n    if (/^(op(c|ci)on|option)[\\s\\-_]*c$/.test(raw)) return \"C\";\n    if (/^(op(c|ci)on|option)[\\s\\-_]*d$/.test(raw)) return \"D\";\n    // 3) 1..4 → A..D\n    if (raw === \"1\") return \"A\";\n    if (raw === \"2\") return \"B\";\n    if (raw === \"3\") return \"C\";\n    if (raw === \"4\") return \"D\";\n    // 4) Texto exacto de la opción (case-insensitive + trim)\n    const a = clean(question.option_a);\n    const b = clean(question.option_b);\n    const c = clean(question.option_c);\n    const d = clean(question.option_d);\n    if (a && raw === a) return \"A\";\n    if (b && raw === b) return \"B\";\n    if (c && raw === c) return \"C\";\n    if (d && raw === d) return \"D\";\n    // 5) Normaliza espacios múltiples\n    const norm = (x)=>x.replace(/\\s+/g, \" \");\n    if (a && norm(raw) === norm(a)) return \"A\";\n    if (b && norm(raw) === norm(b)) return \"B\";\n    if (c && norm(raw) === norm(c)) return \"C\";\n    if (d && norm(raw) === norm(d)) return \"D\";\n    return null;\n}\nfunction calculatePoints(isCorrect, difficulty, timeTaken) {\n    if (!isCorrect) return 0;\n    const base = Math.max(1, Number(difficulty || 1)) * 10;\n    const t = Math.max(0, Math.min(300, Math.floor(Number(timeTaken) || 0))); // 0..300s\n    const bonus = Math.max(0, (30 - t) / 30) * 0.5; // hasta +50%\n    return Math.max(0, Math.floor(base * (1 + bonus)));\n}\n/* -------------------- Implementación -------------------- */ const gameEngine = {\n    async startGame (userId, categoryId) {\n        const connection = await _db__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getConnection();\n        try {\n            await connection.beginTransaction();\n            const [sessionResult] = await connection.execute(\"INSERT INTO game_sessions (user_id, category_id) VALUES (?, ?)\", [\n                userId,\n                categoryId ?? null\n            ]);\n            const sessionId = sessionResult.insertId;\n            const questionsQuery = `\n        SELECT id, category_id, question_text, option_a, option_b, option_c, option_d,\n               correct_answer, difficulty, explanation\n        FROM questions\n        WHERE (? IS NULL OR category_id = ?)\n        ORDER BY RAND()\n        LIMIT 10\n      `;\n            const [questions] = await connection.execute(questionsQuery, [\n                categoryId ?? null,\n                categoryId ?? null\n            ]);\n            await connection.commit();\n            return {\n                session: {\n                    id: sessionId\n                },\n                questions\n            };\n        } catch (error) {\n            await connection.rollback();\n            throw error;\n        } finally{\n            connection.release();\n        }\n    },\n    async submitAnswer (sessionId, questionId, userAnswer, timeTaken) {\n        const connection = await _db__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getConnection();\n        try {\n            // 1) Traer la pregunta\n            const [questionRows] = await connection.execute(`SELECT id, category_id, question_text, option_a, option_b, option_c, option_d,\n                correct_answer, difficulty, explanation\n         FROM questions WHERE id = ?`, [\n                questionId\n            ]);\n            const question = questionRows[0];\n            if (!question) throw new Error(\"Question not found\");\n            // 2) Normalizar respuesta del usuario a A|B|C|D\n            const normalized = normalizeAnswer(userAnswer, question);\n            if (!normalized) {\n                throw new Error(\"Invalid userAnswer (must be A, B, C or D, 1..4, option_a..d, o texto exacto)\");\n            }\n            // 3) Calcular correcto y puntos\n            const safeTime = Math.max(0, Math.min(300, Math.floor(Number(timeTaken) || 0)));\n            const isCorrect = normalized === question.correct_answer;\n            const pointsEarned = calculatePoints(isCorrect, Number(question.difficulty || 1), safeTime);\n            // 4) Insertar cumpliendo CHECKs\n            await connection.execute(`INSERT INTO user_answers\n          (session_id, question_id, user_answer, is_correct, points_earned, time_taken)\n         VALUES (?, ?, ?, ?, ?, ?)`, [\n                sessionId,\n                questionId,\n                normalized,\n                isCorrect ? 1 : 0,\n                pointsEarned,\n                safeTime\n            ]);\n            return {\n                isCorrect,\n                correctAnswer: question.correct_answer,\n                explanation: question.explanation,\n                pointsEarned\n            };\n        } finally{\n            connection.release();\n        }\n    },\n    async completeGame (sessionId) {\n        const connection = await _db__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getConnection();\n        try {\n            const [answerStats] = await connection.execute(`SELECT \n          COUNT(*) as total_questions,\n          SUM(CASE WHEN is_correct THEN 1 ELSE 0 END) as correct_answers,\n          SUM(points_earned) as total_score,\n          SUM(time_taken) as total_time\n         FROM user_answers WHERE session_id = ?`, [\n                sessionId\n            ]);\n            const stats = answerStats[0];\n            await connection.execute(`UPDATE game_sessions\n         SET total_questions = ?, correct_answers = ?, total_score = ?, time_taken = ?, completed_at = NOW()\n         WHERE id = ?`, [\n                stats.total_questions,\n                stats.correct_answers,\n                stats.total_score,\n                stats.total_time,\n                sessionId\n            ]);\n            const [sessionRows] = await connection.execute(\"SELECT * FROM game_sessions WHERE id = ?\", [\n                sessionId\n            ]);\n            return {\n                session: sessionRows[0]\n            };\n        } finally{\n            connection.release();\n        }\n    },\n    async getCategories () {\n        const connection = await _db__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getConnection();\n        try {\n            const [rows] = await connection.execute(\"SELECT id, name, color, description FROM categories ORDER BY name\");\n            return rows; // siempre array\n        } finally{\n            connection.release();\n        }\n    },\n    async getUserStats (userId) {\n        const connection = await _db__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getConnection();\n        try {\n            const [rows] = await connection.execute(`SELECT \n          total_score,\n          games_played,\n          correct_answers,\n          total_questions,\n          CASE \n            WHEN total_questions > 0 THEN ROUND((correct_answers / total_questions) * 100, 2)\n            ELSE 0 \n          END as accuracy\n         FROM users \n         WHERE id = ?`, [\n                userId\n            ]);\n            return rows[0] ?? {\n                total_score: 0,\n                games_played: 0,\n                correct_answers: 0,\n                total_questions: 0,\n                accuracy: 0\n            };\n        } finally{\n            connection.release();\n        }\n    },\n    async getLeaderboard (limit = 10) {\n        const connection = await _db__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getConnection();\n        try {\n            const [rows] = await connection.execute(`SELECT \n          @rank := @rank + 1 as rank,\n          display_name,\n          email,\n          total_score,\n          games_played,\n          CASE \n            WHEN total_questions > 0 THEN ROUND((correct_answers / total_questions) * 100, 2)\n            ELSE 0 \n          END as accuracy\n         FROM users, (SELECT @rank := 0) r\n         WHERE games_played > 0\n         ORDER BY total_score DESC, games_played DESC\n         LIMIT ?`, [\n                limit\n            ]);\n            return rows;\n        } finally{\n            connection.release();\n        }\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LElBQUk7WUFDRixNQUFNLENBQUNrQyxLQUFLLEdBQUcsTUFBTW5DLFdBQVdJLE9BQU8sQ0FDckM7WUFFRixPQUFPK0IsTUFBZSxnQkFBZ0I7UUFDeEMsU0FBVTtZQUNSbkMsV0FBV2MsT0FBTztRQUNwQjtJQUNGO0lBRUEsTUFBTXNCLGNBQWF0QyxNQUFjO1FBQy9CLE1BQU1FLGFBQWEsTUFBTXRDLDJDQUFJQSxDQUFDdUMsYUFBYTtRQUMzQyxJQUFJO1lBQ0YsTUFBTSxDQUFDa0MsS0FBSyxHQUFHLE1BQU1uQyxXQUFXSSxPQUFPLENBQ3JDLENBQUM7Ozs7Ozs7Ozs7cUJBVVksQ0FBQyxFQUNkO2dCQUFDTjthQUFPO1lBR1YsT0FDRSxJQUFlLENBQUMsRUFBRSxJQUNsQjtnQkFBRWlDLGFBQWE7Z0JBQUdNLGNBQWM7Z0JBQUdQLGlCQUFpQjtnQkFBR0QsaUJBQWlCO2dCQUFHUyxVQUFVO1lBQUU7UUFFM0YsU0FBVTtZQUNSdEMsV0FBV2MsT0FBTztRQUNwQjtJQUNGO0lBRUEsTUFBTXlCLGdCQUFlQyxRQUFRLEVBQUU7UUFDN0IsTUFBTXhDLGFBQWEsTUFBTXRDLDJDQUFJQSxDQUFDdUMsYUFBYTtRQUMzQyxJQUFJO1lBQ0YsTUFBTSxDQUFDa0MsS0FBSyxHQUFHLE1BQU1uQyxXQUFXSSxPQUFPLENBQ3JDLENBQUM7Ozs7Ozs7Ozs7Ozs7Z0JBYU8sQ0FBQyxFQUNUO2dCQUFDb0M7YUFBTTtZQUVULE9BQU9MO1FBQ1QsU0FBVTtZQUNSbkMsV0FBV2MsT0FBTztRQUNwQjtJQUNGO0FBQ0YsRUFBRSIsInNvdXJjZXMiOlsiQzpcXFVzZXJzXFxlZHVhclxcRG9jdW1lbnRzXFxSRUFDVF9DT1VSU0VcXGVkdWNhdGlvbmFsLWdhbWVcXGxpYlxcZ2FtZS1lbmdpbmUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHBvb2wgZnJvbSBcIi4vZGJcIjtcbmltcG9ydCB0eXBlIHsgUm93RGF0YVBhY2tldCB9IGZyb20gXCJteXNxbDJcIjtcblxuLyoqIFNpIHF1aWVyZXMsIGRlZmluZSB0aXBvcyBtw6FzIGVzdHJpY3RvcyAqL1xuLy8gZXhwb3J0IGludGVyZmFjZSBRdWVzdGlvbiBleHRlbmRzIFJvd0RhdGFQYWNrZXQge1xuLy8gICBpZDogbnVtYmVyO1xuLy8gICBjYXRlZ29yeV9pZDogbnVtYmVyO1xuLy8gICBxdWVzdGlvbl90ZXh0OiBzdHJpbmc7XG4vLyAgIG9wdGlvbl9hOiBzdHJpbmc7XG4vLyAgIG9wdGlvbl9iOiBzdHJpbmc7XG4vLyAgIG9wdGlvbl9jOiBzdHJpbmc7XG4vLyAgIG9wdGlvbl9kOiBzdHJpbmc7XG4vLyAgIGNvcnJlY3RfYW5zd2VyOiBcIkFcIiB8IFwiQlwiIHwgXCJDXCIgfCBcIkRcIjtcbi8vICAgZGlmZmljdWx0eTogbnVtYmVyO1xuLy8gICBleHBsYW5hdGlvbj86IHN0cmluZztcbi8vIH1cblxuZXhwb3J0IGludGVyZmFjZSBHYW1lRW5naW5lIHtcbiAgc3RhcnRHYW1lOiAodXNlcklkOiBudW1iZXIsIGNhdGVnb3J5SWQ/OiBudW1iZXIpID0+IFByb21pc2U8YW55PjtcbiAgc3VibWl0QW5zd2VyOiAoc2Vzc2lvbklkOiBudW1iZXIsIHF1ZXN0aW9uSWQ6IG51bWJlciwgdXNlckFuc3dlcjogc3RyaW5nLCB0aW1lVGFrZW46IG51bWJlcikgPT4gUHJvbWlzZTxhbnk+O1xuICBjb21wbGV0ZUdhbWU6IChzZXNzaW9uSWQ6IG51bWJlcikgPT4gUHJvbWlzZTxhbnk+O1xuICBnZXRDYXRlZ29yaWVzOiAoKSA9PiBQcm9taXNlPGFueVtdPjtcbiAgZ2V0VXNlclN0YXRzOiAodXNlcklkOiBudW1iZXIpID0+IFByb21pc2U8YW55PjtcbiAgZ2V0TGVhZGVyYm9hcmQ6IChsaW1pdD86IG51bWJlcikgPT4gUHJvbWlzZTxhbnk+O1xufVxuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLSBIZWxwZXJzIC0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5mdW5jdGlvbiBjbGVhbihzOiB1bmtub3duKTogc3RyaW5nIHtcbiAgcmV0dXJuIFN0cmluZyhzID8/IFwiXCIpLnRyaW0oKS50b0xvd2VyQ2FzZSgpO1xufVxuXG4vKiogTm9ybWFsaXphIG3Dumx0aXBsZXMgZm9ybWF0b3MgYSBBfEJ8Q3xEICovXG5mdW5jdGlvbiBub3JtYWxpemVBbnN3ZXIoXG4gIGlucHV0OiB1bmtub3duLFxuICBxdWVzdGlvbjoge1xuICAgIG9wdGlvbl9hPzogc3RyaW5nO1xuICAgIG9wdGlvbl9iPzogc3RyaW5nO1xuICAgIG9wdGlvbl9jPzogc3RyaW5nO1xuICAgIG9wdGlvbl9kPzogc3RyaW5nO1xuICB9XG4pOiBcIkFcIiB8IFwiQlwiIHwgXCJDXCIgfCBcIkRcIiB8IG51bGwge1xuICBjb25zdCByYXcgPSBjbGVhbihpbnB1dCk7XG4gIGlmICghcmF3KSByZXR1cm4gbnVsbDtcblxuICAvLyAxKSBBL0IvQy9EIGNvbiBhZG9ybm9zIChBKSAgQS4gIEE6ICBBLVxuICBpZiAoL15hW1xcKVxcLlxcOlxcLV9cXHNdKiQvLnRlc3QocmF3KSkgcmV0dXJuIFwiQVwiO1xuICBpZiAoL15iW1xcKVxcLlxcOlxcLV9cXHNdKiQvLnRlc3QocmF3KSkgcmV0dXJuIFwiQlwiO1xuICBpZiAoL15jW1xcKVxcLlxcOlxcLV9cXHNdKiQvLnRlc3QocmF3KSkgcmV0dXJuIFwiQ1wiO1xuICBpZiAoL15kW1xcKVxcLlxcOlxcLV9cXHNdKiQvLnRlc3QocmF3KSkgcmV0dXJuIFwiRFwiO1xuXG4gIC8vIDIpIG9wdGlvbl9hIC8gb3B0aW9uLWEgLyBvcHRpb25hIC8gb3BjaW9uIGFcbiAgaWYgKC9eKG9wKGN8Y2kpb258b3B0aW9uKVtcXHNcXC1fXSphJC8udGVzdChyYXcpKSByZXR1cm4gXCJBXCI7XG4gIGlmICgvXihvcChjfGNpKW9ufG9wdGlvbilbXFxzXFwtX10qYiQvLnRlc3QocmF3KSkgcmV0dXJuIFwiQlwiO1xuICBpZiAoL14ob3AoY3xjaSlvbnxvcHRpb24pW1xcc1xcLV9dKmMkLy50ZXN0KHJhdykpIHJldHVybiBcIkNcIjtcbiAgaWYgKC9eKG9wKGN8Y2kpb258b3B0aW9uKVtcXHNcXC1fXSpkJC8udGVzdChyYXcpKSByZXR1cm4gXCJEXCI7XG5cbiAgLy8gMykgMS4uNCDihpIgQS4uRFxuICBpZiAocmF3ID09PSBcIjFcIikgcmV0dXJuIFwiQVwiO1xuICBpZiAocmF3ID09PSBcIjJcIikgcmV0dXJuIFwiQlwiO1xuICBpZiAocmF3ID09PSBcIjNcIikgcmV0dXJuIFwiQ1wiO1xuICBpZiAocmF3ID09PSBcIjRcIikgcmV0dXJuIFwiRFwiO1xuXG4gIC8vIDQpIFRleHRvIGV4YWN0byBkZSBsYSBvcGNpw7NuIChjYXNlLWluc2Vuc2l0aXZlICsgdHJpbSlcbiAgY29uc3QgYSA9IGNsZWFuKHF1ZXN0aW9uLm9wdGlvbl9hKTtcbiAgY29uc3QgYiA9IGNsZWFuKHF1ZXN0aW9uLm9wdGlvbl9iKTtcbiAgY29uc3QgYyA9IGNsZWFuKHF1ZXN0aW9uLm9wdGlvbl9jKTtcbiAgY29uc3QgZCA9IGNsZWFuKHF1ZXN0aW9uLm9wdGlvbl9kKTtcblxuICBpZiAoYSAmJiByYXcgPT09IGEpIHJldHVybiBcIkFcIjtcbiAgaWYgKGIgJiYgcmF3ID09PSBiKSByZXR1cm4gXCJCXCI7XG4gIGlmIChjICYmIHJhdyA9PT0gYykgcmV0dXJuIFwiQ1wiO1xuICBpZiAoZCAmJiByYXcgPT09IGQpIHJldHVybiBcIkRcIjtcblxuICAvLyA1KSBOb3JtYWxpemEgZXNwYWNpb3MgbcO6bHRpcGxlc1xuICBjb25zdCBub3JtID0gKHg6IHN0cmluZykgPT4geC5yZXBsYWNlKC9cXHMrL2csIFwiIFwiKTtcbiAgaWYgKGEgJiYgbm9ybShyYXcpID09PSBub3JtKGEpKSByZXR1cm4gXCJBXCI7XG4gIGlmIChiICYmIG5vcm0ocmF3KSA9PT0gbm9ybShiKSkgcmV0dXJuIFwiQlwiO1xuICBpZiAoYyAmJiBub3JtKHJhdykgPT09IG5vcm0oYykpIHJldHVybiBcIkNcIjtcbiAgaWYgKGQgJiYgbm9ybShyYXcpID09PSBub3JtKGQpKSByZXR1cm4gXCJEXCI7XG5cbiAgcmV0dXJuIG51bGw7XG59XG5cbmZ1bmN0aW9uIGNhbGN1bGF0ZVBvaW50cyhpc0NvcnJlY3Q6IGJvb2xlYW4sIGRpZmZpY3VsdHk6IG51bWJlciwgdGltZVRha2VuOiBudW1iZXIpOiBudW1iZXIge1xuICBpZiAoIWlzQ29ycmVjdCkgcmV0dXJuIDA7XG4gIGNvbnN0IGJhc2UgPSBNYXRoLm1heCgxLCBOdW1iZXIoZGlmZmljdWx0eSB8fCAxKSkgKiAxMDtcbiAgY29uc3QgdCA9IE1hdGgubWF4KDAsIE1hdGgubWluKDMwMCwgTWF0aC5mbG9vcihOdW1iZXIodGltZVRha2VuKSB8fCAwKSkpOyAvLyAwLi4zMDBzXG4gIGNvbnN0IGJvbnVzID0gTWF0aC5tYXgoMCwgKDMwIC0gdCkgLyAzMCkgKiAwLjU7IC8vIGhhc3RhICs1MCVcbiAgcmV0dXJuIE1hdGgubWF4KDAsIE1hdGguZmxvb3IoYmFzZSAqICgxICsgYm9udXMpKSk7XG59XG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tIEltcGxlbWVudGFjacOzbiAtLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuZXhwb3J0IGNvbnN0IGdhbWVFbmdpbmU6IEdhbWVFbmdpbmUgPSB7XG4gIGFzeW5jIHN0YXJ0R2FtZSh1c2VySWQ6IG51bWJlciwgY2F0ZWdvcnlJZD86IG51bWJlcikge1xuICAgIGNvbnN0IGNvbm5lY3Rpb24gPSBhd2FpdCBwb29sLmdldENvbm5lY3Rpb24oKTtcbiAgICB0cnkge1xuICAgICAgYXdhaXQgY29ubmVjdGlvbi5iZWdpblRyYW5zYWN0aW9uKCk7XG5cbiAgICAgIGNvbnN0IFtzZXNzaW9uUmVzdWx0XSA9IGF3YWl0IGNvbm5lY3Rpb24uZXhlY3V0ZShcbiAgICAgICAgXCJJTlNFUlQgSU5UTyBnYW1lX3Nlc3Npb25zICh1c2VyX2lkLCBjYXRlZ29yeV9pZCkgVkFMVUVTICg/LCA/KVwiLFxuICAgICAgICBbdXNlcklkLCBjYXRlZ29yeUlkID8/IG51bGxdLFxuICAgICAgKTtcbiAgICAgIGNvbnN0IHNlc3Npb25JZCA9IChzZXNzaW9uUmVzdWx0IGFzIGFueSkuaW5zZXJ0SWQ7XG5cbiAgICAgIGNvbnN0IHF1ZXN0aW9uc1F1ZXJ5ID0gYFxuICAgICAgICBTRUxFQ1QgaWQsIGNhdGVnb3J5X2lkLCBxdWVzdGlvbl90ZXh0LCBvcHRpb25fYSwgb3B0aW9uX2IsIG9wdGlvbl9jLCBvcHRpb25fZCxcbiAgICAgICAgICAgICAgIGNvcnJlY3RfYW5zd2VyLCBkaWZmaWN1bHR5LCBleHBsYW5hdGlvblxuICAgICAgICBGUk9NIHF1ZXN0aW9uc1xuICAgICAgICBXSEVSRSAoPyBJUyBOVUxMIE9SIGNhdGVnb3J5X2lkID0gPylcbiAgICAgICAgT1JERVIgQlkgUkFORCgpXG4gICAgICAgIExJTUlUIDEwXG4gICAgICBgO1xuICAgICAgY29uc3QgW3F1ZXN0aW9uc10gPSBhd2FpdCBjb25uZWN0aW9uLmV4ZWN1dGUocXVlc3Rpb25zUXVlcnksIFtjYXRlZ29yeUlkID8/IG51bGwsIGNhdGVnb3J5SWQgPz8gbnVsbF0pO1xuXG4gICAgICBhd2FpdCBjb25uZWN0aW9uLmNvbW1pdCgpO1xuICAgICAgcmV0dXJuIHsgc2Vzc2lvbjogeyBpZDogc2Vzc2lvbklkIH0sIHF1ZXN0aW9ucyB9O1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBhd2FpdCBjb25uZWN0aW9uLnJvbGxiYWNrKCk7XG4gICAgICB0aHJvdyBlcnJvcjtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgY29ubmVjdGlvbi5yZWxlYXNlKCk7XG4gICAgfVxuICB9LFxuXG4gIGFzeW5jIHN1Ym1pdEFuc3dlcihzZXNzaW9uSWQ6IG51bWJlciwgcXVlc3Rpb25JZDogbnVtYmVyLCB1c2VyQW5zd2VyOiBzdHJpbmcsIHRpbWVUYWtlbjogbnVtYmVyKSB7XG4gICAgY29uc3QgY29ubmVjdGlvbiA9IGF3YWl0IHBvb2wuZ2V0Q29ubmVjdGlvbigpO1xuICAgIHRyeSB7XG4gICAgICAvLyAxKSBUcmFlciBsYSBwcmVndW50YVxuICAgICAgY29uc3QgW3F1ZXN0aW9uUm93c10gPSBhd2FpdCBjb25uZWN0aW9uLmV4ZWN1dGU8Um93RGF0YVBhY2tldFtdPihcbiAgICAgICAgYFNFTEVDVCBpZCwgY2F0ZWdvcnlfaWQsIHF1ZXN0aW9uX3RleHQsIG9wdGlvbl9hLCBvcHRpb25fYiwgb3B0aW9uX2MsIG9wdGlvbl9kLFxuICAgICAgICAgICAgICAgIGNvcnJlY3RfYW5zd2VyLCBkaWZmaWN1bHR5LCBleHBsYW5hdGlvblxuICAgICAgICAgRlJPTSBxdWVzdGlvbnMgV0hFUkUgaWQgPSA/YCxcbiAgICAgICAgW3F1ZXN0aW9uSWRdXG4gICAgICApO1xuICAgICAgY29uc3QgcXVlc3Rpb246IGFueSA9IChxdWVzdGlvblJvd3MgYXMgYW55W10pWzBdO1xuICAgICAgaWYgKCFxdWVzdGlvbikgdGhyb3cgbmV3IEVycm9yKFwiUXVlc3Rpb24gbm90IGZvdW5kXCIpO1xuXG4gICAgICAvLyAyKSBOb3JtYWxpemFyIHJlc3B1ZXN0YSBkZWwgdXN1YXJpbyBhIEF8QnxDfERcbiAgICAgIGNvbnN0IG5vcm1hbGl6ZWQgPSBub3JtYWxpemVBbnN3ZXIodXNlckFuc3dlciwgcXVlc3Rpb24pO1xuICAgICAgaWYgKCFub3JtYWxpemVkKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgdXNlckFuc3dlciAobXVzdCBiZSBBLCBCLCBDIG9yIEQsIDEuLjQsIG9wdGlvbl9hLi5kLCBvIHRleHRvIGV4YWN0bylcIik7XG4gICAgICB9XG5cbiAgICAgIC8vIDMpIENhbGN1bGFyIGNvcnJlY3RvIHkgcHVudG9zXG4gICAgICBjb25zdCBzYWZlVGltZSA9IE1hdGgubWF4KDAsIE1hdGgubWluKDMwMCwgTWF0aC5mbG9vcihOdW1iZXIodGltZVRha2VuKSB8fCAwKSkpO1xuICAgICAgY29uc3QgaXNDb3JyZWN0ID0gbm9ybWFsaXplZCA9PT0gcXVlc3Rpb24uY29ycmVjdF9hbnN3ZXI7XG4gICAgICBjb25zdCBwb2ludHNFYXJuZWQgPSBjYWxjdWxhdGVQb2ludHMoaXNDb3JyZWN0LCBOdW1iZXIocXVlc3Rpb24uZGlmZmljdWx0eSB8fCAxKSwgc2FmZVRpbWUpO1xuXG4gICAgICAvLyA0KSBJbnNlcnRhciBjdW1wbGllbmRvIENIRUNLc1xuICAgICAgYXdhaXQgY29ubmVjdGlvbi5leGVjdXRlKFxuICAgICAgICBgSU5TRVJUIElOVE8gdXNlcl9hbnN3ZXJzXG4gICAgICAgICAgKHNlc3Npb25faWQsIHF1ZXN0aW9uX2lkLCB1c2VyX2Fuc3dlciwgaXNfY29ycmVjdCwgcG9pbnRzX2Vhcm5lZCwgdGltZV90YWtlbilcbiAgICAgICAgIFZBTFVFUyAoPywgPywgPywgPywgPywgPylgLFxuICAgICAgICBbc2Vzc2lvbklkLCBxdWVzdGlvbklkLCBub3JtYWxpemVkLCBpc0NvcnJlY3QgPyAxIDogMCwgcG9pbnRzRWFybmVkLCBzYWZlVGltZV1cbiAgICAgICk7XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIGlzQ29ycmVjdCxcbiAgICAgICAgY29ycmVjdEFuc3dlcjogcXVlc3Rpb24uY29ycmVjdF9hbnN3ZXIsXG4gICAgICAgIGV4cGxhbmF0aW9uOiBxdWVzdGlvbi5leHBsYW5hdGlvbixcbiAgICAgICAgcG9pbnRzRWFybmVkLFxuICAgICAgfTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgY29ubmVjdGlvbi5yZWxlYXNlKCk7XG4gICAgfVxuICB9LFxuXG4gIGFzeW5jIGNvbXBsZXRlR2FtZShzZXNzaW9uSWQ6IG51bWJlcikge1xuICAgIGNvbnN0IGNvbm5lY3Rpb24gPSBhd2FpdCBwb29sLmdldENvbm5lY3Rpb24oKTtcbiAgICB0cnkge1xuICAgICAgY29uc3QgW2Fuc3dlclN0YXRzXSA9IGF3YWl0IGNvbm5lY3Rpb24uZXhlY3V0ZTxSb3dEYXRhUGFja2V0W10+KFxuICAgICAgICBgU0VMRUNUIFxuICAgICAgICAgIENPVU5UKCopIGFzIHRvdGFsX3F1ZXN0aW9ucyxcbiAgICAgICAgICBTVU0oQ0FTRSBXSEVOIGlzX2NvcnJlY3QgVEhFTiAxIEVMU0UgMCBFTkQpIGFzIGNvcnJlY3RfYW5zd2VycyxcbiAgICAgICAgICBTVU0ocG9pbnRzX2Vhcm5lZCkgYXMgdG90YWxfc2NvcmUsXG4gICAgICAgICAgU1VNKHRpbWVfdGFrZW4pIGFzIHRvdGFsX3RpbWVcbiAgICAgICAgIEZST00gdXNlcl9hbnN3ZXJzIFdIRVJFIHNlc3Npb25faWQgPSA/YCxcbiAgICAgICAgW3Nlc3Npb25JZF0sXG4gICAgICApO1xuXG4gICAgICBjb25zdCBzdGF0czogYW55ID0gKGFuc3dlclN0YXRzIGFzIGFueVtdKVswXTtcblxuICAgICAgYXdhaXQgY29ubmVjdGlvbi5leGVjdXRlKFxuICAgICAgICBgVVBEQVRFIGdhbWVfc2Vzc2lvbnNcbiAgICAgICAgIFNFVCB0b3RhbF9xdWVzdGlvbnMgPSA/LCBjb3JyZWN0X2Fuc3dlcnMgPSA/LCB0b3RhbF9zY29yZSA9ID8sIHRpbWVfdGFrZW4gPSA/LCBjb21wbGV0ZWRfYXQgPSBOT1coKVxuICAgICAgICAgV0hFUkUgaWQgPSA/YCxcbiAgICAgICAgW3N0YXRzLnRvdGFsX3F1ZXN0aW9ucywgc3RhdHMuY29ycmVjdF9hbnN3ZXJzLCBzdGF0cy50b3RhbF9zY29yZSwgc3RhdHMudG90YWxfdGltZSwgc2Vzc2lvbklkXSxcbiAgICAgICk7XG5cbiAgICAgIGNvbnN0IFtzZXNzaW9uUm93c10gPSBhd2FpdCBjb25uZWN0aW9uLmV4ZWN1dGU8Um93RGF0YVBhY2tldFtdPihcbiAgICAgICAgXCJTRUxFQ1QgKiBGUk9NIGdhbWVfc2Vzc2lvbnMgV0hFUkUgaWQgPSA/XCIsXG4gICAgICAgIFtzZXNzaW9uSWRdXG4gICAgICApO1xuICAgICAgcmV0dXJuIHsgc2Vzc2lvbjogKHNlc3Npb25Sb3dzIGFzIGFueVtdKVswXSB9O1xuICAgIH0gZmluYWxseSB7XG4gICAgICBjb25uZWN0aW9uLnJlbGVhc2UoKTtcbiAgICB9XG4gIH0sXG5cbiAgYXN5bmMgZ2V0Q2F0ZWdvcmllcygpIHtcbiAgICBjb25zdCBjb25uZWN0aW9uID0gYXdhaXQgcG9vbC5nZXRDb25uZWN0aW9uKCk7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IFtyb3dzXSA9IGF3YWl0IGNvbm5lY3Rpb24uZXhlY3V0ZTxSb3dEYXRhUGFja2V0W10+KFxuICAgICAgICBcIlNFTEVDVCBpZCwgbmFtZSwgY29sb3IsIGRlc2NyaXB0aW9uIEZST00gY2F0ZWdvcmllcyBPUkRFUiBCWSBuYW1lXCJcbiAgICAgICk7XG4gICAgICByZXR1cm4gcm93cyBhcyBhbnlbXTsgLy8gc2llbXByZSBhcnJheVxuICAgIH0gZmluYWxseSB7XG4gICAgICBjb25uZWN0aW9uLnJlbGVhc2UoKTtcbiAgICB9XG4gIH0sXG5cbiAgYXN5bmMgZ2V0VXNlclN0YXRzKHVzZXJJZDogbnVtYmVyKSB7XG4gICAgY29uc3QgY29ubmVjdGlvbiA9IGF3YWl0IHBvb2wuZ2V0Q29ubmVjdGlvbigpO1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBbcm93c10gPSBhd2FpdCBjb25uZWN0aW9uLmV4ZWN1dGU8Um93RGF0YVBhY2tldFtdPihcbiAgICAgICAgYFNFTEVDVCBcbiAgICAgICAgICB0b3RhbF9zY29yZSxcbiAgICAgICAgICBnYW1lc19wbGF5ZWQsXG4gICAgICAgICAgY29ycmVjdF9hbnN3ZXJzLFxuICAgICAgICAgIHRvdGFsX3F1ZXN0aW9ucyxcbiAgICAgICAgICBDQVNFIFxuICAgICAgICAgICAgV0hFTiB0b3RhbF9xdWVzdGlvbnMgPiAwIFRIRU4gUk9VTkQoKGNvcnJlY3RfYW5zd2VycyAvIHRvdGFsX3F1ZXN0aW9ucykgKiAxMDAsIDIpXG4gICAgICAgICAgICBFTFNFIDAgXG4gICAgICAgICAgRU5EIGFzIGFjY3VyYWN5XG4gICAgICAgICBGUk9NIHVzZXJzIFxuICAgICAgICAgV0hFUkUgaWQgPSA/YCxcbiAgICAgICAgW3VzZXJJZF0sXG4gICAgICApO1xuXG4gICAgICByZXR1cm4gKFxuICAgICAgICAocm93cyBhcyBhbnlbXSlbMF0gPz9cbiAgICAgICAgeyB0b3RhbF9zY29yZTogMCwgZ2FtZXNfcGxheWVkOiAwLCBjb3JyZWN0X2Fuc3dlcnM6IDAsIHRvdGFsX3F1ZXN0aW9uczogMCwgYWNjdXJhY3k6IDAgfVxuICAgICAgKTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgY29ubmVjdGlvbi5yZWxlYXNlKCk7XG4gICAgfVxuICB9LFxuXG4gIGFzeW5jIGdldExlYWRlcmJvYXJkKGxpbWl0ID0gMTApIHtcbiAgICBjb25zdCBjb25uZWN0aW9uID0gYXdhaXQgcG9vbC5nZXRDb25uZWN0aW9uKCk7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IFtyb3dzXSA9IGF3YWl0IGNvbm5lY3Rpb24uZXhlY3V0ZTxSb3dEYXRhUGFja2V0W10+KFxuICAgICAgICBgU0VMRUNUIFxuICAgICAgICAgIEByYW5rIDo9IEByYW5rICsgMSBhcyByYW5rLFxuICAgICAgICAgIGRpc3BsYXlfbmFtZSxcbiAgICAgICAgICBlbWFpbCxcbiAgICAgICAgICB0b3RhbF9zY29yZSxcbiAgICAgICAgICBnYW1lc19wbGF5ZWQsXG4gICAgICAgICAgQ0FTRSBcbiAgICAgICAgICAgIFdIRU4gdG90YWxfcXVlc3Rpb25zID4gMCBUSEVOIFJPVU5EKChjb3JyZWN0X2Fuc3dlcnMgLyB0b3RhbF9xdWVzdGlvbnMpICogMTAwLCAyKVxuICAgICAgICAgICAgRUxTRSAwIFxuICAgICAgICAgIEVORCBhcyBhY2N1cmFjeVxuICAgICAgICAgRlJPTSB1c2VycywgKFNFTEVDVCBAcmFuayA6PSAwKSByXG4gICAgICAgICBXSEVSRSBnYW1lc19wbGF5ZWQgPiAwXG4gICAgICAgICBPUkRFUiBCWSB0b3RhbF9zY29yZSBERVNDLCBnYW1lc19wbGF5ZWQgREVTQ1xuICAgICAgICAgTElNSVQgP2AsXG4gICAgICAgIFtsaW1pdF0sXG4gICAgICApO1xuICAgICAgcmV0dXJuIHJvd3M7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIGNvbm5lY3Rpb24ucmVsZWFzZSgpO1xuICAgIH1cbiAgfSxcbn07XG4iXSwibmFtZXMiOlsicG9vbCIsImNsZWFuIiwicyIsIlN0cmluZyIsInRyaW0iLCJ0b0xvd2VyQ2FzZSIsIm5vcm1hbGl6ZUFuc3dlciIsImlucHV0IiwicXVlc3Rpb24iLCJyYXciLCJ0ZXN0IiwiYSIsIm9wdGlvbl9hIiwiYiIsIm9wdGlvbl9iIiwiYyIsIm9wdGlvbl9jIiwiZCIsIm9wdGlvbl9kIiwibm9ybSIsIngiLCJyZXBsYWNlIiwiY2FsY3VsYXRlUG9pbnRzIiwiaXNDb3JyZWN0IiwiZGlmZmljdWx0eSIsInRpbWVUYWtlbiIsImJhc2UiLCJNYXRoIiwibWF4IiwiTnVtYmVyIiwidCIsIm1pbiIsImZsb29yIiwiYm9udXMiLCJnYW1lRW5naW5lIiwic3RhcnRHYW1lIiwidXNlcklkIiwiY2F0ZWdvcnlJZCIsImNvbm5lY3Rpb24iLCJnZXRDb25uZWN0aW9uIiwiYmVnaW5UcmFuc2FjdGlvbiIsInNlc3Npb25SZXN1bHQiLCJleGVjdXRlIiwic2Vzc2lvbklkIiwiaW5zZXJ0SWQiLCJxdWVzdGlvbnNRdWVyeSIsInF1ZXN0aW9ucyIsImNvbW1pdCIsInNlc3Npb24iLCJpZCIsImVycm9yIiwicm9sbGJhY2siLCJyZWxlYXNlIiwic3VibWl0QW5zd2VyIiwicXVlc3Rpb25JZCIsInVzZXJBbnN3ZXIiLCJxdWVzdGlvblJvd3MiLCJFcnJvciIsIm5vcm1hbGl6ZWQiLCJzYWZlVGltZSIsImNvcnJlY3RfYW5zd2VyIiwicG9pbnRzRWFybmVkIiwiY29ycmVjdEFuc3dlciIsImV4cGxhbmF0aW9uIiwiY29tcGxldGVHYW1lIiwiYW5zd2VyU3RhdHMiLCJzdGF0cyIsInRvdGFsX3F1ZXN0aW9ucyIsImNvcnJlY3RfYW5zd2VycyIsInRvdGFsX3Njb3JlIiwidG90YWxfdGltZSIsInNlc3Npb25Sb3dzIiwiZ2V0Q2F0ZWdvcmllcyIsInJvd3MiLCJnZXRVc2VyU3RhdHMiLCJnYW1lc19wbGF5ZWQiLCJhY2N1cmFjeSIsImdldExlYWRlcmJvYXJkIiwibGltaXQiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./lib/game-engine.ts\n");

/***/ }),

/***/ "(rsc)/./node_modules/mysql2/lib sync recursive ^cardinal.*$":
/*!****************************************************!*\
  !*** ./node_modules/mysql2/lib/ sync ^cardinal.*$ ***!
  \****************************************************/
/***/ ((module) => {

function webpackEmptyContext(req) {
	var e = new Error("Cannot find module '" + req + "'");
	e.code = 'MODULE_NOT_FOUND';
	throw e;
}
webpackEmptyContext.keys = () => ([]);
webpackEmptyContext.resolve = webpackEmptyContext;
webpackEmptyContext.id = "(rsc)/./node_modules/mysql2/lib sync recursive ^cardinal.*$";
module.exports = webpackEmptyContext;

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fcategories%2Froute&page=%2Fapi%2Fcategories%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fcategories%2Froute.ts&appDir=C%3A%5CUsers%5Ceduar%5CDocuments%5CREACT_COURSE%5Ceducational-game%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Ceduar%5CDocuments%5CREACT_COURSE%5Ceducational-game&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fcategories%2Froute&page=%2Fapi%2Fcategories%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fcategories%2Froute.ts&appDir=C%3A%5CUsers%5Ceduar%5CDocuments%5CREACT_COURSE%5Ceducational-game%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Ceduar%5CDocuments%5CREACT_COURSE%5Ceducational-game&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var C_Users_eduar_Documents_REACT_COURSE_educational_game_app_api_categories_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/categories/route.ts */ \"(rsc)/./app/api/categories/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/categories/route\",\n        pathname: \"/api/categories\",\n        filename: \"route\",\n        bundlePath: \"app/api/categories/route\"\n    },\n    resolvedPagePath: \"C:\\\\Users\\\\eduar\\\\Documents\\\\REACT_COURSE\\\\educational-game\\\\app\\\\api\\\\categories\\\\route.ts\",\n    nextConfigOutput,\n    userland: C_Users_eduar_Documents_REACT_COURSE_educational_game_app_api_categories_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkZjYXRlZ29yaWVzJTJGcm91dGUmcGFnZT0lMkZhcGklMkZjYXRlZ29yaWVzJTJGcm91dGUmYXBwUGF0aHM9JnBhZ2VQYXRoPXByaXZhdGUtbmV4dC1hcHAtZGlyJTJGYXBpJTJGY2F0ZWdvcmllcyUyRnJvdXRlLnRzJmFwcERpcj1DJTNBJTVDVXNlcnMlNUNlZHVhciU1Q0RvY3VtZW50cyU1Q1JFQUNUX0NPVVJTRSU1Q2VkdWNhdGlvbmFsLWdhbWUlNUNhcHAmcGFnZUV4dGVuc2lvbnM9dHN4JnBhZ2VFeHRlbnNpb25zPXRzJnBhZ2VFeHRlbnNpb25zPWpzeCZwYWdlRXh0ZW5zaW9ucz1qcyZyb290RGlyPUMlM0ElNUNVc2VycyU1Q2VkdWFyJTVDRG9jdW1lbnRzJTVDUkVBQ1RfQ09VUlNFJTVDZWR1Y2F0aW9uYWwtZ2FtZSZpc0Rldj10cnVlJnRzY29uZmlnUGF0aD10c2NvbmZpZy5qc29uJmJhc2VQYXRoPSZhc3NldFByZWZpeD0mbmV4dENvbmZpZ091dHB1dD0mcHJlZmVycmVkUmVnaW9uPSZtaWRkbGV3YXJlQ29uZmlnPWUzMCUzRCEiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBK0Y7QUFDdkM7QUFDcUI7QUFDMkM7QUFDeEg7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLHlHQUFtQjtBQUMzQztBQUNBLGNBQWMsa0VBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLFlBQVk7QUFDWixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsUUFBUSxzREFBc0Q7QUFDOUQ7QUFDQSxXQUFXLDRFQUFXO0FBQ3RCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDMEY7O0FBRTFGIiwic291cmNlcyI6WyIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBwUm91dGVSb3V0ZU1vZHVsZSB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL3JvdXRlLW1vZHVsZXMvYXBwLXJvdXRlL21vZHVsZS5jb21waWxlZFwiO1xuaW1wb3J0IHsgUm91dGVLaW5kIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvcm91dGUta2luZFwiO1xuaW1wb3J0IHsgcGF0Y2hGZXRjaCBhcyBfcGF0Y2hGZXRjaCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2xpYi9wYXRjaC1mZXRjaFwiO1xuaW1wb3J0ICogYXMgdXNlcmxhbmQgZnJvbSBcIkM6XFxcXFVzZXJzXFxcXGVkdWFyXFxcXERvY3VtZW50c1xcXFxSRUFDVF9DT1VSU0VcXFxcZWR1Y2F0aW9uYWwtZ2FtZVxcXFxhcHBcXFxcYXBpXFxcXGNhdGVnb3JpZXNcXFxccm91dGUudHNcIjtcbi8vIFdlIGluamVjdCB0aGUgbmV4dENvbmZpZ091dHB1dCBoZXJlIHNvIHRoYXQgd2UgY2FuIHVzZSB0aGVtIGluIHRoZSByb3V0ZVxuLy8gbW9kdWxlLlxuY29uc3QgbmV4dENvbmZpZ091dHB1dCA9IFwiXCJcbmNvbnN0IHJvdXRlTW9kdWxlID0gbmV3IEFwcFJvdXRlUm91dGVNb2R1bGUoe1xuICAgIGRlZmluaXRpb246IHtcbiAgICAgICAga2luZDogUm91dGVLaW5kLkFQUF9ST1VURSxcbiAgICAgICAgcGFnZTogXCIvYXBpL2NhdGVnb3JpZXMvcm91dGVcIixcbiAgICAgICAgcGF0aG5hbWU6IFwiL2FwaS9jYXRlZ29yaWVzXCIsXG4gICAgICAgIGZpbGVuYW1lOiBcInJvdXRlXCIsXG4gICAgICAgIGJ1bmRsZVBhdGg6IFwiYXBwL2FwaS9jYXRlZ29yaWVzL3JvdXRlXCJcbiAgICB9LFxuICAgIHJlc29sdmVkUGFnZVBhdGg6IFwiQzpcXFxcVXNlcnNcXFxcZWR1YXJcXFxcRG9jdW1lbnRzXFxcXFJFQUNUX0NPVVJTRVxcXFxlZHVjYXRpb25hbC1nYW1lXFxcXGFwcFxcXFxhcGlcXFxcY2F0ZWdvcmllc1xcXFxyb3V0ZS50c1wiLFxuICAgIG5leHRDb25maWdPdXRwdXQsXG4gICAgdXNlcmxhbmRcbn0pO1xuLy8gUHVsbCBvdXQgdGhlIGV4cG9ydHMgdGhhdCB3ZSBuZWVkIHRvIGV4cG9zZSBmcm9tIHRoZSBtb2R1bGUuIFRoaXMgc2hvdWxkXG4vLyBiZSBlbGltaW5hdGVkIHdoZW4gd2UndmUgbW92ZWQgdGhlIG90aGVyIHJvdXRlcyB0byB0aGUgbmV3IGZvcm1hdC4gVGhlc2Vcbi8vIGFyZSB1c2VkIHRvIGhvb2sgaW50byB0aGUgcm91dGUuXG5jb25zdCB7IHdvcmtBc3luY1N0b3JhZ2UsIHdvcmtVbml0QXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcyB9ID0gcm91dGVNb2R1bGU7XG5mdW5jdGlvbiBwYXRjaEZldGNoKCkge1xuICAgIHJldHVybiBfcGF0Y2hGZXRjaCh7XG4gICAgICAgIHdvcmtBc3luY1N0b3JhZ2UsXG4gICAgICAgIHdvcmtVbml0QXN5bmNTdG9yYWdlXG4gICAgfSk7XG59XG5leHBvcnQgeyByb3V0ZU1vZHVsZSwgd29ya0FzeW5jU3RvcmFnZSwgd29ya1VuaXRBc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBwYXRjaEZldGNoLCAgfTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBwLXJvdXRlLmpzLm1hcCJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fcategories%2Froute&page=%2Fapi%2Fcategories%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fcategories%2Froute.ts&appDir=C%3A%5CUsers%5Ceduar%5CDocuments%5CREACT_COURSE%5Ceducational-game%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Ceduar%5CDocuments%5CREACT_COURSE%5Ceducational-game&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "(ssr)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "../app-render/after-task-async-storage.external":
/*!***********************************************************************************!*\
  !*** external "next/dist/server/app-render/after-task-async-storage.external.js" ***!
  \***********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/after-task-async-storage.external.js");

/***/ }),

/***/ "../app-render/work-async-storage.external":
/*!*****************************************************************************!*\
  !*** external "next/dist/server/app-render/work-async-storage.external.js" ***!
  \*****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-async-storage.external.js");

/***/ }),

/***/ "./work-unit-async-storage.external":
/*!**********************************************************************************!*\
  !*** external "next/dist/server/app-render/work-unit-async-storage.external.js" ***!
  \**********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-unit-async-storage.external.js");

/***/ }),

/***/ "buffer":
/*!*************************!*\
  !*** external "buffer" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("buffer");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("crypto");

/***/ }),

/***/ "events":
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("events");

/***/ }),

/***/ "net":
/*!**********************!*\
  !*** external "net" ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = require("net");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "process":
/*!**************************!*\
  !*** external "process" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = require("process");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("stream");

/***/ }),

/***/ "string_decoder":
/*!*********************************!*\
  !*** external "string_decoder" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = require("string_decoder");

/***/ }),

/***/ "timers":
/*!*************************!*\
  !*** external "timers" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("timers");

/***/ }),

/***/ "tls":
/*!**********************!*\
  !*** external "tls" ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = require("tls");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = require("url");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("util");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("zlib");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/mysql2","vendor-chunks/aws-ssl-profiles","vendor-chunks/iconv-lite","vendor-chunks/long","vendor-chunks/lru-cache","vendor-chunks/denque","vendor-chunks/is-property","vendor-chunks/lru.min","vendor-chunks/sqlstring","vendor-chunks/seq-queue","vendor-chunks/named-placeholders","vendor-chunks/generate-function","vendor-chunks/safer-buffer"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fcategories%2Froute&page=%2Fapi%2Fcategories%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fcategories%2Froute.ts&appDir=C%3A%5CUsers%5Ceduar%5CDocuments%5CREACT_COURSE%5Ceducational-game%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Ceduar%5CDocuments%5CREACT_COURSE%5Ceducational-game&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();