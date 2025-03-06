const express = require("express");
const { createProxyMiddleware } = require("http-proxy-middleware");
const path = require("path");
const Router = require("./routes/Router");

require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 8080;
const NODE_ENV = process.env.NODE_ENV || "development";
const REACT_DEV_SERVER = "http://localhost:5173";

app.use("/api", Router);

if (NODE_ENV !== "production") {
  console.log("Running in development mode...");

  app.use(
    "/",
    createProxyMiddleware({
      target: REACT_DEV_SERVER,
      changeOrigin: true,
      ws: true,
      logLevel: "debug",
    })
  );
}

if (NODE_ENV === "production") {
  console.log("Running in production mode...");
  app.use(express.static(path.join(__dirname, "public", "dist")));

  app.get("*", (_, res) => {
    res.sendFile(path.join(__dirname, "public", "dist", "index.html"));
  });
}

app.listen(PORT, () => {
  console.log(`\x1b[36mServer is running on http://localhost:${PORT}\x1b[0m`);
});
