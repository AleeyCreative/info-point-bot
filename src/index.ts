import express from "express";
import setupBot from "./setupBot";

const welcomeMarkup = `<h2> <center> Welcome to info-point-bot, telegram link is <a href="https://t.me/info_point_bot">t.me/info_point_bot</a></center></h2>`;

setupBot();
const app = express();
app.get("/", (_, res) => res.send(welcomeMarkup));

const port = process.env.PORT || 4000;
app.listen(port, () => console.log("express server running successfully"));
