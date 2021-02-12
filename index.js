const express = require("express");
const cors = require("cors");
const ytdl = require("ytdl-core");
const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(function (res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
app.listen(PORT, () => {
  console.log(`Server Works !!! At port ${PORT}`);
});

app.get("/convert", async (req, res) => {
  const url = req.query.URL;
  try {
    if (ytdl.validateURL(url)) {
      let info = await ytdl.getInfo(url);
      res.json(info);
    } else {
      res.status(400).json({ message: "the url is not valid" });
    }
  } catch (error) {
    return next(error);
  }
});
