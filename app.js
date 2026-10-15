
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

// Info API
app.get("/api/info", (req, res) => {
    res.json({
        success: true,
        message: "All feature branches merged successfully"
    });
});

// Users API
app.get("/api/users", (req, res) => {
    res.json({
        success: true,
        users: [
            { id: 1, name: "Amit", role: "Developer" },
            { id: 2, name: "Priya", role: "Tester" }
        ]
    });
});

// Products API
app.get("/api/products", (req, res) => {
    res.json({
        success: true,
        products: [
            { id: 1, name: "Laptop", price: 55000 },
            { id: 2, name: "Keyboard", price: 1500 }
        ]
    });
});

// Status API
app.get("/api/status", (req, res) => {
    res.json({
        success: true,
        status: "Running",
        uptime: process.uptime()
    });
});

// Start server
app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on port ${PORT}`);
});
