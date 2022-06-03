let handler = async (m, { conn, command, text }) => conn.reply(m.chat, `
*Question:* ${command} ${text}
*Answer:* ${(10).getRandom()} ${['second', 'minute', 'hour', 'day', 'Sunday', 'moon', 'year', 'decade', 'century'].getRandom()} lagi ...
  `.trim(), m, m.mentionedJid ? {
  mentions: m.mentionedJid
} : {})

handler.help = ['', 'is it'].map(v => 'when' + v + ' <text>?')
handler.tags = ['shellfish', 'fun']
handler.command = /^when(is it)?$/i

export default handler
