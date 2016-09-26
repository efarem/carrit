const fetch = require('node-fetch');

class Bot {
  constructor(webhookURL) {
    this.webhookURL = webhookURL;
  }
  send(msg) {
    fetch(this.webhookURL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        channel: "#general",
        text: msg,
        icon_emoji: ":carrit:",
        username: "Carrit Bot",
      })
    })
    .then((res) => {
      if (res.status == 200) {
        console.log('Message sent');
      } else {
        console.log(`${res.status}: ${res.statusText}`);
      }
    })
    .catch((res) => {
      console.log('Message not sent');
      console.log(res);
    });
  }
}

module.exports = Bot;
