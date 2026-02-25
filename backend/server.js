const express = require("express");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const authRoutes = require("./routes/auth.js");

const app = express();

app.use(express.json());
app.use(
  cors({
    origin: process.env.CLIENT_URL || "https://auth-pern-render.onrender.com",
    credentials: true,
  }),
);
// app.use(
//   cors({
//     origin: "https://auth-pern-render.onrender.com",
//     credentials: true,
//   }),
// );
app.use(cookieParser());

app.use("/api/auth", authRoutes);

// app.get("/", (req, res) => {
//   res.send("Hello World...!");
// });

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
