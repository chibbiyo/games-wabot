let handler =  m => m.reply(`
╭─「 Donasi • ??? 」
│ • Indosat Ooredoo [...]
│ • Telkomsel [...]
╰────

╭─「 Donasi • ??? 」
│ • https://???/????
│ • Gopay [...]
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

export default handler
