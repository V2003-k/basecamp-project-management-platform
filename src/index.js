import "dotenv/config";
import app from "./app.js";
import connectDB from "./db/index.js";

const PORT = process.env.PORT ?? 3000;

connectDB()
  .then(() => {
    app.listen(PORT, () =>
      console.log(`Server is up and running at http://localhost:${PORT}`),
    );
  })
  .catch((err) => {
    console.error("MongoDB Connection Error", err);
    process.exit(1);
  });
