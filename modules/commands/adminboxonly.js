/*
* @author ProCoderMew
* @warn Do not edit code or edit credits
* Để sử dụng lệnh hãy thay file listen.js vào
*/

module.exports.config = {
  name: "adminbox",
  version: "1.0.1",
  hasPermssion: 2,
  credits: "MewDevPro",
  description: "Cài đặt bot về chế độ chỉ admin box/bot được sử dụng bot",
  commandCategory: "system",
  cooldowns: 5,
};

module.exports.run = async function ({ api, event, Threads }) {
  const { threadID, messageID } = event;
  const fs = require('fs-extra');
  const path = require('path');
  const oaPath = path.resolve(__dirname, 'cache', 'oa.json');
  const All = require(oaPath);
  All.oab[threadID] = !All.oab[threadID] ? true : false;
  fs.writeFileSync(oaPath, JSON.stringify(All, null, 4));
  const threadInfo = await api.getThreadInfo(event.threadID);
  await Threads.setData(event.threadID, { name: threadInfo.name, threadInfo });
  global.data.threadInfo.set(event.threadID, threadInfo);

  return api.sendMessage(`[ MODE ] » Đã ${(All.oa[threadID] == true) ? "bật" : "tắt"} chế độ chỉ quản trị viên nhóm được sử dụng bot.`, threadID, messageID);
}
