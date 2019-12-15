let userData = require("../data/friends");

module.exports = function(app) {
    console.log(`api route connecting?`);

    app.get("/api/friends", function (req, res) {
        res.json(userData);
        console.log(`exports-from-api-routes: ${userData}`)
        // res.json("#modal", compare(userData))
    });

    app.post("/api/friends", function(req, res) {
        console.log(`push?`);
        userData.push(req.body);
        res.json(true);

    })
}
