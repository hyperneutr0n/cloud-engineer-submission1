const express = require("express");
const path = require("path");

const app = express();

// Serve static files from the "public" folder
app.use(express.static(__dirname));

// Home route
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

// Start the server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
