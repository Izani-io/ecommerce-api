require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected successfully"))
  .catch((err) => {
    console.error("MongoDB connection failed:", err.message);
    process.exit(1);
  });

  app.get("/", (req, res) => {
  res.send("API is running...");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

const authRoutes = require("./routers/authRoutes");

app.use("/api/auth", authRoutes);


// const protect = require("./middleware/authMiddleware");

// app.get("/api/protected", protect, (req, res) => {
//   res.json({
//     message: "Access granted",
//     user: req.user,
//   });
// });

const productRoutes = require("./routers/productRoutes");

app.use("/api/products", productRoutes);

const cartRoutes = require("./routers/cartRoutes");

app.use("/api/cart", cartRoutes);

const orderRoutes = require("./routers/orderRoutes");

app.use("/api/orders", orderRoutes);