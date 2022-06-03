import db from '../lib/database.js'

let handler = async (m, { text }) => {
    let hash = text
    if (m.quoted && m.quoted.fileSha256) hash = m.quoted.fileSha256.toString('hex')
    if (!hash) throw `No hash`
    let sticker = db.data.sticker
    if (sticker[hash] && sticker[hash].locked) throw 'You dont have permission to remove this sticker command'
    delete sticker[hash]
    m.reply(`Succeed!`)
}


handler.help = ['cmd'].map(v => 'del' + v + ' <teks>')
handler.tags = ['database']
handler.command = ['delcmd']

export default handler
