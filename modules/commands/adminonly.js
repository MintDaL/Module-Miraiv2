/**
* @author MewDevPro
* @warn Do not edit code or edit credits
*/

module.exports.config = {
  name: "adminonly",
  version: "1.0.1",
  hasPermssion: 2,
  credits: "MewDevPro",
  description: "Cài đặt bot về chế độ chỉ admin bot được sử dụng bot",
  commandCategory: "system",
  cooldowns: 5,
};

module.exports.run = async function ({ api, event }) {
  const { threadID, messageID } = event;
  const fs = require('fs-extra');
  const path = require('path');
  const oaPath = path.resolve(__dirname, 'cache', 'oa.json');
  const All = require(oaPath);
  All.oa[threadID] = !All.oa[threadID] ? true : false;
  fs.writeFileSync(oaPath, JSON.stringify(All, null, 4));
  return api.sendMessage(`[ MODE ] » Đã ${(All.oa[threadID] == true) ? "bật" : "tắt"} chế độ chỉ người điều hành bot được sử dụng.`, threadID, messageID);
}
