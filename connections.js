const redis = require("redis");
var client;
module.exports = {
  initialize: async function () {
    console.log("im star");
    client = redis.createClient({
      url: "redis://sravan:Password@2000@redis-15098.c89.us-east-1-3.ec2.cloud.redislabs.com:15098",
    });
    await client.connect();
    client.on("connect", () => {
      //   console.log("Connected to our redis instance!");
      //   client.set("Greatest Basketball Player", "Lebron James");
      console.log("connected");
    });

    client.on("error", (err) => console.log("Redis Client Error", err));
  },
  getConnection: function () {
    return client;
  },
};
