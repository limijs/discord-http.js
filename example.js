import Client from "./src/client.js";

const bot_client = new Client({
  applicationID: "w",
  publicKey: "w",
  token: "w",
});

bot_client.once("start", () => console.log("ready"));

bot_client.start();
