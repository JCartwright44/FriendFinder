const express = require('express')
const path = require('path')

var app = express();

var PORT = process.env.PORT || 9080;

app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());

// app.get("/app/public/home", function (req, res) {
//     res.sendFile(path.join(__dirname, "home.html"));
// });

// app.get("/app/public/survey", function (req, res) {
//     res.sendFile(path.join(__dirname, "survey.html"));
// });

// app.get("/app/routing/api/friends", function (req, res) {
//     return res.json(friends)
// });

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

app.listen(PORT, function () {
    console.log("App listening on PORT: " + PORT);
});