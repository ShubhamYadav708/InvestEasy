const mongoose = require("mongoose");

const InvestmentSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    amount: { type: Number, required: true },
    type: { type: String, enum: ["low-risk", "medium-risk", "high-risk"], required: true },
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Investment", InvestmentSchema);

const express = require("express");
const Investment = require("./Investment");
const jwt = require("jsonwebtoken");

const router = express.Router();

// Middleware for authentication
const authMiddleware = (req, res, next) => {
    const token = req.header("x-auth-token");
    if (!token) return res.status(401).json({ msg: "No token, authorization denied" });

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded.userId;
        next();
    } catch (err) {
        res.status(401).json({ msg: "Invalid token" });
    }
};

// CREATE INVESTMENT
router.post("/", authMiddleware, async (req, res) => {
    const { amount, type } = req.body;
    
    try {
        const investment = new Investment({ userId: req.user, amount, type });
        await investment.save();
        res.status(201).json(investment);
    } catch (err) {
        res.status(500).json({ msg: "Server error" });
    }
});

module.exports = router;
