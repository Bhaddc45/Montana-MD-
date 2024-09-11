const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER || "263789432940"  // Make SURE its Not Be Empty, Else Bot Stoped And Errors,
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://salmanahmad:s4salmanyt@cluster0.szcj2eo.mongodb.net/?retryWrites=true&w=majority"
global.port= process.env.PORT || 5000
global.email = 'xkenton0@gmail.com'
global.github = 'https://github.com/montanatech/montana-md-'
global.location = 'mutare zim'
global.gurl = 'https://instagram.com/itz_shaikho/' // add your username
global.sudo = process.env.SUDO || '263789432940' 
global.devs = '263789432940';
global.website = 'https://github.com/montanatech/montana-md-' //wa.me/+91000000000000
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://telegra.ph/file/3c341828d86ee7a89c73f.jpg'
module.exports = {
  sessionName:  process.env.SESSION_ID ||  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTU05cnF6Ykp3N2w0dzQ3cFdaUmZjNFNhS2dPWG9FbW84SjQvdTZrWGQzYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOTcvaklKTG02a1hpMTJnbytyM29NQ0dlaVlHTGFhY0xQVE4ranNIRGgyMD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI0Q1Y5SnYrT3J5YWV0NU03SDlJRklHQjM0SDdROTVRUVZIUmlLQU0vYm44PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJUWGhjTEhuaEhFT3hZLzFsNnoxaHFYUDJaYW0vcFVNbi9KOEJkcmlCLzMwPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImFPUXpmSVJvcTZ3YkVveGNjSFNuTkg2eWlDYlM2NWZLK2ZQVEU1b3JuMWc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IitobWZMbm1sUXRTUDlRVzV1dW9UdmMyUnJJNmJVa2gzbi9GcG51OC9WQUU9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaU41UHBkL1JEZEtEQXFLUG1KdExnSDhFdHRZdFMyYUplb2J2U0YySXUxVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTUp2TWlUVjhyajF2SUlGaEl6eGUzY0FLVkw0OG50VlBSN2xXWUtTUFBoTT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlhNdVRNQ1Z0N2cxWmRKbTdmUWt5K2pySkFQMnpJa2EzditSbXkyQnJmcHNjUDJuWnlWU1JDVjBxd1dBMGRUaGlKbTByMWFtbGY1Y2tzZmxXTTVYWUNBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6ODUsImFkdlNlY3JldEtleSI6IlBUd3Q5elh6d0s3ZFdaRDB0MzI5QThIc1ZCTDZodDlzWCsyWktSL1VkVlU9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6ImctZkM0Y044VE5xZjY1WkpHa0hmQmciLCJwaG9uZUlkIjoiN2YzYzcyYzgtNmQ5Yy00NzQxLWJiMzYtMzFjODQ3YWY3ZmNkIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlY1TW9Eblppd1ZHM2RxS0pGbkt3b3VERUx2dz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIvL3JmQ3VzeFp5bDdBWGl6OUczWXo3Q3V6Vm89In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiMVhGV0RSWTciLCJtZSI6eyJpZCI6IjI2MzcxMzM0NzM3ODoxN0BzLndoYXRzYXBwLm5ldCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDS0wxMTVzSEVMN0dnYmNHR0FNZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiQ0U4M2ZOTmw0U3ZHcUg2aWJyWVZFT0xhZU9jTnFSUkxMOGQ2M0dMZnFVbz0iLCJhY2NvdW50U2lnbmF0dXJlIjoiaHJwek1kTDJjWXpJcDF4MHdyU3FZQzdYV3JOMEdCaDd0aERrb0dyUkF0M0NRUk53VXp6UkYreFEyWEZkd3BRSjVmS3NjZ2N1Vi8rQzA5RFMwWmY5Qnc9PSIsImRldmljZVNpZ25hdHVyZSI6Ilp1amkzZkdCdFdtUnJOSUJHVDY5OG16em5Yb1JOU2ZOb1pGaTlyNGZXczBpWW1Nc0licmRBSWYrbUswcyttcnRSZHBPMnFYZHJ1Y2VWeVRVWkxaWEN3PT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjYzNzEzMzQ3Mzc4OjE3QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlFoUE4zelRaZUVyeHFoK29tNjJGUkRpMm5qbkRha1VTeS9IZXR4aTM2bEsifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjU5ODE1MTUsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBSm10In0=",  //PUT Session Id Here, 
  author:  process.env.PACK_AUTHER ||  '',
  packname:  process.env.PACK_NAME || '',
   
  botname:   process.env.BOT_NAME === undefined ? "MONTANA" : process.env.BOT_NAME,
  ownername: process.env.OWNER_NAME === undefined ? 'MAGICAL-KX' : process.env.OWNER_NAME,  
  auto_read_status :  process.env.AUTO_READ_STATUS === undefined ? false : process.env.AUTO_READ_STATUS,
  autoreaction:  process.env.AUTO_REACTION  === undefined ? false : process.env.AUTO_REACTION ,
  antibadword :  process.env.ANTI_BAD_WORD === undefined ? 'nbwoed' : process.env.ANTI_BAD_WORD,
  alwaysonline:  process.env.ALWAYS_ONLINE === undefined ? false : process.env.ALWAYS_ONLINE,
  antifake : process.env.FAKE_COUNTRY_CODE === undefined ? '971' : process.env.FAKE_COUNTRY_CODE,
  readmessage:  process.env.READ_MESSAGE === undefined ? false : process.env.READ_MESSAGE,
  auto_status_saver: process.env.AUTO_STATUS_SAVER === undefined ? false : process.env.AUTO_STATUS_SAVER,
  HANDLERS:  process.env.PREFIX === undefined ? '.' : process.env.PREFIX,
  warncount : process.env.WARN_COUNT === undefined ? 3 : process.env.WARN_COUNT,
  disablepm:  process.env.DISABLE_PM === undefined ? false : process.env.DISABLE_PM,
  levelupmessage:  process.env.LEVEL_UP_MESSAGE === undefined ? false : process.env.LEVEL_UP_MESSAGE,
  antilink:  process.env.ANTILINK_VALUES === undefined ? 'chat.whatsapp.com' : process.env.ANTILINK_VALUES,
  antilinkaction: process.env.ANTILINK_ACTION === undefined ? 'remove' : process.env.ANTILINK_ACTION,
  BRANCH: 'main', 
  ALIVE_MESSAGE:  process.env.ALIVE_MESSAGE === undefined ? '' : process.env.ALIVE_MESSAGE,
  autobio:  process.env.AUTO_BIO === undefined ? false : process.env.AUTO_BIO,
  OPENAI_API_KEY:  process.env.OPENAI_API_KEY === undefined ? false : process.env.OPENAI_API_KEY,
  heroku:  process.env.heroku === undefined ? false : process.env.heroku,
  HEROKU: {
    HEROKU: process.env.HEROKU ||false,
    API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,
    APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME
},
  VERSION: process.env.VERSION === undefined ? 'v.0.0.3' : process.env.VERSION,
  LANG: process.env.THEME|| 'GOJO',
  WORKTYPE: process.env.WORKTYPE === undefined ? 'public' : process.env.WORKTYPE
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
