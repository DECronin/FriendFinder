let userData = require("../data/friends");

module.exports = function (app) {

    app.get("/api/friends", function (req, res) {
        res.json(userData);

        res.json("#modal", compare(userData))
    });
}

function compare(array) {
    let user = array[array.length - 1];
    let friends = [];
    array.forEach(e => {
        let diff = 0;
        for (i = 0; i < 10; i++) {
            diff += Math.abs(user.scores[i] - e.scores[i]);
        }
        friends.push(diff);
    });

    for (k = 0; k < 50; k++) {
        for (j = 0; j < friends.length; j++){
            if (friends[j] == k) {
                return array[j]
            }
        }
    }

    return { name: "Error", image: "https://cdn.shopify.com/s/files/1/0322/6897/files/404-permalink.png?432866230176278629", scores: [404] }

    // Display as MODAL POP UP (name and picture)
}
