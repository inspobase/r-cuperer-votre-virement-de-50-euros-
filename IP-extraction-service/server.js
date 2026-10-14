import express from "express";
import crypto from "crypto";

const app = express();
app.set("trust proxy", 1);
app.use(express.json());
app.use(express.static("public"));

const entries = [];
const ADMIN_TOKEN = process.env.ADMIN_TOKEN || crypto.randomBytes(24).toString("hex");

app.post("/api/checkin", (req, res) => {
  // This endpoint is called only after the visitor clicks the consent button.
  const forwarded = req.headers["x-forwarded-for"];
  const ip = forwarded ? forwarded.split(",")[0].trim() : req.ip;

  const entry = {
    ip,
    date: new Date().toISOString(),
    userAgent: req.headers["user-agent"] || "unknown"
  };
  entries.unshift(entry);
  res.json({ success: true, ip: entry.ip, date: entry.date });
});

app.get("/api/entries", (req, res) => {
  if (req.headers.authorization !== `Bearer ${ADMIN_TOKEN}`) {
    return res.status(401).json({ error: "Unauthorized" });
  }
  res.json(entries);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
  if (!process.env.ADMIN_TOKEN) console.log(`Temporary ADMIN_TOKEN: ${ADMIN_TOKEN}`);
});
