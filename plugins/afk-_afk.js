import db from '../lib/database.js'

export function before(m) {
    let user = db.data.users[m.sender]
    if (user.afk > -1) {
        m.reply(`
  You quit AFK${user.afkReason ? ' after ' + user.afkReason : ''}
  For ${(new Date - user.afk).toTimeString()}
  `.trim())
        user.afk = -1
        user.afkReason = ''
    }
    let jids = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
    for (let jid of jids) {
        let user = db.data.users[jid]
        if (!user)
            continue
        let afkTime = user.afk
        if (!afkTime || afkTime < 0)
            continue
        let reason = user.afkReason || ''
        m.reply(`
  Jangan tag dia!
  Dia sedang AFK ${reason ? 'on the grounds that ' + reason : 'for no reason '}
  Selama ${(new Date - afkTime).toTimeString()}
  `.trim())
    }
    return true
}
