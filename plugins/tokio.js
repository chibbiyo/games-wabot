let handler = async m => m.reply(`
🍂 *Caila :* a whatsapp bot built by sam\n\n🔗 *URL :* Private 🤕💞
`.trim()) // repository
handler.help = ['caila']
handler.tags = ['info']
handler.command = /^caila|repo$/i

module.exports = handler
