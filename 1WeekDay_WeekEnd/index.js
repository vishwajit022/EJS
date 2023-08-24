import express from "express";
// ES6 module syntax 
const app = express();
// creates an instance of the Express 
//application by calling the express() function. 
//This instance will be the foundation for building the web application.


//  setting up a route handler for handling HTTP
// GET requests to the root path ("/") of your web application.

app.get("/", (req, res) => {
    //If we left the screen new Date() empty then it will track our current date and time
    const today = new Date("June 24, 2023 11:13:00 AM");
    const day = today.getDay();

    console.log(day);

    let type = "a weekday";
    let adv = "It's Time to work Hard!!!"

    if (day == 0 || day == 6) {
        type = "The Weekend";
        adv = "Have fun!!!";
    }

    res.render("index.ejs", {
        dayType: type,
        advice: adv,
    });
});

app.listen(3000, () => {
    console.log("Server running on Port");
});