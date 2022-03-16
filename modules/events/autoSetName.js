module.exports.config = {
	name: "autosetname",
	eventType: ["log:subscribe"],
	version: "1.0.3",
	credits: "datoccho",
	description: "Tự động set biệt danh thành viên mới"
};

module.exports.run = async function ({ api, event, Users }) {
	const { threadID, messageID } = event;
	const axios = global.nodemodule["axios"];
	var memJoin = event.logMessageData.addedParticipants.map(info => info.userFbId)
	for (let idUser of memJoin) {
		const { readFileSync, writeFileSync } = global.nodemodule["fs-extra"];
		const { join } = global.nodemodule["path"]
		const pathData = join("./modules/commands", "cache", "testsetname.json");
		var dataJson = JSON.parse(readFileSync(pathData, "utf-8"));
		var thisThread = dataJson.find(item => item.threadID == threadID) || { threadID, nameUser: [] };
		if (thisThread.nameUser.length == 0) return
		if (thisThread.nameUser.length != 0) {
			var setName = thisThread.nameUser;
			await new Promise(resolve => setTimeout(resolve, 1000));
			//var namee1 = await api.getUserInfo(idUser)
			const { data } = await axios.get(`https://graph.facebook.com/v13.0/${idUser}?fields=id%2Cname&access_token=1080073726172658%7CFFAi0r50Q00P6e6Q1FzzR5Q4wdw`)
			api.changeNickname(setName + ' ' + data.name, threadID, idUser);
		}
	}
}
