
const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (req, res) => {
    res.json({
        success: true,
        message: "Git Merge and Deployment API"
    });
});

app.get("/api/info", (req, res) => {
    res.json({
        success: true,
<<<<<<< HEAD
        message: "Products API branch"
    });
});

app.get("/api/products", (req, res) => {
    res.json({
        success: true,
        count: 2,
        products: [
            { id: 1, name: "Laptop", price: 55000 },
            { id: 2, name: "Keyboard", price: 1500 }
=======
        message: "Users API branch"
    });
});

app.get("/api/users", (req, res) => {
    res.json({
        success: true,
        count: 2,
        users: [
            { id: 1, name: "Amit", role: "Developer" },
            { id: 2, name: "Priya", role: "Tester" }
>>>>>>> feature/products-api
        ]
    });
});

app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on port ${PORT}`);
});
