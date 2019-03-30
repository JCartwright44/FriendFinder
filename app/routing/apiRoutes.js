var friendsArray = require('../data/friends');




module.exports = function(app) {
//    * A GET route with the url `/api/friends`. This will be used to display a JSON of all possible friends.
app.get("/api/friends", function (req, res) {
    // console.log(friendsArray)
    res.json(friendsArray);
});



//    * A POST routes `/api/friends`. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.
app.post("/api/friends", function (req, res) {

    var newFriend = req.body;


    for (var i = 0; i <newFriend.scores.length; i++) {
        newFriend.scores[i] = parseInt(newFriend.scores[i]);
    }

    var bestFriendID = 0
    var mostDiff = 50

    for (var i = 0; i <friendsArray.length; i++) {
        var closeness = 0
        for (var j = 0; j < friendsArray[i].scores.length; j++) {
            var diff = Math.abs(newFriend.scores[j] - friendsArray[i].scores[j]);
            closeness = closeness + diff

        }

        if (closeness < mostDiff) {
            bestFriendID = i;
            mostDiff = closeness
        }

        friendsArray.push(newFriend)

        res.json(friendsArray[bestFriendID])
    }


});


// app.post("/api/clear", function (req, res) {
//     friendsArray.length = 10;
//     res.json({
//         ok: true
//     });
// });
};