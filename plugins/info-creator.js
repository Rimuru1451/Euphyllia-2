import fetch from 'node-fetch'
let handler = async (m, { conn, usedPrefix, text, args, command }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let pp = await conn.profilePictureUrl(who).catch(_ => hwaifu.getRandom())
let name = await conn.getName(who)

if (command == 'owner') {
 let vcard = `BEGIN:VCARD\nVERSION:3.0\nN:WhatsApp; Ayangnya Hu Tao\nNICKNAME: Ayangnya Hu Tao\nORG: 62887435530429\nTITLE:\nitem1.TEL;waid=62887435530429:+62 887 4355 30429\nitem1.X-ABLabel: Nomor Owner\nitem2.URL:https://panel.vynaachan.my.id\nitem2.EMAIL;type=INTERNET: kobobotmd@gmail.com\nitem2.X-ABLabel:\nitem4.ADR:;;🇮🇩 Indonesia;;;;\nEND:VCARD`
const tag_own = await conn.sendMessage(m.chat, { contacts: { displayName: wm, contacts: [{ vcard }] }}, { quoted: fkontak })
m.reply(`Hay Kak Itu Ownerku, Jangan Macam~Macam Ya`)
}
function _0x2675(_0x2ebb90,_0x560782){const _0x5badb9=_0x5bad();return _0x2675=function(_0x267583,_0x3a3ec1){_0x267583=_0x267583-0x199;let _0x2db212=_0x5badb9[_0x267583];return _0x2db212;},_0x2675(_0x2ebb90,_0x560782);}function _0x5bad(){const _0x2f77bd=['11840LwPzTx','684980PnmTxH','creator','reply','1049816rLiHvH','165079WaWneR','sendMessage','170UUgUWv','604143bywLUF','BEGIN:VCARD\x0aVERSION:3.0\x0aN:WhatsApp;\x20Danil\x20Elistz\x0aNICKNAME:\x20Zeltoria\x0aORG:\x20VynaChan\x0aTITLE:\x0aitem1.TEL;waid=6282389924037:+62\x20857\x206045\x201683\x0aitem1.X-ABLabel:\x20Nomor\x20Owner\x0aitem2.URL:https://www.zeltoria.my.id\x0aitem2.EMAIL;type=INTERNET:\x20elistz21@gmail.com\x0aitem2.X-ABLabel:\x0aitem4.ADR:;;🇮🇩\x20Indonesia;;;;\x0aEND:VCARD','267XlTZTY','chat','14HZBpxK','1492338zZAdLA','136646WzRkyd'];_0x5bad=function(){return _0x2f77bd;};return _0x5bad();}function _0x37ea55(_0xabda47,_0x1ac93e){return _0x2675(_0xabda47- -0x238,_0x1ac93e);}(function(_0x57a97e,_0x11a609){function _0x1f9455(_0x48b1d5,_0x94b10c){return _0x2675(_0x94b10c- -0x370,_0x48b1d5);}const _0x6da686=_0x57a97e();while(!![]){try{const _0x3bf6fc=-parseInt(_0x1f9455(-0x1d1,-0x1cc))/0x1+parseInt(_0x1f9455(-0x1d6,-0x1d2))/0x2+-parseInt(_0x1f9455(-0x1d9,-0x1d6))/0x3*(parseInt(_0x1f9455(-0x1d5,-0x1d1))/0x4)+-parseInt(_0x1f9455(-0x1ce,-0x1d0))/0x5+-parseInt(_0x1f9455(-0x1cb,-0x1d3))/0x6+parseInt(_0x1f9455(-0x1db,-0x1d4))/0x7*(-parseInt(_0x1f9455(-0x1cf,-0x1cd))/0x8)+-parseInt(_0x1f9455(-0x1cd,-0x1c9))/0x9*(-parseInt(_0x1f9455(-0x1cf,-0x1ca))/0xa);if(_0x3bf6fc===_0x11a609)break;else _0x6da686['push'](_0x6da686['shift']());}catch(_0x2b487b){_0x6da686['push'](_0x6da686['shift']());}}}(_0x5bad,0x206b6));if(command==_0x37ea55(-0x97,-0x9b)){let vcard=_0x37ea55(-0x9f,-0xa0);const tag_own=await conn[_0x37ea55(-0x93,-0x94)](m[_0x37ea55(-0x9d,-0x97)],{'contacts':{'displayName':wm,'contacts':[{'vcard':vcard}]}},{'quoted':fkontak});m[_0x37ea55(-0x96,-0x9b)]('Hai\x20Kak\x20Itu\x20Nomor\x20Developerku\x20Yang\x20Memprogram\x20Aku,\x20Mohon\x20Jangan\x20Di\x20Spam\x20Ya\x20>,<');}
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(creator|owner)$/i

export default handler