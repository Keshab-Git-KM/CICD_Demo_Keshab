// app.js
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.send("Hello, CI/CD Pipeline!");
});

app.listen(PORT, '0.0.0.0', () => console.log(`App running on port ${PORT}`));

