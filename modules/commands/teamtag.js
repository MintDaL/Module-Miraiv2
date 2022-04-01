module.exports.config = {
    name: 'teamtag',
    version: '1.0.0',
    hasPermssion: 0,
    credits: 'MintDaL && DungUwU',
    description: 'Custom tags',
    commandCategory: 'box',
    usages: '[text] [tag] [tag] ...',
    cooldowns: 5
};

module.exports.languages = {
    'vi': {
        'missingKey': 'Bạn chưa nhập key.',
        'missingTag': 'Vui lòng tag từ 2 người trở lên.',
        'missingKey': 'Bạn chưa nhập key.',
        'alreadyExists': 'Đã tồn tại key này. React 👍 để ghi đè lên key hiện tại.',
        'people': 'người',
        'pendingAdd': 'React 👍 để thêm tag.',
        'addSuccess': 'Thêm tag thành công.',
        'changeSuccess': 'Đã thay đổi thành công.',
        'pendingRemove': 'React 👍 để xóa tag.',
        'removeSuccess': 'Đã xóa thành công.',
        'empty': 'Chưa có tag nào.'
    },
  'en': {
        'missingKey': 'You have not entered the key.',
        'missingTag': 'You must tag 2 or more people.',
        'missingKey': 'You have not entered the key.',
        'alreadyExists': 'This key already exists. React 👍 to overwrite the current key.',
        'people': 'people',
        'pendingAdd': 'React 👍 to add teamtag.',
        'addSuccess': 'Add teamtag successfully.',
        'changeSuccess': 'Changed successfully.',
        'pendingRemove': 'React 👍 to remove teamtag.',
        'removeSuccess': 'Removed successfully.',
        'empty': 'There are no teamtag yet.'
  }
}

module.exports.handleReaction = async function ({ api, event, handleReaction, Threads, getText }) {
    const { threadID, senderID, reaction } = event;
    const { author, tag, messageID, threadData, type } = handleReaction;
    if (author == senderID || reaction == '👍') {
        if (type == 'replace' || type == 'add') {
            threadData.tags[tag.key] = Object.keys(tag.mentions).map(id => ({
                tag: tag.mentions[id],
                id
            }));
            console.log(threadData);
            await Threads.setData(threadID, { data: threadData });
            return api.sendMessage(getText(type == 'add' ? 'addSuccess' : 'changeSuccess'), threadID, () => {
                api.unsendMessage(messageID);
            });
        } else if (type == 'remove') {
            delete threadData.tags[tag.key];
            await Threads.setData(threadID, { data: threadData });
            return api.sendMessage(getText('removeSuccess'), threadID, () => {
                api.unsendMessage(messageID);
            });
        }
    }
}

module.exports.run = async function ({ api, event, args, Threads, getText }) {
    const { messageID, threadID, senderID, mentions } = event;

    const getThread = (await Threads.getData(threadID)) || {};
    if (!getThread.hasOwnProperty('data')) {
        getThread.data = {};
        await Threads.setData(threadID, { getThread });
    }
    
    const threadData = getThread.data;
    if (!threadData.hasOwnProperty('tags')) {
        threadData.tags = {};
    }

    const mentionsLength = Object.keys(mentions).length;
    const key = args[0];
    if (!key) {
        return api.sendMessage(getText('missingKey'), threadID);
    }

    if (key == 'list' || key == '-l') {
        const tagLengh = Object.keys(threadData.tags).length;
        if (tagLengh) {
            msg = Object.keys(threadData.tags).map((key, index) => `${++index}/ ${key}: ${threadData.tags[key].length} ${getText('people')}`).join('\n');
            return api.sendMessage(msg, threadID);
        } else {
            return api.sendMessage(getText('empty'), threadID);
        }
    }

    if (threadData.tags.hasOwnProperty(key)) {
        if (mentionsLength >= 2) {
            return api.sendMessage(getText('alreadyExists'), threadID, (error, info) => {
                global.client.handleReaction.push({
                    name: this.config.name,
                    messageID: info.messageID,
                    tag: {
                        key,
                        mentions
                    },
                    type: 'replace',
                    author: senderID,
                    threadData
                });
            });
        }
        
        const option = args[1];
        if (option == 'remove' || option == '-r') {
            if (threadData.tags.hasOwnProperty(key)) {
                return api.sendMessage(getText('pendingRemove'), threadID, (error, info) => {
                    global.client.handleReaction.push({
                        name: this.config.name,
                        messageID: info.messageID,
                        tag: { key },
                        type: 'remove',
                        author: senderID,
                        threadData
                    })
                });
            }
        }

        const msg = {
            body: threadData.tags[key].map(item => `${item.tag}`).join(', '),
            mentions: [
                ...threadData.tags[key]
            ]
        }
        return api.sendMessage(msg, threadID);
    } else {
        if (Object.values(mentions)[0].includes(key)) {
            return api.sendMessage(getText('missingKey'), threadID);
        }
        if (mentionsLength >= 2) {
            threadData.tags[key] = Object.keys(mentions).map(id => ({
                tag: mentions[id],
                id
            }));
            return api.sendMessage(getText('pendingAdd'), threadID, (error, info) => {
                global.client.handleReaction.push({
                    name: this.config.name,
                    messageID: info.messageID,
                    tag: {
                        key,
                        mentions
                    },
                    type: 'add',
                    author: senderID,
                    threadData
                });
            });
        } else {
            return api.sendMessage(getText('missingTag'), threadID);
        }
    }
}
