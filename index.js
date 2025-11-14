const express = require("express");
const cors = require("cors");
const connectToDB = require("./db");
const UserModel = require("./schemas/userSchema");

const app = express();
const PORT = process.env.PORT || 168;

app.use(cors());
app.use(express.json());

connectToDB();

app.get("/", async (req, res) => {
  console.log("req.body", req.body);
  const {
    email,
    password,
    phoneNumber,
    address,
    role,
    isVerified,
    createdAt,
    updatedAt,
  } = req.body;
  try {
    const data = await UserModel.create({
      email: email,
      password: password,
      phoneNumber: phoneNumber,
      address: address,
      role: role,
      isVerified: isVerified,
      createdAt: createdAt,
      updatedAt: updatedAt,
    });
    console.log(data);
    res.json("hello , 168 gang2 running");
  } catch (err) {
    console.log(err);
  }
});

app.listen(PORT, () => {
  console.log(`API listening on http://localhost:${PORT}`);
});
