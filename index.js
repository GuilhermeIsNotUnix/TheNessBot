const Telegraf = require('telegraf');
const BOT_TOKEN = ""; //Insira o Token do seu bot aqui

const bot = new Telegraf(BOT_TOKEN);

const help = [
    "/start - Inicia o bot",
    "/help - Exibe a lista de comandos"
];
const USUARIO = ""; //Usuario permitido

bot.start((ctx) => {
    ctx.reply("Eu sou Ness, do Lago Ness, /help...");
});

bot.help((ctx) => {
    ctx.reply(help);
});

bot.on('text', (ctx) => {
    if(ctx.from.username === USUARIO) {
        ctx.reply("Bem vindo, Mestre...");
        //Executa o comando (Em testes...)
    } else {
        ctx.reply("ERRO: Usuario não permitido. Você não é um usuario permitido, você não passará!");
    }
});

bot.launch();