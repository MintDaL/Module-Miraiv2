/**
 * @author MintDaL
 * @warn Do not edit code or edit credits
 */

module.exports.config = {
  name: "bot",
  version: "0.0.1",
  hasPermssion: 0,
  credits: "MintDaL",
  description: "Một số thông tin về bot",
  commandCategory: "other",
  usages: "",
  cooldowns: 5,
};
module.exports.languages = {
  vi: {
    listAdmin:
      "TIME: %2 \nBOTNAME: %4\nADMIN: %1\nPREFIX: %3 \nMODULES: %7\nPING: %6ms \nFAST: %5Mbps",
  },
  en: {
    listAdmin:
      "TIME: %2 \nBOTNAME: %4\nADMIN: %1\nPREFIX: %3 \nMODULES: %7\nPING: %6ms \nFAST: %5Mbps",
  },
};

module.exports.run = async function ({
  api,
  event,
  args,
  Users,
  permssion,
  getText,
}) {
  const content = args.slice(1, args.length);
  var _0x5da2 = [
    "\x1B\x5B\x33\x33\x6D\x5B\x20\x41\x55\x54\x48\x4F\x52\x20\x5D\x1B\x5B\x33\x37\x6D\x20\xBB\x20\x3D\x3D\x3D\x3D\x3D\x3D\x20\x4D\x69\x6E\x74\x44\x61\x4C\x20\x3D\x3D\x3D\x3D\x3D\x3D",
    "\x6C\x6F\x67",
    "\x4D\x69\x6E\x74\x44\x61\x4C",
    "\x74\x65\x78\x74\x53\x79\x6E\x63",
    "\x66\x69\x67\x6C\x65\x74",
    "\x1B\x5B\x33\x33\x6D\x5B\x20\x4D\x69\x6E\x74\x20\x5D\x1B\x5B\x33\x37\x6D\x20\xBB\x20\x48\x69\x21\x20\x48\x61\x76\x65\x20\x61\x20\x67\x6F\x6F\x64\x20\x64\x61\x79\x2E",
  ];
  console[_0x5da2[1]](_0x5da2[0]);
  console[_0x5da2[1]](require(_0x5da2[4])[_0x5da2[3]](_0x5da2[2]));
  console[_0x5da2[1]](_0x5da2[5]);
  const { threadID, messageID, mentions } = event;
  const { configPath } = global.client;
  const { ADMINBOT } = global.config;
  const { userName } = global.data;
  const request = global.nodemodule["request"];
  const fs = global.nodemodule["fs-extra"];
  const { writeFileSync } = global.nodemodule["fs-extra"];
  const mention = Object.keys(mentions);
  delete require.cache[require.resolve(configPath)];
  var config = require(configPath);
  const listAdmin = ADMINBOT || config.ADMINBOT || [];
  {
    const prefix = config.PREFIX;
    const namebot = config.BOTNAME;
    const { commands } = global.client;
    const fast = global.nodemodule["fast-speedtest-api"];
    const speedTest = new fast({
      token: "YXNkZmFzZGxmbnNkYWZoYXNkZmhrYWxm",
      verbose: false,
      timeout: 1000,
      https: true,
      urlCount: 5,
      bufferSize: 8,
      unit: fast.UNITS.Mbps,
  });
    const resault = await speedTest.getSpeed();
    const dateNow = Date.now();
    var link = [
      "https://i.imgur.com/GIsYXER.png"
    ];
 //Nếu bạn muốn random ảnh trong api thì thay api vào tùy bạn  ¯\_(ツ)_/¯
    var i = 1;
    var msg = [];
    const moment = require("moment-timezone");
    const time = moment.tz("Asia/Ho_Chi_minh").format("HH:MM:ss L");
    for (const idAdmin of listAdmin) {
      if (parseInt(idAdmin)) {
        const name = await Users.getNameUser(idAdmin);
        msg.push(`${i++}/ ${name} - ${idAdmin}`);
      }
    }
    var callback = () =>
      return api.sendMessage(
        {
          body: getText(
            "listAdmin",
            msg.join("\n"),
            time,
            prefix,
            namebot,
            Math.floor(resault),
            Date.now() - dateNow,
            commands.size
          ),
          attachment: fs.createReadStream(__dirname + "/cache/30.jpg"),
        },
        event.threadID,
        () => fs.unlinkSync(__dirname + "/cache/30.jpg")
      );
    return request(encodeURI(link[Math.floor(Math.random() * link.length)]))
      .pipe(fs.createWriteStream(__dirname + "/cache/30.jpg"))
      .on("close", () => callback());
    /*
    return api.sendMessage(getText("listAdmin", msg.join("\n"), time, prefix, namebot, Math.floor(resault), Date.now() - dateNow, commands.size), threadID, messageID);
 Nếu bạn đéo muốn random ảnh thì xóa var link và phần return ở trên và thay cái return này vào 
*/
  }
};
