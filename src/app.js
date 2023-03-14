import  express  from "express";
import routerProduct from "./router/product.js";


import dotenv from "dotenv";
dotenv.config();
const app = express();

app.use(express.json());

app.use("/api", routerProduct);

app.listen(process.env.PORT, () => {
  console.log(`Server is running on ${process.env.PORT}`);
});