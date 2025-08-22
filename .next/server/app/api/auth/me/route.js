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
exports.id = "app/api/auth/me/route";
exports.ids = ["app/api/auth/me/route"];
exports.modules = {

/***/ "(rsc)/./app/api/auth/me/route.ts":
/*!**********************************!*\
  !*** ./app/api/auth/me/route.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var _lib_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/lib/auth */ \"(rsc)/./lib/auth.ts\");\n\n\nasync function GET(request) {\n    try {\n        const token = request.cookies.get(\"auth-token\")?.value;\n        if (!token) {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                error: \"No autenticado\"\n            }, {\n                status: 401\n            });\n        }\n        const payload = (0,_lib_auth__WEBPACK_IMPORTED_MODULE_1__.verifyToken)(token);\n        if (!payload) {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                error: \"Token inválido\"\n            }, {\n                status: 401\n            });\n        }\n        const user = await (0,_lib_auth__WEBPACK_IMPORTED_MODULE_1__.getUserById)(payload.userId);\n        if (!user) {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                error: \"Usuario no encontrado\"\n            }, {\n                status: 404\n            });\n        }\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            user\n        });\n    } catch (error) {\n        console.error(\"Auth check error:\", error);\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: \"Error interno del servidor\"\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL2F1dGgvbWUvcm91dGUudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQTREO0FBQ1A7QUFFOUMsZUFBZUcsSUFBSUMsT0FBb0I7SUFDNUMsSUFBSTtRQUNGLE1BQU1DLFFBQVFELFFBQVFFLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLGVBQWVDO1FBRWpELElBQUksQ0FBQ0gsT0FBTztZQUNWLE9BQU9MLHFEQUFZQSxDQUFDUyxJQUFJLENBQUM7Z0JBQUVDLE9BQU87WUFBaUIsR0FBRztnQkFBRUMsUUFBUTtZQUFJO1FBQ3RFO1FBRUEsTUFBTUMsVUFBVVgsc0RBQVdBLENBQUNJO1FBQzVCLElBQUksQ0FBQ08sU0FBUztZQUNaLE9BQU9aLHFEQUFZQSxDQUFDUyxJQUFJLENBQUM7Z0JBQUVDLE9BQU87WUFBaUIsR0FBRztnQkFBRUMsUUFBUTtZQUFJO1FBQ3RFO1FBRUEsTUFBTUUsT0FBTyxNQUFNWCxzREFBV0EsQ0FBQ1UsUUFBUUUsTUFBTTtRQUM3QyxJQUFJLENBQUNELE1BQU07WUFDVCxPQUFPYixxREFBWUEsQ0FBQ1MsSUFBSSxDQUFDO2dCQUFFQyxPQUFPO1lBQXdCLEdBQUc7Z0JBQUVDLFFBQVE7WUFBSTtRQUM3RTtRQUVBLE9BQU9YLHFEQUFZQSxDQUFDUyxJQUFJLENBQUM7WUFBRUk7UUFBSztJQUNsQyxFQUFFLE9BQU9ILE9BQU87UUFDZEssUUFBUUwsS0FBSyxDQUFDLHFCQUFxQkE7UUFDbkMsT0FBT1YscURBQVlBLENBQUNTLElBQUksQ0FBQztZQUFFQyxPQUFPO1FBQTZCLEdBQUc7WUFBRUMsUUFBUTtRQUFJO0lBQ2xGO0FBQ0YiLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcZWR1YXJcXERvY3VtZW50c1xcUkVBQ1RfQ09VUlNFXFxlZHVjYXRpb25hbC1nYW1lXFxhcHBcXGFwaVxcYXV0aFxcbWVcXHJvdXRlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHR5cGUgTmV4dFJlcXVlc3QsIE5leHRSZXNwb25zZSB9IGZyb20gXCJuZXh0L3NlcnZlclwiXG5pbXBvcnQgeyB2ZXJpZnlUb2tlbiwgZ2V0VXNlckJ5SWQgfSBmcm9tIFwiQC9saWIvYXV0aFwiXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBHRVQocmVxdWVzdDogTmV4dFJlcXVlc3QpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCB0b2tlbiA9IHJlcXVlc3QuY29va2llcy5nZXQoXCJhdXRoLXRva2VuXCIpPy52YWx1ZVxuXG4gICAgaWYgKCF0b2tlbikge1xuICAgICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgZXJyb3I6IFwiTm8gYXV0ZW50aWNhZG9cIiB9LCB7IHN0YXR1czogNDAxIH0pXG4gICAgfVxuXG4gICAgY29uc3QgcGF5bG9hZCA9IHZlcmlmeVRva2VuKHRva2VuKVxuICAgIGlmICghcGF5bG9hZCkge1xuICAgICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgZXJyb3I6IFwiVG9rZW4gaW52w6FsaWRvXCIgfSwgeyBzdGF0dXM6IDQwMSB9KVxuICAgIH1cblxuICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBnZXRVc2VyQnlJZChwYXlsb2FkLnVzZXJJZClcbiAgICBpZiAoIXVzZXIpIHtcbiAgICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IGVycm9yOiBcIlVzdWFyaW8gbm8gZW5jb250cmFkb1wiIH0sIHsgc3RhdHVzOiA0MDQgfSlcbiAgICB9XG5cbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyB1c2VyIH0pXG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihcIkF1dGggY2hlY2sgZXJyb3I6XCIsIGVycm9yKVxuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IGVycm9yOiBcIkVycm9yIGludGVybm8gZGVsIHNlcnZpZG9yXCIgfSwgeyBzdGF0dXM6IDUwMCB9KVxuICB9XG59XG4iXSwibmFtZXMiOlsiTmV4dFJlc3BvbnNlIiwidmVyaWZ5VG9rZW4iLCJnZXRVc2VyQnlJZCIsIkdFVCIsInJlcXVlc3QiLCJ0b2tlbiIsImNvb2tpZXMiLCJnZXQiLCJ2YWx1ZSIsImpzb24iLCJlcnJvciIsInN0YXR1cyIsInBheWxvYWQiLCJ1c2VyIiwidXNlcklkIiwiY29uc29sZSJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./app/api/auth/me/route.ts\n");

/***/ }),

/***/ "(rsc)/./lib/auth.ts":
/*!*********************!*\
  !*** ./lib/auth.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   authenticateUser: () => (/* binding */ authenticateUser),\n/* harmony export */   createUser: () => (/* binding */ createUser),\n/* harmony export */   generateToken: () => (/* binding */ generateToken),\n/* harmony export */   getUserById: () => (/* binding */ getUserById),\n/* harmony export */   hashPassword: () => (/* binding */ hashPassword),\n/* harmony export */   verifyPassword: () => (/* binding */ verifyPassword),\n/* harmony export */   verifyToken: () => (/* binding */ verifyToken)\n/* harmony export */ });\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bcryptjs */ \"(rsc)/./node_modules/bcryptjs/index.js\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jsonwebtoken */ \"(rsc)/./node_modules/jsonwebtoken/index.js\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./database */ \"(rsc)/./lib/database.ts\");\n\n\n\nconst JWT_SECRET = process.env.JWT_SECRET || \"your-secret-key-change-in-production\";\nasync function hashPassword(password) {\n    return bcryptjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"].hash(password, 12);\n}\nasync function verifyPassword(password, hashedPassword) {\n    return bcryptjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"].compare(password, hashedPassword);\n}\nfunction generateToken(userId) {\n    return jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default().sign({\n        userId\n    }, JWT_SECRET, {\n        expiresIn: \"7d\"\n    });\n}\nfunction verifyToken(token) {\n    try {\n        return jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default().verify(token, JWT_SECRET);\n    } catch  {\n        return null;\n    }\n}\nasync function createUser(email, password, displayName) {\n    const hashedPassword = await hashPassword(password);\n    const [result] = await _database__WEBPACK_IMPORTED_MODULE_2__.pool.execute(`INSERT INTO users (email, password_hash, display_name) \n     VALUES (?, ?, ?)`, [\n        email,\n        hashedPassword,\n        displayName\n    ]);\n    const [newUser] = await _database__WEBPACK_IMPORTED_MODULE_2__.pool.execute(`SELECT id, email, display_name, total_score, games_played, correct_answers, total_questions, created_at, updated_at \n     FROM users WHERE id = ?`, [\n        result.insertId\n    ]);\n    return newUser[0];\n}\nasync function authenticateUser(email, password) {\n    const [result] = await _database__WEBPACK_IMPORTED_MODULE_2__.pool.execute(\"SELECT * FROM users WHERE email = ?\", [\n        email\n    ]);\n    if (result.length === 0) {\n        return null;\n    }\n    const user = result[0];\n    const isValid = await verifyPassword(password, user.password_hash);\n    if (!isValid) {\n        return null;\n    }\n    // Remove password_hash from returned user\n    const { password_hash, ...userWithoutPassword } = user;\n    return userWithoutPassword;\n}\nasync function getUserById(id) {\n    const [result] = await _database__WEBPACK_IMPORTED_MODULE_2__.pool.execute(\"SELECT id, email, display_name, total_score, games_played, correct_answers, total_questions, created_at, updated_at FROM users WHERE id = ?\", [\n        id\n    ]);\n    return result[0] || null;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9saWIvYXV0aC50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUE2QjtBQUNDO0FBQ0c7QUFHakMsTUFBTUcsYUFBYUMsUUFBUUMsR0FBRyxDQUFDRixVQUFVLElBQUk7QUFFdEMsZUFBZUcsYUFBYUMsUUFBZ0I7SUFDakQsT0FBT1AscURBQVcsQ0FBQ08sVUFBVTtBQUMvQjtBQUVPLGVBQWVFLGVBQWVGLFFBQWdCLEVBQUVHLGNBQXNCO0lBQzNFLE9BQU9WLHdEQUFjLENBQUNPLFVBQVVHO0FBQ2xDO0FBRU8sU0FBU0UsY0FBY0MsTUFBYztJQUMxQyxPQUFPWix3REFBUSxDQUFDO1FBQUVZO0lBQU8sR0FBR1YsWUFBWTtRQUFFWSxXQUFXO0lBQUs7QUFDNUQ7QUFFTyxTQUFTQyxZQUFZQyxLQUFhO0lBQ3ZDLElBQUk7UUFDRixPQUFPaEIsMERBQVUsQ0FBQ2dCLE9BQU9kO0lBQzNCLEVBQUUsT0FBTTtRQUNOLE9BQU87SUFDVDtBQUNGO0FBRU8sZUFBZWdCLFdBQVdDLEtBQWEsRUFBRWIsUUFBZ0IsRUFBRWMsV0FBb0I7SUFDcEYsTUFBTVgsaUJBQWlCLE1BQU1KLGFBQWFDO0lBRTFDLE1BQU0sQ0FBQ2UsT0FBTyxHQUFJLE1BQU1wQiwyQ0FBSUEsQ0FBQ3FCLE9BQU8sQ0FDbEMsQ0FBQztxQkFDZ0IsQ0FBQyxFQUNsQjtRQUFDSDtRQUFPVjtRQUFnQlc7S0FBWTtJQUd0QyxNQUFNLENBQUNHLFFBQVEsR0FBSSxNQUFNdEIsMkNBQUlBLENBQUNxQixPQUFPLENBQ25DLENBQUM7NEJBQ3VCLENBQUMsRUFDekI7UUFBQ0QsT0FBT0csUUFBUTtLQUFDO0lBR25CLE9BQU9ELE9BQU8sQ0FBQyxFQUFFO0FBQ25CO0FBRU8sZUFBZUUsaUJBQWlCTixLQUFhLEVBQUViLFFBQWdCO0lBQ3BFLE1BQU0sQ0FBQ2UsT0FBTyxHQUFJLE1BQU1wQiwyQ0FBSUEsQ0FBQ3FCLE9BQU8sQ0FBQyx1Q0FBdUM7UUFBQ0g7S0FBTTtJQUVuRixJQUFJRSxPQUFPSyxNQUFNLEtBQUssR0FBRztRQUN2QixPQUFPO0lBQ1Q7SUFFQSxNQUFNQyxPQUFPTixNQUFNLENBQUMsRUFBRTtJQUN0QixNQUFNTyxVQUFVLE1BQU1wQixlQUFlRixVQUFVcUIsS0FBS0UsYUFBYTtJQUVqRSxJQUFJLENBQUNELFNBQVM7UUFDWixPQUFPO0lBQ1Q7SUFFQSwwQ0FBMEM7SUFDMUMsTUFBTSxFQUFFQyxhQUFhLEVBQUUsR0FBR0MscUJBQXFCLEdBQUdIO0lBQ2xELE9BQU9HO0FBQ1Q7QUFFTyxlQUFlQyxZQUFZQyxFQUFVO0lBQzFDLE1BQU0sQ0FBQ1gsT0FBTyxHQUFJLE1BQU1wQiwyQ0FBSUEsQ0FBQ3FCLE9BQU8sQ0FDbEMsK0lBQ0E7UUFBQ1U7S0FBRztJQUdOLE9BQU9YLE1BQU0sQ0FBQyxFQUFFLElBQUk7QUFDdEIiLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcZWR1YXJcXERvY3VtZW50c1xcUkVBQ1RfQ09VUlNFXFxlZHVjYXRpb25hbC1nYW1lXFxsaWJcXGF1dGgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGJjcnlwdCBmcm9tIFwiYmNyeXB0anNcIlxuaW1wb3J0IGp3dCBmcm9tIFwianNvbndlYnRva2VuXCJcbmltcG9ydCB7IHBvb2wgfSBmcm9tIFwiLi9kYXRhYmFzZVwiXG5pbXBvcnQgdHlwZSB7IFVzZXIgfSBmcm9tIFwiLi9kYXRhYmFzZVwiXG5cbmNvbnN0IEpXVF9TRUNSRVQgPSBwcm9jZXNzLmVudi5KV1RfU0VDUkVUIHx8IFwieW91ci1zZWNyZXQta2V5LWNoYW5nZS1pbi1wcm9kdWN0aW9uXCJcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGhhc2hQYXNzd29yZChwYXNzd29yZDogc3RyaW5nKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgcmV0dXJuIGJjcnlwdC5oYXNoKHBhc3N3b3JkLCAxMilcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHZlcmlmeVBhc3N3b3JkKHBhc3N3b3JkOiBzdHJpbmcsIGhhc2hlZFBhc3N3b3JkOiBzdHJpbmcpOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgcmV0dXJuIGJjcnlwdC5jb21wYXJlKHBhc3N3b3JkLCBoYXNoZWRQYXNzd29yZClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdlbmVyYXRlVG9rZW4odXNlcklkOiBudW1iZXIpOiBzdHJpbmcge1xuICByZXR1cm4gand0LnNpZ24oeyB1c2VySWQgfSwgSldUX1NFQ1JFVCwgeyBleHBpcmVzSW46IFwiN2RcIiB9KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdmVyaWZ5VG9rZW4odG9rZW46IHN0cmluZyk6IHsgdXNlcklkOiBudW1iZXIgfSB8IG51bGwge1xuICB0cnkge1xuICAgIHJldHVybiBqd3QudmVyaWZ5KHRva2VuLCBKV1RfU0VDUkVUKSBhcyB7IHVzZXJJZDogbnVtYmVyIH1cbiAgfSBjYXRjaCB7XG4gICAgcmV0dXJuIG51bGxcbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlVXNlcihlbWFpbDogc3RyaW5nLCBwYXNzd29yZDogc3RyaW5nLCBkaXNwbGF5TmFtZT86IHN0cmluZyk6IFByb21pc2U8VXNlcj4ge1xuICBjb25zdCBoYXNoZWRQYXNzd29yZCA9IGF3YWl0IGhhc2hQYXNzd29yZChwYXNzd29yZClcblxuICBjb25zdCBbcmVzdWx0XSA9IChhd2FpdCBwb29sLmV4ZWN1dGUoXG4gICAgYElOU0VSVCBJTlRPIHVzZXJzIChlbWFpbCwgcGFzc3dvcmRfaGFzaCwgZGlzcGxheV9uYW1lKSBcbiAgICAgVkFMVUVTICg/LCA/LCA/KWAsXG4gICAgW2VtYWlsLCBoYXNoZWRQYXNzd29yZCwgZGlzcGxheU5hbWVdLFxuICApKSBhcyBhbnlcblxuICBjb25zdCBbbmV3VXNlcl0gPSAoYXdhaXQgcG9vbC5leGVjdXRlKFxuICAgIGBTRUxFQ1QgaWQsIGVtYWlsLCBkaXNwbGF5X25hbWUsIHRvdGFsX3Njb3JlLCBnYW1lc19wbGF5ZWQsIGNvcnJlY3RfYW5zd2VycywgdG90YWxfcXVlc3Rpb25zLCBjcmVhdGVkX2F0LCB1cGRhdGVkX2F0IFxuICAgICBGUk9NIHVzZXJzIFdIRVJFIGlkID0gP2AsXG4gICAgW3Jlc3VsdC5pbnNlcnRJZF0sXG4gICkpIGFzIGFueVxuXG4gIHJldHVybiBuZXdVc2VyWzBdXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBhdXRoZW50aWNhdGVVc2VyKGVtYWlsOiBzdHJpbmcsIHBhc3N3b3JkOiBzdHJpbmcpOiBQcm9taXNlPFVzZXIgfCBudWxsPiB7XG4gIGNvbnN0IFtyZXN1bHRdID0gKGF3YWl0IHBvb2wuZXhlY3V0ZShcIlNFTEVDVCAqIEZST00gdXNlcnMgV0hFUkUgZW1haWwgPSA/XCIsIFtlbWFpbF0pKSBhcyBhbnlcblxuICBpZiAocmVzdWx0Lmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiBudWxsXG4gIH1cblxuICBjb25zdCB1c2VyID0gcmVzdWx0WzBdXG4gIGNvbnN0IGlzVmFsaWQgPSBhd2FpdCB2ZXJpZnlQYXNzd29yZChwYXNzd29yZCwgdXNlci5wYXNzd29yZF9oYXNoKVxuXG4gIGlmICghaXNWYWxpZCkge1xuICAgIHJldHVybiBudWxsXG4gIH1cblxuICAvLyBSZW1vdmUgcGFzc3dvcmRfaGFzaCBmcm9tIHJldHVybmVkIHVzZXJcbiAgY29uc3QgeyBwYXNzd29yZF9oYXNoLCAuLi51c2VyV2l0aG91dFBhc3N3b3JkIH0gPSB1c2VyXG4gIHJldHVybiB1c2VyV2l0aG91dFBhc3N3b3JkXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRVc2VyQnlJZChpZDogbnVtYmVyKTogUHJvbWlzZTxVc2VyIHwgbnVsbD4ge1xuICBjb25zdCBbcmVzdWx0XSA9IChhd2FpdCBwb29sLmV4ZWN1dGUoXG4gICAgXCJTRUxFQ1QgaWQsIGVtYWlsLCBkaXNwbGF5X25hbWUsIHRvdGFsX3Njb3JlLCBnYW1lc19wbGF5ZWQsIGNvcnJlY3RfYW5zd2VycywgdG90YWxfcXVlc3Rpb25zLCBjcmVhdGVkX2F0LCB1cGRhdGVkX2F0IEZST00gdXNlcnMgV0hFUkUgaWQgPSA/XCIsXG4gICAgW2lkXSxcbiAgKSkgYXMgYW55XG5cbiAgcmV0dXJuIHJlc3VsdFswXSB8fCBudWxsXG59XG4iXSwibmFtZXMiOlsiYmNyeXB0Iiwiand0IiwicG9vbCIsIkpXVF9TRUNSRVQiLCJwcm9jZXNzIiwiZW52IiwiaGFzaFBhc3N3b3JkIiwicGFzc3dvcmQiLCJoYXNoIiwidmVyaWZ5UGFzc3dvcmQiLCJoYXNoZWRQYXNzd29yZCIsImNvbXBhcmUiLCJnZW5lcmF0ZVRva2VuIiwidXNlcklkIiwic2lnbiIsImV4cGlyZXNJbiIsInZlcmlmeVRva2VuIiwidG9rZW4iLCJ2ZXJpZnkiLCJjcmVhdGVVc2VyIiwiZW1haWwiLCJkaXNwbGF5TmFtZSIsInJlc3VsdCIsImV4ZWN1dGUiLCJuZXdVc2VyIiwiaW5zZXJ0SWQiLCJhdXRoZW50aWNhdGVVc2VyIiwibGVuZ3RoIiwidXNlciIsImlzVmFsaWQiLCJwYXNzd29yZF9oYXNoIiwidXNlcldpdGhvdXRQYXNzd29yZCIsImdldFVzZXJCeUlkIiwiaWQiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./lib/auth.ts\n");

/***/ }),

/***/ "(rsc)/./lib/database.ts":
/*!*************************!*\
  !*** ./lib/database.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   pool: () => (/* binding */ pool)\n/* harmony export */ });\n/* harmony import */ var mysql2_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mysql2/promise */ \"(rsc)/./node_modules/mysql2/promise.js\");\n\nconst pool = mysql2_promise__WEBPACK_IMPORTED_MODULE_0__.createPool({\n    host: process.env.DB_HOST,\n    user: process.env.DB_USER,\n    password: process.env.DB_PASSWORD,\n    database: process.env.DB_NAME,\n    waitForConnections: true,\n    connectionLimit: 10,\n    queueLimit: 0\n});\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9saWIvZGF0YWJhc2UudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBa0M7QUFFbEMsTUFBTUMsT0FBT0Qsc0RBQWdCLENBQUM7SUFDNUJHLE1BQU1DLFFBQVFDLEdBQUcsQ0FBQ0MsT0FBTztJQUN6QkMsTUFBTUgsUUFBUUMsR0FBRyxDQUFDRyxPQUFPO0lBQ3pCQyxVQUFVTCxRQUFRQyxHQUFHLENBQUNLLFdBQVc7SUFDakNDLFVBQVVQLFFBQVFDLEdBQUcsQ0FBQ08sT0FBTztJQUM3QkMsb0JBQW9CO0lBQ3BCQyxpQkFBaUI7SUFDakJDLFlBQVk7QUFDZDtBQUVlIiwic291cmNlcyI6WyJDOlxcVXNlcnNcXGVkdWFyXFxEb2N1bWVudHNcXFJFQUNUX0NPVVJTRVxcZWR1Y2F0aW9uYWwtZ2FtZVxcbGliXFxkYXRhYmFzZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbXlzcWwgZnJvbSBcIm15c3FsMi9wcm9taXNlXCJcblxuY29uc3QgcG9vbCA9IG15c3FsLmNyZWF0ZVBvb2woe1xuICBob3N0OiBwcm9jZXNzLmVudi5EQl9IT1NULFxuICB1c2VyOiBwcm9jZXNzLmVudi5EQl9VU0VSLFxuICBwYXNzd29yZDogcHJvY2Vzcy5lbnYuREJfUEFTU1dPUkQsXG4gIGRhdGFiYXNlOiBwcm9jZXNzLmVudi5EQl9OQU1FLFxuICB3YWl0Rm9yQ29ubmVjdGlvbnM6IHRydWUsXG4gIGNvbm5lY3Rpb25MaW1pdDogMTAsXG4gIHF1ZXVlTGltaXQ6IDAsXG59KVxuXG5leHBvcnQgeyBwb29sIH1cblxuZXhwb3J0IGludGVyZmFjZSBVc2VyIHtcbiAgaWQ6IG51bWJlclxuICBlbWFpbDogc3RyaW5nXG4gIGRpc3BsYXlfbmFtZT86IHN0cmluZ1xuICB0b3RhbF9zY29yZTogbnVtYmVyXG4gIGdhbWVzX3BsYXllZDogbnVtYmVyXG4gIGNvcnJlY3RfYW5zd2VyczogbnVtYmVyXG4gIHRvdGFsX3F1ZXN0aW9uczogbnVtYmVyXG4gIGNyZWF0ZWRfYXQ6IERhdGVcbiAgdXBkYXRlZF9hdDogRGF0ZVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIENhdGVnb3J5IHtcbiAgaWQ6IG51bWJlclxuICBuYW1lOiBzdHJpbmdcbiAgZGVzY3JpcHRpb24/OiBzdHJpbmdcbiAgaWNvbj86IHN0cmluZ1xuICBjb2xvcj86IHN0cmluZ1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFF1ZXN0aW9uIHtcbiAgaWQ6IG51bWJlclxuICBjYXRlZ29yeV9pZDogbnVtYmVyXG4gIHF1ZXN0aW9uX3RleHQ6IHN0cmluZ1xuICBvcHRpb25fYTogc3RyaW5nXG4gIG9wdGlvbl9iOiBzdHJpbmdcbiAgb3B0aW9uX2M6IHN0cmluZ1xuICBvcHRpb25fZDogc3RyaW5nXG4gIGNvcnJlY3RfYW5zd2VyOiBcIkFcIiB8IFwiQlwiIHwgXCJDXCIgfCBcIkRcIlxuICBkaWZmaWN1bHR5OiBudW1iZXJcbiAgZXhwbGFuYXRpb24/OiBzdHJpbmdcbn1cblxuZXhwb3J0IGludGVyZmFjZSBHYW1lU2Vzc2lvbiB7XG4gIGlkOiBudW1iZXJcbiAgdXNlcl9pZDogbnVtYmVyXG4gIGNhdGVnb3J5X2lkPzogbnVtYmVyXG4gIHRvdGFsX3F1ZXN0aW9uczogbnVtYmVyXG4gIGNvcnJlY3RfYW5zd2VyczogbnVtYmVyXG4gIHRvdGFsX3Njb3JlOiBudW1iZXJcbiAgdGltZV90YWtlbjogbnVtYmVyXG4gIGNvbXBsZXRlZF9hdDogRGF0ZVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIFVzZXJBbnN3ZXIge1xuICBpZDogbnVtYmVyXG4gIHNlc3Npb25faWQ6IG51bWJlclxuICBxdWVzdGlvbl9pZDogbnVtYmVyXG4gIHVzZXJfYW5zd2VyOiBcIkFcIiB8IFwiQlwiIHwgXCJDXCIgfCBcIkRcIlxuICBpc19jb3JyZWN0OiBib29sZWFuXG4gIHRpbWVfdGFrZW46IG51bWJlclxuICBwb2ludHNfZWFybmVkOiBudW1iZXJcbiAgYW5zd2VyZWRfYXQ6IERhdGVcbn1cblxuZXhwb3J0IGludGVyZmFjZSBMZWFkZXJib2FyZEVudHJ5IHtcbiAgcmFuazogbnVtYmVyXG4gIHVzZXJfaWQ6IG51bWJlclxuICBkaXNwbGF5X25hbWU/OiBzdHJpbmdcbiAgZW1haWw6IHN0cmluZ1xuICB0b3RhbF9zY29yZTogbnVtYmVyXG4gIGdhbWVzX3BsYXllZDogbnVtYmVyXG4gIGFjY3VyYWN5OiBudW1iZXJcbn1cbiJdLCJuYW1lcyI6WyJteXNxbCIsInBvb2wiLCJjcmVhdGVQb29sIiwiaG9zdCIsInByb2Nlc3MiLCJlbnYiLCJEQl9IT1NUIiwidXNlciIsIkRCX1VTRVIiLCJwYXNzd29yZCIsIkRCX1BBU1NXT1JEIiwiZGF0YWJhc2UiLCJEQl9OQU1FIiwid2FpdEZvckNvbm5lY3Rpb25zIiwiY29ubmVjdGlvbkxpbWl0IiwicXVldWVMaW1pdCJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./lib/database.ts\n");

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

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fauth%2Fme%2Froute&page=%2Fapi%2Fauth%2Fme%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2Fme%2Froute.ts&appDir=C%3A%5CUsers%5Ceduar%5CDocuments%5CREACT_COURSE%5Ceducational-game%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Ceduar%5CDocuments%5CREACT_COURSE%5Ceducational-game&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fauth%2Fme%2Froute&page=%2Fapi%2Fauth%2Fme%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2Fme%2Froute.ts&appDir=C%3A%5CUsers%5Ceduar%5CDocuments%5CREACT_COURSE%5Ceducational-game%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Ceduar%5CDocuments%5CREACT_COURSE%5Ceducational-game&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var C_Users_eduar_Documents_REACT_COURSE_educational_game_app_api_auth_me_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/auth/me/route.ts */ \"(rsc)/./app/api/auth/me/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/auth/me/route\",\n        pathname: \"/api/auth/me\",\n        filename: \"route\",\n        bundlePath: \"app/api/auth/me/route\"\n    },\n    resolvedPagePath: \"C:\\\\Users\\\\eduar\\\\Documents\\\\REACT_COURSE\\\\educational-game\\\\app\\\\api\\\\auth\\\\me\\\\route.ts\",\n    nextConfigOutput,\n    userland: C_Users_eduar_Documents_REACT_COURSE_educational_game_app_api_auth_me_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkZhdXRoJTJGbWUlMkZyb3V0ZSZwYWdlPSUyRmFwaSUyRmF1dGglMkZtZSUyRnJvdXRlJmFwcFBhdGhzPSZwYWdlUGF0aD1wcml2YXRlLW5leHQtYXBwLWRpciUyRmFwaSUyRmF1dGglMkZtZSUyRnJvdXRlLnRzJmFwcERpcj1DJTNBJTVDVXNlcnMlNUNlZHVhciU1Q0RvY3VtZW50cyU1Q1JFQUNUX0NPVVJTRSU1Q2VkdWNhdGlvbmFsLWdhbWUlNUNhcHAmcGFnZUV4dGVuc2lvbnM9dHN4JnBhZ2VFeHRlbnNpb25zPXRzJnBhZ2VFeHRlbnNpb25zPWpzeCZwYWdlRXh0ZW5zaW9ucz1qcyZyb290RGlyPUMlM0ElNUNVc2VycyU1Q2VkdWFyJTVDRG9jdW1lbnRzJTVDUkVBQ1RfQ09VUlNFJTVDZWR1Y2F0aW9uYWwtZ2FtZSZpc0Rldj10cnVlJnRzY29uZmlnUGF0aD10c2NvbmZpZy5qc29uJmJhc2VQYXRoPSZhc3NldFByZWZpeD0mbmV4dENvbmZpZ091dHB1dD0mcHJlZmVycmVkUmVnaW9uPSZtaWRkbGV3YXJlQ29uZmlnPWUzMCUzRCEiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBK0Y7QUFDdkM7QUFDcUI7QUFDeUM7QUFDdEg7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLHlHQUFtQjtBQUMzQztBQUNBLGNBQWMsa0VBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLFlBQVk7QUFDWixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsUUFBUSxzREFBc0Q7QUFDOUQ7QUFDQSxXQUFXLDRFQUFXO0FBQ3RCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDMEY7O0FBRTFGIiwic291cmNlcyI6WyIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBwUm91dGVSb3V0ZU1vZHVsZSB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL3JvdXRlLW1vZHVsZXMvYXBwLXJvdXRlL21vZHVsZS5jb21waWxlZFwiO1xuaW1wb3J0IHsgUm91dGVLaW5kIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvcm91dGUta2luZFwiO1xuaW1wb3J0IHsgcGF0Y2hGZXRjaCBhcyBfcGF0Y2hGZXRjaCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2xpYi9wYXRjaC1mZXRjaFwiO1xuaW1wb3J0ICogYXMgdXNlcmxhbmQgZnJvbSBcIkM6XFxcXFVzZXJzXFxcXGVkdWFyXFxcXERvY3VtZW50c1xcXFxSRUFDVF9DT1VSU0VcXFxcZWR1Y2F0aW9uYWwtZ2FtZVxcXFxhcHBcXFxcYXBpXFxcXGF1dGhcXFxcbWVcXFxccm91dGUudHNcIjtcbi8vIFdlIGluamVjdCB0aGUgbmV4dENvbmZpZ091dHB1dCBoZXJlIHNvIHRoYXQgd2UgY2FuIHVzZSB0aGVtIGluIHRoZSByb3V0ZVxuLy8gbW9kdWxlLlxuY29uc3QgbmV4dENvbmZpZ091dHB1dCA9IFwiXCJcbmNvbnN0IHJvdXRlTW9kdWxlID0gbmV3IEFwcFJvdXRlUm91dGVNb2R1bGUoe1xuICAgIGRlZmluaXRpb246IHtcbiAgICAgICAga2luZDogUm91dGVLaW5kLkFQUF9ST1VURSxcbiAgICAgICAgcGFnZTogXCIvYXBpL2F1dGgvbWUvcm91dGVcIixcbiAgICAgICAgcGF0aG5hbWU6IFwiL2FwaS9hdXRoL21lXCIsXG4gICAgICAgIGZpbGVuYW1lOiBcInJvdXRlXCIsXG4gICAgICAgIGJ1bmRsZVBhdGg6IFwiYXBwL2FwaS9hdXRoL21lL3JvdXRlXCJcbiAgICB9LFxuICAgIHJlc29sdmVkUGFnZVBhdGg6IFwiQzpcXFxcVXNlcnNcXFxcZWR1YXJcXFxcRG9jdW1lbnRzXFxcXFJFQUNUX0NPVVJTRVxcXFxlZHVjYXRpb25hbC1nYW1lXFxcXGFwcFxcXFxhcGlcXFxcYXV0aFxcXFxtZVxcXFxyb3V0ZS50c1wiLFxuICAgIG5leHRDb25maWdPdXRwdXQsXG4gICAgdXNlcmxhbmRcbn0pO1xuLy8gUHVsbCBvdXQgdGhlIGV4cG9ydHMgdGhhdCB3ZSBuZWVkIHRvIGV4cG9zZSBmcm9tIHRoZSBtb2R1bGUuIFRoaXMgc2hvdWxkXG4vLyBiZSBlbGltaW5hdGVkIHdoZW4gd2UndmUgbW92ZWQgdGhlIG90aGVyIHJvdXRlcyB0byB0aGUgbmV3IGZvcm1hdC4gVGhlc2Vcbi8vIGFyZSB1c2VkIHRvIGhvb2sgaW50byB0aGUgcm91dGUuXG5jb25zdCB7IHdvcmtBc3luY1N0b3JhZ2UsIHdvcmtVbml0QXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcyB9ID0gcm91dGVNb2R1bGU7XG5mdW5jdGlvbiBwYXRjaEZldGNoKCkge1xuICAgIHJldHVybiBfcGF0Y2hGZXRjaCh7XG4gICAgICAgIHdvcmtBc3luY1N0b3JhZ2UsXG4gICAgICAgIHdvcmtVbml0QXN5bmNTdG9yYWdlXG4gICAgfSk7XG59XG5leHBvcnQgeyByb3V0ZU1vZHVsZSwgd29ya0FzeW5jU3RvcmFnZSwgd29ya1VuaXRBc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBwYXRjaEZldGNoLCAgfTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBwLXJvdXRlLmpzLm1hcCJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fauth%2Fme%2Froute&page=%2Fapi%2Fauth%2Fme%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2Fme%2Froute.ts&appDir=C%3A%5CUsers%5Ceduar%5CDocuments%5CREACT_COURSE%5Ceducational-game%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Ceduar%5CDocuments%5CREACT_COURSE%5Ceducational-game&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

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
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/mysql2","vendor-chunks/aws-ssl-profiles","vendor-chunks/iconv-lite","vendor-chunks/long","vendor-chunks/lru-cache","vendor-chunks/denque","vendor-chunks/is-property","vendor-chunks/lru.min","vendor-chunks/sqlstring","vendor-chunks/seq-queue","vendor-chunks/named-placeholders","vendor-chunks/generate-function","vendor-chunks/safer-buffer","vendor-chunks/semver","vendor-chunks/bcryptjs","vendor-chunks/jsonwebtoken","vendor-chunks/lodash.includes","vendor-chunks/jws","vendor-chunks/lodash.once","vendor-chunks/jwa","vendor-chunks/lodash.isinteger","vendor-chunks/ecdsa-sig-formatter","vendor-chunks/lodash.isplainobject","vendor-chunks/ms","vendor-chunks/lodash.isstring","vendor-chunks/lodash.isnumber","vendor-chunks/lodash.isboolean","vendor-chunks/safe-buffer","vendor-chunks/buffer-equal-constant-time"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fauth%2Fme%2Froute&page=%2Fapi%2Fauth%2Fme%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2Fme%2Froute.ts&appDir=C%3A%5CUsers%5Ceduar%5CDocuments%5CREACT_COURSE%5Ceducational-game%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Ceduar%5CDocuments%5CREACT_COURSE%5Ceducational-game&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();