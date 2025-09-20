const mineflayer = require('mineflayer');

// Create the bot
const bot = mineflayer.createBot({
  host: "lunarsmp-ub2P.aternos.me", // Aternos server IP
  port: 39396,                      // Aternos server port
  username: "AFK_bot",              // Cracked username
  version: "1.21.4"                 // Match your Aternos server version
});

// Log when connected
bot.on('spawn', () => {
  console.log("✅ AFK_bot has spawned and is online!");
});

// Handle errors and kicks
bot.on('kicked', (reason) => console.log("❌ Kicked:", reason));
bot.on('error', (err) => console.log("⚠️ Error:", err));

// Jump every 10s to prevent AFK kick
setInterval(() => {
  bot.setControlState("jump", true);
  setTimeout(() => bot.setControlState("jump", false), 500);
}, 10000);
