let handler = async (m, { text, command, usedPrefix }) => {
    if (!text) throw `Use example ${usedPrefix}${command} i'm alien?`
    m.reply(`"${[
        'Maybe one day',
        'Neither',
        'Neither',
        'I dont think so',
        'Ya',
        'Try asking again',
        'None'
    ].getRandom()}."`)
}
handler.help = ['shellfish', 'shellfish'].map(v => v + ' <teks>')
handler.tags = ['shellfish', 'fun']

handler.command = /^(skin)?shellfish(miraculous)?$/i

export default handler
