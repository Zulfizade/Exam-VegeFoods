import express from "express";
import cors from "cors";
import router from "./router/Router.js";
import { connectDB } from "./config/config.js";
import { urlencoded } from "express";

const app = express();


app.use(urlencoded({ extended: true }));
app.use(express.json());
app.use(cors("*"));
app.use("/vegetable", router);

connectDB();

app.listen(2222, () => {
    console.log("Server is running on port 2222");
});