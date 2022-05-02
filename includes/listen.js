var oaPath = path.resolve(process.cwd(), 'modules', 'commands', 'cache', 'oa.json');
    if (!fs.existsSync(oaPath)) {
      fs.writeFileSync(oaPath, JSON.stringify({ "oa": {}, "oab": {} }, null, 4));
      return logger('Create OA.json', '[ MewDevPro ]')
    }
    var All = require(oaPath);
    if (!All.oa.hasOwnProperty(event.threadID)) {
      All.oa[event.threadID] = false;
      fs.writeFileSync(oaPath, JSON.stringify(All, null, 2));
    }
    if (!All.oab.hasOwnProperty(event.threadID)) {
      All.oab[event.threadID] = false;
      fs.writeFileSync(oaPath, JSON.stringify(All, null, 2));
    }
    if (All.oa[event.threadID])
      if (!ADMINBOT.some(e => e == event.senderID)) return;
    if (All.oab[event.threadID]) {
      var { adminIDs } = threadInfo.get(event.threadID);
      if (!ADMINBOT.some(e => e == event.senderID) && !adminIDs.map(e => String(e.id)).includes(event.senderID)) return;
    }
