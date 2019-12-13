let userData = require("../data/friends");

module.exports = function(app) {
    
  app.get("/api/fiends", function(req, res) {
    res.json(userData);
  });

  compare()
}






function compare(){
    // totul sum of (absolute value of subtracted inputs each index) from database of existing users
    // first lowest sum is most similar == friend found

    // Display as MODAL POP UP (name and picture)
}