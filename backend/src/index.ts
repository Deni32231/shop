import express from "express";
import { initDB } from "./models/mapping";
import router from "./routers/index";

initDB();

const app = express();

app.use(express.json());
app.use("/api", router);

app.listen(3001, () => {
  console.log("server started on port 3000");
});
