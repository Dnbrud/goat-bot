module.exports = {
  config: {
    name: "luffy",
    version: "1.0.0",
    author: { 
      name: "", 
      contacts: ""
    },
    cooldowns: 5,
    role: 0,
    shortDescription: "",
    longDescription: "",
    category: "",
    guide: "",
  },
  start: async function({ globalGoat, args, message }) {
    const axios = require("axios");
  	const luffy = __dirname+"cache/luffy.png";
    fs.writeFileSync(luffy);
  
    return message.reply({
      body: msg,
      attachment: fs.createReadStream(luffy)
    }, () => fs.unlinkSync(luffy));
    
  }
};