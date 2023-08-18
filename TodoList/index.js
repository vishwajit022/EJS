import express from "express";
import bd from "body-parser";
import ejs from "ejs";

const app = express();

let newItems = [];

app.set('view engine', 'ejs');
app.use(bd.urlencoded({ extended: true }));

app.listen(3000, () =>
    console.log("Port is Running at Server"));

app.get("/", (req, res) => {
    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    var today = new Date();
    let day = today.toLocaleDateString("hi-IN", options); // शनिवार, 17 सितंबर 2016
    res.render("index", { kindOfDay: day, item: newItems });
})

app.post("/", (req, res) => {
    let newItem = req.body.newItem;
    newItems.push(newItem);
    res.redirect('/');
})