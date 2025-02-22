const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const authroutes = require("./routes/Authroutes");
const productroutes = require("./routes/Productroutes");
const orderroutes = require("./routes/Orderroutes");
const fs = require("fs");
const csv = require("csv-parser");

let marketData = [];

fs.createReadStream("marketdata.csv")
  .pipe(csv())
  .on("data", (row) => {
    marketData.push(row);
  })
  .on("end", () => {
    console.log("CSV file successfully loaded.");
  });

app.use(express.json());
app.use(cors());
const dotenv = require("dotenv");
const { run } = require("./util/gemini");
dotenv.config();

const connectDb = async () => {
  try {
    const db = await mongoose.connect(process.env.DATABASE_URL, {
      dbName: "agrichain",
    });

    console.log("MongoDB connected");
  } catch (error) {
    console.log(error);
  }
};

connectDb();

app.get("/", (req, res) => {
  res.json({ message: "Hello from server!" });
});

app.get("/market-data", (req, res) => {
  let { filters } = req.query;
  console.log(filters);
  let { district, market, commodity, variety, grade } = filters;
  // filtere by Tamil Nadu

  let filteredData = marketData.filter((item) => {
    return (
      item.State === "Tamil Nadu" &&
      (!district || item.District === district) &&
      (!market || item.Market === market) &&
      (!commodity || item.Commodity === commodity) &&
      (!variety || item.Variety === variety) &&
      (!grade || item.Grade === grade)
    );
  });

  res.json({ records: filteredData });
});

app.post("/api/generate-price", async (req, res) => {
  const { name } = req.body;
  const data = {
    productName: name,
    marketData: marketData.filter((item) => item.District === "Coimbatore"),
  };

  const response = await run(data);
  return res.json(response);
});

app.use("/api/auth", authroutes);
app.use("/api/products", productroutes);
app.use("/api/orders", orderroutes);

app.listen(3000, () => {
  console.log("Server listening on port 3000");
});
