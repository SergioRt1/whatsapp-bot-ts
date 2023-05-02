# Whatsapp bot

This project is a bot designed to send WhatsApp messages using the WhatsApp Typescript/Javascript Web API
through **[Baileys](https://github.com/WhiskeySockets/Baileys)**. The bot achieves this functionality by running as a
scheduled task on AWS Lambda. The WhatsApp credentials are securely stored in DynamoDB, ensuring that it is not
necessary to log in every time the lambda is executed. To manage the infrastructure in AWS, the
[Serverless](https://www.serverless.com) Framework is utilized.

The bot searches a finance API for the USD to COP conversion value and sends it in a message via WhatsApp. This
iteration of the [previous Rust project](https://github.com/SergioRt1/whatsapp-bot-rs) reduces memory usage and enables
it to run in the cloud, specifically in a free tier 128MB Lambda, without Selenium dependency.

## Baileys - Typescript/Javascript WhatsApp Web API

Baileys does not require Selenium or any other browser to be interface with WhatsApp Web, it does so directly using a *
*WebSocket**. Not running Selenium or Chromimum saves you like **half a gig** of ram :/

Baileys supports interacting with the multi-device & web versions of WhatsApp.

Thank you to [@pokearaujo](https://github.com/pokearaujo/multidevice) for writing his observations on the workings of
WhatsApp Multi-Device. Also, thank you to [@Sigalor](https://github.com/sigalor/whatsapp-web-reveng) for writing his
observations on the workings of WhatsApp Web and thanks to [@Rhymen](https://github.com/Rhymen/go-whatsapp/) for the _
_go__ implementation.

Baileys is type-safe, extensible and simple to use. If you require more functionality than provided, it's super easy to
write an extension.

If you're interested in building a WhatsApp bot, you may wanna check
out [WhatsAppInfoBot](https://github.com/adiwajshing/WhatsappInfoBot) and an actual bot built with
it, [Messcat](https://github.com/ashokatechmin/Messcat).

**Read the docs [here](https://adiwajshing.github.io/Baileys)**
**Join the Discord [here](https://discord.gg/WeJM5FP9GG)**

## Deployment :rocket:

To deploy the project:

1. Set up your AWS credentials `aws configure` (this must have access to Lambda and DynamoDB)
2. Install the dependencies running `yarn`
3. Create a `.env` file in the root of the project like:
    ```env
    EXTERNAL_AUTH_ENABLED=true
    GROUP_NAME=your-group-name
    USE_STORE=false
    DYNAMODB_TABLE=whats-app-bot-table
    CREDS_ID=creds-id
    ```
4. Deploy the project `serverless deploy --verbose`

### PD

If while deploying you have an error like:

```
Cannot read file node_modules\dayjs\esm\locale\sk.js due to: EMFILE: too many open files, open '...\Baileys\.build\node_modules\dayjs\esm\locale\sk.js'
```

then add `require('../../graceful-fs/graceful-fs').gracefulify(require('fs'));` below `'use strict';` in the
file `node_modules/serverless/bin/serverless.js` to solve it.

## Note

This project was not carried out for commercial purposes and is in no way affiliated with WhatsApp. Use at your own
discretion. **Do not spam people with this**.
