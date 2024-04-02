const express = require("express");
const app = express();
const port = process.env.PORT || 3001;

// home page
// notes page
// GET /api/notes
// GET /api/notes/:id
// POST /api/notes
// DELETE /api/notes

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
