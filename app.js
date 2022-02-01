let express = require("express");
let connections = require("./connections");
let incrementCount = require("./incrementCount");
const config = require("./config");
let app = express();
const delayAtCount = config.delayAtCount;
const rejectAtCount = config.rejectAtCount;
connections.initialize();
console.log(rejectAtCount);
app.get("/weather", async function (req, res) {
  const count = await incrementCount();
  if (count <= 5) {
    res.send("Weather is Sunny");
  } else if (delayAtCount < count && count < rejectAtCount) {
    setTimeout(() => {
      res.send(`Weather is cloudy`);
    }, 1000);
  } else if (count >= rejectAtCount) {
    res.send("Too many users on servers,Try again");
  } else {
    res.send("Error");
  }
});
var server = app.listen(3000, function () {
  console.log("Example app listening");
});
