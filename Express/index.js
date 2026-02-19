const express = require("express");
const app = express();
const port = 3000;
const path = require("path");
const a=path.join(__dirname, "pages");
app.use(express.static(a));
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});