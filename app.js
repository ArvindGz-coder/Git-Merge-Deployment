
const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Home API
app.get("/", (req, res) => {
    res.json({
        success: true,
        message: "Git Merge and Deployment API",
        version: "1.0.0"
    });
});

// Temporary route for practicing merge conflicts
app.get("/api/info", (req, res) => {
    res.json({
        success: true,
        message: "Base API - ready for feature development"
    });
});

// Start server
app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on port ${PORT}`);
});
