/*
* @author ProCoderMew
* @warn Do not edit code or edit credits
* Để sử dụng lệnh hãy thay file listen.js vào
*/

module.exports.config = {
name: "adminboxonly",
version: "1.0.1",
hasPermssion: 1,
credits: "ProCoderMew",
description: "Cài đặt bot về chế độ chỉ admin bot được sử dụng bot",
commandCategory: "system",
cooldowns: 5,
};

module.exports.run = async function({ api, event, Threads }) {
const { threadID, messageID } = event;
let data = (await Threads.getData(threadID)).data;
const threadInfo = await api.getThreadInfo(event.threadID);
await Threads.setData(event.threadID, { name: threadInfo.name, threadInfo });
global.data.threadInfo.set(event.threadID, threadInfo);
if (typeof data["only_admin_group"] == "undefined" || data["only_admin_group"] == false) data["only_admin_group"] = true;
else data["only_admin_group"] = false;

await Threads.setData(threadID, { data });
global.data.threadData.set(threadID, data);
return api.sendMessage(`[ MODE ] » Đã ${(oa[threadID] == true) ? "bật" : "tắt"} chế độ chỉ quản trị viên được sử dụng bot.`, threadID, messageID);
}
