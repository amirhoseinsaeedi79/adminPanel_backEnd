import express from "express";
import ApiResponse from "./core/response/api-response.js";

const app = express();

// app.use(express.json({ limit: "10kb" }));

app.use("/api", router);

app.use((req, res) => {
  return ApiResponse(res, 404, null, "not found");
});

// ✅ هندل خطاهای سطح اپلیکیشن
app.use((err, req, res, next) => {
  console.error(err); // لاگ خطا
  const statusCode = err.statusCode || 500;
  const message = err.message || "Something went wrong";
  return ApiResponse(res, statusCode, null, message);
});

export default app;
