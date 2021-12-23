module.exports.config = {
	name: "autoSetname",
	eventType: ["log:subscribe"],
	version: "1.0.0",
	credits: "tho493",
	description: "module đi kèm với command autoSetname",
};

module.exports.run = async function({ api, event }) {
	var { threadID, messageID } = event;
	var data = global.moduleData.autoSetname[threadID];
  
	if (!data) return;
	var text = data.text;
	var on = data.on

    if (event.logMessageData.addedParticipants.some(i => i.userFbId != api.getCurrentUserID())) {
		if(text == null || on == false) return;
		for (var i = 0; i < event.logMessageData.addedParticipants.length; i++) {
			var userName = event.logMessageData.addedParticipants[i].firstName;
			var id = event.logMessageData.addedParticipants[i].userFbId;
		    var name = text.replace(/\{name}/g, userName);
            return api.changeNickname(name, threadID, id);
		}
	}
 }
