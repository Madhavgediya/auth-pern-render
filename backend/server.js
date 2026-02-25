const express = require("express");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const authRoutes = require("./routes/auth.js");

const app = express();

app.use(express.json());
// app.use(
//   cors({
//     origin:
//       process.env.CLIENT_URL || "https://mg-pern-auth-project.vercel.app",
//     credentials: true,
//   }),
// );
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://mg-pern-auth-project.vercel.app",
      "https://authentication-pern-render.onrender.com",
      "https://auth-pern-render.onrender.com",
    ],
    credentials: true,
  }),
);
app.use(cookieParser());

app.use("/api/auth", authRoutes);

// app.get("/", (req, res) => {
//   res.send("Hello World...!");
// });

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
