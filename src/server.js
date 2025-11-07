import { createServer } from "http";
import app from "./app.js";
// import { config } from "./core/config/env.js";
// import knex from "./core/database/db.js";

const server = createServer(app);

const startServer = async () => {
  server.listen(3000, () => {
    // logger.info(`🚀 Server running on port ${config.port}`);
    // logger.info(`Environment: ${config.nodeEnv}`);
    // logger.info(`API URL: http://localhost:${config.port}/api`);
    console.log("server run ");
  });
};

// // ✅ هندل خطاهای عمومی
// process.on("uncaughtException", (err) => {
//   logger.error("💥 Uncaught Exception:", err);
//   process.exit(1);
// });

// process.on("unhandledRejection", (reason) => {
//   logger.error("💥 Unhandled Rejection:", reason);
//   server.close(() => process.exit(1));
// });

// // ✅ Graceful shutdown
// const gracefulShutdown = async (signal) => {
//   logger.info(`${signal} received. Gracefully shutting down...`);

//   server.close(async () => {
//     try {
//       await knex.destroy();
//       logger.info("🗄️ Database connection closed");
//       process.exit(0);
//     } catch (err) {
//       logger.error("Error during shutdown:", err);
//       process.exit(1);
//     }
//   });

//   // Force close after 10 seconds
//   setTimeout(() => {
//     logger.error("⏱️ Force shutdown due to timeout");
//     process.exit(1);
//   }, 10000);
// };

// process.on("SIGTERM", () => gracefulShutdown("SIGTERM"));
// process.on("SIGINT", () => gracefulShutdown("SIGINT"));

startServer();
