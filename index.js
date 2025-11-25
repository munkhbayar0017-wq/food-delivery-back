const express = require("express");
const cors = require("cors");
const connectToDB = require("./db");
const userRoutes = require("./routes/userRoutes");
const foodCategoryRouter = require("./routes/foodCategoryRoutes");
const authenticationRouter = require("./routes/authentication");
const foodRouter = require("./routes/foodRoutes");
// const { default: uploadRouter } = require("./routes/uploadRoutes");

const app = express();
const PORT = process.env.PORT || 168;

app.use(cors());
app.use(express.json());

connectToDB();

app.use("/user", userRoutes);
app.use("/food", foodRouter);
app.use("/food-category", foodCategoryRouter);
app.use("/authentication", authenticationRouter);
// app.use("/api", uploadRouter);

app.listen(PORT, () => {
  console.log(`API listening on http://localhost:${PORT}`);
});
