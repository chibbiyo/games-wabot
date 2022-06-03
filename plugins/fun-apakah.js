let handler = async (m) => m.reply(`
*Pertanyaan:* ${m.text}
*Jawaban:* ${['Ya', 'Maybe yes', 'Maybe', 'Probably not', 'Do not', 'Impossible'].getRandom()}
  `.trim(), null, m.mentionedJid ? {
  mentions: m.mentionedJid
} : {})

handler.help = ['whether <teks>?']
handler.tags = ['shellfish', 'fun']
handler.customPrefix = /(\?$)/
handler.command = /^whether$/i

export default handler
