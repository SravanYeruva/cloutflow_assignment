var connections = require("./connections");
async function incrementCount() {
  const timeStampInMinutes = Math.floor(Date.now() / 60000);
  let client = connections.getConnection();
  const currentCount = await client.get(`${timeStampInMinutes}`);
  if (currentCount == null) {
    await client.set(`${timeStampInMinutes}`, 1);
  } else {
    await client.set(`${timeStampInMinutes}`, parseInt(`${currentCount}`) + 1);
  }
  console.log(currentCount);
  return currentCount;
}

module.exports = incrementCount;
