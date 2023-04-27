# Whatsapp bot

This project is a bot that writes WhatsApp messages. It uses the Typescript/Javascript WhatsApp Web API
through **[Baileys](https://github.com/WhiskeySockets/Baileys)** to send messages to a WhatsApp group. It accomplishes this
by
creating an HTTP server with Express, where an endpoint `/api/sendText` is exposed and can receive an optional group
name
as a query parameter.

The bot searches a finance API for the USD to COP conversion value and sends it in a message via WhatsApp. This
iteration of the [previous Rust project](https://github.com/SergioRt1/whatsapp-bot-rs) reduces memory usage and enables
it to run in the cloud, specifically in a free tier container, without Selenium dependency.

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

## Run :hammer_and_wrench:

To run the script, download or clone the repo and then type the following in a terminal:

1. ``` cd path/to/theProject ```
3. ``` yarn run start ```

## Make a request

```bash
curl --location 'http://localhost:3000/api/sendText?group=Mi%20group%20name'
```

## Note

This project was not carried out for commercial purposes and is in no way affiliated with WhatsApp. Use at your own
discretion. **Do not spam people with this**.
