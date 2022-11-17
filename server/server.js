import express from "express";
import cors from "cors";

const PORT = process.env.PORT || 5001;
const app = express();
app.use(cors());

app.get("/", (req, res) => {
  res.send("Server On");
});

app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));