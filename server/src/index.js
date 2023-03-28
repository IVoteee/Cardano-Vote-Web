import dotenv from "dotenv";
dotenv.config();
import express from "express";

const app = express();

const PORT = process.env.PORT || 8000;
const start = async function () {
    try {
        await app.listen(PORT, function () {
            return console.log(`http://localhost:${PORT}`);
        });
    } catch (error) {
        throw new Error("Error: " + error);
    }
};

(function () {
    start();
})();
