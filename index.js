const Bot = require('./Bot');
const config = require('./config');

if (process.argv[2] == undefined) {
  console.log('No message given');
  process.exit();
}

var bot1 = new Bot(config.webhookURL);
bot1.send(process.argv[2]);
