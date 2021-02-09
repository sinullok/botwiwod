const stickermaker = (prefix, botName, ownerName) => {
	return `
┏ *〈 ${botsinull} 〉*
╿
┷┯ *〈 BOT INFO 〉*
   ╽
   ┠≽ *Prefix* : 「  ${prefix}  」
   ┠≽ *Creator* : ${ownername}
   ┠≽ *Version* : 0.0.5
   ╿
┯┷ *〈 ABOUT 〉*
╽
┠≽ *${prefix}info* (error)
┃ *Desc* : Show Bot Details
┠──────────────╼
┠≽ *${prefix}blocklist*
┃ *Desc* : Show Blocked User
┠──────────────╼
┠≽ *${prefix}chatlist* (error)
┃ *Desc* : Show All Chat User
┠──────────────╼
┠≽ *${prefix}ping*
┃ *Desc* : Show Connection Bot Speed
┠──────────────╼
┠≽ *${prefix}bugreport* <text>
┃ *Desc* : Report Bug To Owner Bot
╿
┷┯ *〈 STICKER MAKER 〉*
   ╽
   ┠≽ *${prefix}sticker*
   ┃ *Desc* : Make Sticker Image
   ┠──────────────╼
   ┠≽ *${prefix}stickergif*
   ┃ *Desc* : Make Sticker Gif/Video
   ┠──────────────╼
   ┠≽ *${prefix}ttp*
   ┃ *Desc* : Text To Sticker
   ╿ *${ownerName}*,
   ╰╼≽ *Developer © ${botsinull}`
}
exports.stickermaker = stickermaker
