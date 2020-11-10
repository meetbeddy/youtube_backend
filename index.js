const express = require("express");
const cors = require("cors");
const ytdl = require("ytdl-core");
const app = express();

app.use(cors());
app.listen(4000, () => {
  console.log("Server Works !!! At port 4000");
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
// app.get('/download', (req,res) => {
// const url = req.query.URL;
// res.header('Content-Disposition', 'attachment; filename="video.mp4"');
// ytdl(url).pipe(res);
// });
