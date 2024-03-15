import app from "./app.js";

const port = process.env.PORT;

// connecting database
import "./config/database.js"

app.listen(port, () => {
  console.log(`Server is working on http://localhost:${port}`);
});
