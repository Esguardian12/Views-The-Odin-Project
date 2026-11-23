const express = require("express");
const path = require("node:path");

const app = express();
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// Render views/index.ejs and pass the `message` variable to it
app.get("/", (req, res) => {
    res.render("index", {message: "EJS rocks!" });
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});