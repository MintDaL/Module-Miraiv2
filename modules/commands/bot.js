/**
 * @author MintDaL
 * @warn Do not edit code or edit credits
 */

module.exports.config = {
  name: "bot",
  version: "1.2.6",
  hasPermssion: 0,
  credits: "MintDaL",
  description: "Một số thông tin về bot",
  commandCategory: "nothing",
  usages: "",
  cooldowns: 5,
};
module.exports.languages = {
  vi: {
    bot:
      "TIME: %2 \nADMIN: %1 \nPREFIX: %3 \nBOTNAME: %4 \nFAST: %5Mbps PING: %6ms \nMODULE: %7 \n\nBot đã hoạt động được %8 giờ %9 phút %10 giây.\n\n» Total users: %11 \n» Total threads: %12 \n[Bạn có biết?]: %13",
  },
  en: {
    bot:
      "TIME: %2 \nADMIN: %1 \nPREFIX: %3 \nBOTNAME: %4 \nFAST: %5Mbps PING: %6ms \nMODULE: %7 \n\nBot has been working for %8 hour(s) %9 minute(s) %10 second(s). \n\n» Total users: %11 \n» Total threads: %12 \n[Do you know?]: %13",
  },
};

module.exports.run = async function ({ api, event, args, Users, permssion, getText }) {
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
    const time = process.uptime(),
	      	hours = Math.floor(time / (60 * 60)),
		      minutes = Math.floor((time % (60 * 60)) / 60),
		      seconds = Math.floor(time % 60);
    const data = [
      "Bạn không thể tìm được lệnh admin tại 'help' của MintBot",
      "Đừng mong chờ gì từ MintBot.",
      "Cái đoạn này á? Của SpermBot.",
      "Nếu muốn không lỗi lệnh thì hãy xài những lệnh có trong help vì những lệnh lỗi đã bị ẩn rồi.",
      "Đây là một con bot được các coder của MiraiProject nhúng tay vào.",
      "Muốn biết sinh nhật của Mint thì hãy xài 'birthday'.",
      "MintLuvNanh",
      "Cặc.",
      "Cút.",
      "Lồn.",
      "Bạn chưa biết.",
      "Bạn đã biết.",
      "Bạn sẽ biết.",
      "Không có gì là hoàn hảo, MintBot là ví dụ.",
      "Mirai dropped.",
      "MintBot là MiraiProject nhưng module là idea của SpermBot.",
      "Bạn không biết cách sử dụng MintBot? Đừng dùng nữa.",
      "Muốn chơi game? Qua bot khác mà chơi đây không rảnh",
      "MintBot có thể hiểu phụ nữ nhưng không thể có được họ.",
      "MintBot cân spam nhưng không có gì đáng để bạn spam."
    ];

   //Bạn có api thì bạn tự thay api vào tùy bạn ¯\_(ツ)_/¯
    var link = [
      "https://i.imgur.com/GIsYXER.png",
    ];
    
    var i = 1;
    var msg = [];
    const moment = require("moment-timezone");
    const date = moment.tz("Asia/Ho_Chi_minh").format("HH:MM:ss L");
    for (const idAdmin of listAdmin) {
      if (parseInt(idAdmin)) {
        const name = await Users.getNameUser(idAdmin);
        msg.push(`${i++}/ ${name} - ${idAdmin}`);
      }
    }
    var callback = () =>
      api.sendMessage({ body: getText("bot", msg.join("\n"), date, prefix, namebot, Math.floor(resault), Date.now() - dateNow, commands.size, hours, minutes, seconds,  global.data.allUserID.length, global.data.allThreadID.length, data[Math.floor(Math.random() * data.length)]), attachment: fs.createReadStream(__dirname + "/cache/nah.jpg"), }, event.threadID, () => fs.unlinkSync(__dirname + "/cache/nah.jpg"));
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname + "/cache/nah.jpg")).on("close", () => callback()); 
  
    /*
      return api.sendMessage(getText("bot", msg.join("\n"), date, prefix, namebot, Math.floor(resault), Date.now() - dateNow, commands.size, hours, minutes, seconds,  global.data.allUserID.length, global.data.allThreadID.length, data[Math.floor(Math.random() * data.length)]), threadID, messageID);
  Nếu bạn không có ảnh thì xóa cái return ở trên đi và thay cái return này vào idk ¯\_(ツ)_/¯  
*/
  }
};
