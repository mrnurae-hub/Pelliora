const express = require("express");
const axios = require("axios");

const app = express();

app.get("/price", async (req, res) => {
  const sol = await axios.get(
    "https://api.coingecko.com/api/v3/simple/price?ids=solana&vs_currencies=aud"
  );

  res.json({
    SOL: {
      aud: sol.data.solana.aud
    }
  });
});

app.listen(3000, () => console.log("Price API running"));
