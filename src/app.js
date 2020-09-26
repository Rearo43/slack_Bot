'use strict';

const dotenv = require('dotenv');
dotenv.config();

const { App } = require('@slack/bolt');

const app = new App({
    token: process.env.BOT_USER_TOKEN,
    signingSecret: process.env.SLACK_SIGNING_SECRET
})

app.command('/wordgame', async ({ command, ack, say }) => {
    await ack();
    await say(randomLetters(command));
});

(async () => {
    await app.start(process.env.PORT || 3043)

    console.log('⚡️ Bolt app is running!');
})
