import express = require("express");
import dotenv = require("dotenv");
import errorHandler = require("./middleware/errorMiddleware");
import connectDB = require("./config/db");

dotenv.config({ path: "./.env", debug: true });

const port = process.env.PORT || 5000;

connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/products", require("./routes/productRoutes.ts"));
app.use("/api/users", require("./routes/userRoutes.ts"));

app.use(errorHandler);

app.listen(port, () => console.log(`Server started on port ${port}`));
