import express from "express";
import mongoose from "mongoose";
import blogRouter from "./routes/blog-routes.js";
import router from "./routes/user-routes.js";
import cors from "cors";
import 'dotenv/config'
const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("server is running");
});

app.use("/api/user", router);
app.use("/api/blog", blogRouter);

const URL = process.env.MONGO_URL
const PORT = process.env.PORT || 5000
mongoose
  .connect(URL)
  .then(() =>
    console.log("Connected TO Database")
  )
  .catch((err) => console.log(err));

  app.listen(PORT,()=>console.log(`server is online and listen to the port : ${PORT}`))
