/**
 * @author MintDaL
 * @warn Do not edit code or edit credits
 */

module.exports.config = {
    name: "banbaucua",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "MintDaL",
    description: "Game bầu cua nhiều người chơi",
    commandCategory: "game-mp",
    usages: "[create/join/leave/start]",
    cooldowns: 0
};

module.exports.handleEvent = async function ({
    api,
    event,
    Currencies
}) {
    const fs = require("fs-extra")
    const axios = require("axios")
    const {
        threadID,
        messageID,
        body,
        senderID
    } = event;
    if (!body) return;
    async function checkMoney(senderID, maxMoney) {
        var i, w;
        i = (await Currencies.getData(senderID)) || {};
        w = i.money || 0
        if (w < parseInt(maxMoney)) return false;
        else return true;
    }
    async function replace(itemOne, itemTwo, itemThree) {
        var bauuu = 'https://i.imgur.com/1MZ2RUz.png',
            cuaaa = 'https://i.imgur.com/OrzfTwg.png',
            tommm = 'https://i.imgur.com/8nTJyNK.png',
            caaa = 'https://i.imgur.com/EOH26Am.png',
            naiii = 'https://i.imgur.com/sPP6Glh.png',
            gaaa = 'https://i.imgur.com/uV4eyKs.png';
        if (itemOne == "bầu") {
            var icon_1 = "🍐",
                path_1 = "bau";
            let img_bau = (await axios.get(bauuu, {
                responseType: "arraybuffer"
            })).data;
            fs.writeFileSync(__dirname + `/cache/${path_1}.png`, Buffer.from(img_bau, "utf-8"));
        }
        if (itemOne == "cua") {
            var icon_1 = "🦀",
                path_1 = "cua";
            let img_cua = (await axios.get(cuaaa, {
                responseType: "arraybuffer"
            })).data;
            fs.writeFileSync(__dirname + `/cache/${path_1}.png`, Buffer.from(img_cua, "utf-8"));
        }
        if (itemOne == "tôm") {
            var icon_1 = "🦞",
                path_1 = "tom";
            let img_tom = (await axios.get(tommm, {
                responseType: "arraybuffer"
            })).data;
            fs.writeFileSync(__dirname + `/cache/${path_1}.png`, Buffer.from(img_tom, "utf-8"));
        }
        if (itemOne == "cá") {
            var icon_1 = "🐟",
                path_1 = "ca";
            let img_ca = (await axios.get(caaa, {
                responseType: "arraybuffer"
            })).data;
            fs.writeFileSync(__dirname + `/cache/${path_1}.png`, Buffer.from(img_ca, "utf-8"));
        }
        if (itemOne == "nai") {
            var icon_1 = "🦌",
                path_1 = "nai";
            let img_nai = (await axios.get(naiii, {
                responseType: "arraybuffer"
            })).data;
            fs.writeFileSync(__dirname + `/cache/${path_1}.png`, Buffer.from(img_nai, "utf-8"));
        }
        if (itemOne == "gà") {
            var icon_1 = "🐓",
                path_1 = "ga";
            let img_ga = (await axios.get(gaaa, {
                responseType: "arraybuffer"
            })).data;
            fs.writeFileSync(__dirname + `/cache/${path_1}.png`, Buffer.from(img_ga, "utf-8"));
        }
        if (itemTwo == "bầu") {
            var icon_2 = "🍐",
                path_2 = "bau"
            let img_bau = (await axios.get(bauuu, {
                responseType: "arraybuffer"
            })).data;
            fs.writeFileSync(__dirname + `/cache/${path_2}.png`, Buffer.from(img_bau, "utf-8"));
        }
        if (itemTwo == "cua") {
            var icon_2 = "🦀",
                path_2 = "cua"
            let img_cua = (await axios.get(cuaaa, {
                responseType: "arraybuffer"
            })).data;
            fs.writeFileSync(__dirname + `/cache/${path_2}.png`, Buffer.from(img_cua, "utf-8"));
        }
        if (itemTwo == "tôm") {
            var icon_2 = "🦞",
                path_2 = "tom"
            let img_tom = (await axios.get(tommm, {
                responseType: "arraybuffer"
            })).data;
            fs.writeFileSync(__dirname + `/cache/${path_2}.png`, Buffer.from(img_tom, "utf-8"));
        }
        if (itemTwo == "cá") {
            var icon_2 = "🐟",
                path_2 = "ca"
            let img_ca = (await axios.get(caaa, {
                responseType: "arraybuffer"
            })).data;
            fs.writeFileSync(__dirname + `/cache/${path_2}.png`, Buffer.from(img_ca, "utf-8"));
        }
        if (itemTwo == "nai") {
            var icon_2 = "🦌",
                path_2 = "nai"
            let img_nai = (await axios.get(naiii, {
                responseType: "arraybuffer"
            })).data;
            fs.writeFileSync(__dirname + `/cache/${path_2}.png`, Buffer.from(img_nai, "utf-8"));
        }
        if (itemTwo == "gà") {
            var icon_2 = "🐓",
                path_2 = "ga"
            let img_ga = (await axios.get(gaaa, {
                responseType: "arraybuffer"
            })).data;
            fs.writeFileSync(__dirname + `/cache/${path_2}.png`, Buffer.from(img_ga, "utf-8"));
        }
        if (itemThree == "bầu") {
            var icon_3 = "🍐",
                path_3 = "bau"
            let img_bau = (await axios.get(bauuu, {
                responseType: "arraybuffer"
            })).data;
            fs.writeFileSync(__dirname + `/cache/${path_3}.png`, Buffer.from(img_bau, "utf-8"));
        }
        if (itemThree == "cua") {
            var icon_3 = "🦀",
                path_3 = "cua"
            let img_cua = (await axios.get(cuaaa, {
                responseType: "arraybuffer"
            })).data;
            fs.writeFileSync(__dirname + `/cache/${path_3}.png`, Buffer.from(img_cua, "utf-8"));
        }
        if (itemThree == "tôm") {
            var icon_3 = "🦞",
                path_3 = "tom"
            let img_tom = (await axios.get(tommm, {
                responseType: "arraybuffer"
            })).data;
            fs.writeFileSync(__dirname + `/cache/${path_3}.png`, Buffer.from(img_tom, "utf-8"));
        }
        if (itemThree == "cá") {
            var icon_3 = "🐟",
                path_3 = "ca"
            let img_ca = (await axios.get(caaa, {
                responseType: "arraybuffer"
            })).data;
            fs.writeFileSync(__dirname + `/cache/${path_3}.png`, Buffer.from(img_ca, "utf-8"));
        }
        if (itemThree == "nai") {
            var icon_3 = "🦌",
                path_3 = "nai"
            let img_nai = (await axios.get(naiii, {
                responseType: "arraybuffer"
            })).data;
            fs.writeFileSync(__dirname + `/cache/${path_3}.png`, Buffer.from(img_nai, "utf-8"));
        }
        if (itemThree == "gà") {
            var icon_3 = "🐓",
                path_3 = "ga"
            let img_ga = (await axios.get(gaaa, {
                responseType: "arraybuffer"
            })).data;
            fs.writeFileSync(__dirname + `/cache/${path_3}.png`, Buffer.from(img_ga, "utf-8"));
        }
        var imgBaucua = [];
        imgBaucua.push(fs.createReadStream(__dirname + `/cache/${path_1}.png`));
        imgBaucua.push(fs.createReadStream(__dirname + `/cache/${path_2}.png`));
        imgBaucua.push(fs.createReadStream(__dirname + `/cache/${path_3}.png`));
        var msg = {
            body: `» Kết quả: ${icon_1} | ${icon_2} | ${icon_3}`,
            attachment: imgBaucua
        }
        api.sendMessage(msg, threadID, messageID)
    }
    const typ = ['bầu', 'cua', 'tôm', 'cá', 'nai', 'gà'];

    const itemOne = typ[Math.floor(Math.random() * typ.length)];
    const itemTwo = typ[Math.floor(Math.random() * typ.length)];
    const itemThree = typ[Math.floor(Math.random() * typ.length)];

    var ketqua = [itemOne, itemTwo, itemThree]
    const choosee = body.split(" ")

    if (typ.includes(choosee[0].toLowerCase()) == true) {
        if (!global.baucua) return
        const gameThread = global.baucua.get(threadID) || {};
        if (!gameThread) return;
        if (gameThread.start != true) return;
        if (!choosee[1]) return api.sendMessage('Vui lòng nhập số tiền cược!', threadID, messageID);
        if (await checkMoney(senderID, choosee[1]) == false) return api.sendMessage('Bạn không đủ tiền cược!', threadID, messageID)
        else {
            var playerGame = gameThread.player.length
            if (!gameThread.player.find(i => i.userID == senderID)) return;

            else {
                var s, q;
                var s = gameThread.player.findIndex(i => i.userID == senderID);
                var q = gameThread.player[s];
                if (q.choose.status == true) return api.sendMessage('Bạn đã chọn rồi không thể chọn lại!', threadID, messageID);
                else {
                    if (typ.includes(choosee[0].toLowerCase()) == true) {
                        gameThread.player.splice(s, 1);
                        gameThread.player.push({
                            name: q.name,
                            userID: senderID,
                            choose: {
                                status: true,
                                msg: choosee[0].toLowerCase(),
                                money: parseInt(choosee[1])
                            }
                        });
                        api.sendMessage(`Người chơi ${q.name} đã chọn ${choosee[0].toLowerCase()} với mức đặt cược ${choosee[1]}$`, threadID, messageID);
                    }
                    var vv = 0,
                        vvv = gameThread.player.length;
                    for (var c of gameThread.player) {
                        if (c.choose.status == true) vv++;
                    }
                    if (vv == vvv) {
                        let gifBaucua = (await axios.get('https://media.giphy.com/media/lTYLtiktVNr0k3SVOP/giphy.gif', {
                            responseType: "arraybuffer"
                        })).data;
                        fs.writeFileSync(__dirname + `/cache/baucua.gif`, Buffer.from(gifBaucua, "utf-8"));
                        var gifBaucua_push = [];
                        gifBaucua_push.push(fs.createReadStream(__dirname + `/cache/baucua.gif`));
                        var msg1 = {
                            body: "Lắc không xịt đời không nể.",
                            attachment: gifBaucua_push
                        }
                        api.sendMessage(msg1, threadID, async (error, info) => {
                            await new Promise(resolve => setTimeout(resolve, 3000));
                            api.unsendMessage(info.messageID);
                        }, messageID);
                        await new Promise(resolve => setTimeout(resolve, 7000));
                        await replace(itemOne, itemTwo, itemThree)
                        await new Promise(resolve => setTimeout(resolve, 3000));
                        await checkWin(ketqua, gameThread);
                    } else return;
                }
            }
        }
    }
    async function checkWin(ketqua, gameThread) {
        var checkwin = gameThread.player.filter(i => ketqua.includes(i.choose.msg) == true)
        var checklose = gameThread.player.filter(i => ketqua.includes(i.choose.msg) == false)
        var msg;
        if (checkwin.length != 0) {
            msg = '=== [ WINNER ] ===\n'
            for (let i of checkwin) {
                var checkItem = ketqua.filter(a => a == i.choose.msg)
                await Currencies.increaseMoney(i.userID, parseInt(i.choose.money) * checkItem.length);
                msg += `» ${i.name} đặt ${i.choose.msg} nên đã thắng ${parseInt(i.choose.money) * checkItem.length}$\n`
            }
        }
        if (checklose.length != 0) {
            msg += '\n=== [ LOSER ] ===\n'
            for (let i of checklose) {
                await Currencies.decreaseMoney(i.userID, parseInt(i.choose.money));
                msg += `» ${i.name} đặt ${i.choose.msg} nên đã thua ${i.choose.money}$\n`
            }
        }
        global.baucua.delete(threadID);
        api.sendMessage(msg, threadID, messageID);
    }
}
module.exports.run = async function ({
    api,
    event,
    args,
    Threads,
    Users,
    Currencies,
    getText
}) {
    try {
        if (!global.baucua) global.baucua = new Map();
        const {
            threadID,
            messageID,
            senderID
        } = event;
        var gameThread = global.baucua.get(threadID);
        switch (args[0]) {
            case "create":
            case "new":
            case "-c": {
                if (await checkMoney(senderID, 50) == false) return api.sendMessage('Yêu cầu có ít nhất 50$ để tham gia!', threadID, messageID)
                if (global.baucua.has(threadID)) return api.sendMessage('Đã có bàn bầu cua tại nhóm này.', threadID, messageID);
                var name = await Users.getNameUser(senderID);
                global.baucua.set(threadID, {
                    box: threadID,
                    start: false,
                    author: senderID,
                    player: [{
                        name,
                        userID: senderID,
                        choose: {
                            status: false,
                            msg: null,
                            money: null
                        }
                    }]
                });
                return api.sendMessage("Tạo bàn bầu cua thành công! Để tham gia bạn hãy nhập 'baucua join'", threadID, messageID);
                break;
            }
            case "join":
            case "-j": {
                if (await checkMoney(senderID, 50) == false) return api.sendMessage('Yêu cầu có ít nhất 50$ để tham gia!', threadID, messageID)
                if (!global.baucua.has(threadID)) return api.sendMessage('Không có bàn bầu cua nào để tham gia!', threadID, messageID);
                if (gameThread.start == true) return api.sendMessage('Bàn đã bắt đầu.', threadID, messageID);
                if (gameThread.player.find(i => i.userID == senderID)) return api.sendMessage('Bạn đã tham gia trước đó rồi!', threadID, messageID);
                var name = await Users.getNameUser(senderID);
                gameThread.player.push({
                    name,
                    userID: senderID,
                    choose: {
                        stats: false,
                        msg: null,
                        money: null
                    }
                });
                global.baucua.set(threadID, gameThread);
                return api.sendMessage('Tham gia thành công!', threadID, messageID);
                break;
            }
            case "leave":
            case "-l'": {
                if (!global.baucua.has(threadID)) return api.sendMessage('Không có bàn bầu cua nào để rời khỏi!', threadID, messageID);
                if (!gameThread.player.find(i => i.userID == senderID)) return api.sendMessage('Bạn chưa tham gia nên không thể rời!', threadID, messageID);
                if (gameThread.start == true) return api.sendMessage('Game đã bắt đầu rồi, hơi muộn nha!', threadID, messageID);
                if (gameThread.author == senderID) {
                    global.baucua.delete(threadID);
                    var name = await Users.getNameUser(senderID);
                    return api.sendMessage('Author đã rời khỏi bàn, đồng nghĩa với việc bàn sẽ bị giải tán!', threadID, messageID);
                } else {
                    gameThread.player.splice(gameThread.player.findIndex(i => i.userID == senderID), 1);
                    global.baucua.set(threadID, gameThread);
                    var name = await Users.getNameUser(senderID);
                    api.sendMessage('Rời thành công!', threadID, messageID);
                    return api.sendMessage(`${name} đã rời bàn, còn lại ${gameThread.player.length} người chơi.`, threadID);
                }
                break;
            }
            case "start":
            case "-s": {
                if (!gameThread) return api.sendMessage('Không có bàn bầu cua nào để bắt đầu!', threadID, messageID);
                if (gameThread.author != senderID) return api.sendMessage('Chỉ có người tạo mới có thể bắt đầu!', threadID, messageID);
                if (gameThread.player.length <= 1) return api.sendMessage('Số lượng người chơi phải từ 2 trở lên!', threadID, messageID);
                if (gameThread.start == true) return api.sendMessage('Game đã bắt đầu trước đó', threadID, messageID);
                gameThread.start = true;
                global.baucua.set(threadID, gameThread);
                return api.sendMessage(`Bắt đầu! Xin mời ${gameThread.player.length} người chơi chọn linh vật muốn chọn và số tiền muốn cược`, threadID);
                break;
            }
            case "end":
            case "-e": {
                if (!gameThread) return api.sendMessage('Không có bàn bầu cua nào để kết thúc!', threadID, messageID);
                if (gameThread.author != senderID) return api.sendMessage('Chỉ có người tạo mới có thể kết thúc!', threadID, messageID);
                global.baucua.delete(threadID);
                return api.sendMessage(`Kết thúc thành công`, threadID, messageID);
                break;
            }
            default: {
                return api.sendMessage("=== [ BAUCUA ] ===\nNhà cái sẽ lắc ba xúc xắc và người chơi sẽ chọn một trong sáu linh vật kèm số tiền muốn cược. Khi khui ếu trong ba viên xúc xắc xuất hiện linh vật mà người chơi đã đặt cược tiền, họ sẽ lấy lại tiền cược và nhà cái phải trả số tiền bằng với số lần linh vật đó xuất hiện nhân với số tiền cược.\n\nHướng dẫn chơi bầu cua:\n» create: để tạo bàn chơi\n» start : để bắt đầu ván đấu\n» join : để tham gia ván đấu\n» leave : để rời khỏi bàn chơi", threadID, messageID);
            }
        }
    } catch (err) {
        return api.sendMessage(getText("error", err), event.threadID, event.messageID);
    }
    async function checkMoney(senderID, maxMoney) {
        var i, w;
        i = (await Currencies.getData(senderID)) || {};
        w = i.money || 0
        if (w < parseInt(maxMoney)) return false;
        else return true;
    }
}
