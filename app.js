// app.js
import express from "express";
import router from "./routes/additionRoutes.js"; // Adjust the path based on your folder structure

const app = express();

app.use(express.json());

// Use the router for the specified routes
app.use("/api", router);

app.listen(3000, () => console.log("app is listening on port 3000"));
