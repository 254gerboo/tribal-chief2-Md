/**

//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//                                                                                                      //
//                                ＷＨＡＴＳＡＰＰ ＢＯＴ－ＭＤ ＢＥＴＡ                                   //
//                                                                                                      // 
//                                        Ｖ：０．０．１                                                              //
//                                                                                                      //
//                                                                                                      //
//                                                                                                      //
//══════════════════════════════════════════════════════════════════════════════════════════════════════//

CURRENTLY RUNNING ON BETA VERSION!!
*
   * @project_name : tribal-chief-Md
   * @author : 254gerboo
   * @description : tribalchief-Md ,A Multi-functional whatsapp user bot.
   * @version 0.0.1
*
   * Licensed under the  GPL-3.0 License;
* 
   * ┌┤Created By 254gerboo.
   * © 2024 tribal-chief-Md ✭ ⛥.
* 
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
   * SOFTWARE.
**/

const { sck,smd, jsonformat, botpic,send, TelegraPh, RandomXP, Config, tlang, warndb, sleep,getAdmin,getBuffer, prefix } = require('../lib')
const { Sticker, createSticker, StickerTypes } = require("wa-sticker-formatter");
const moment = require("moment-timezone");
const Levels = require("discord-xp");
const fs = require('fs-extra')
const Jimp = require("jimp");
const sᴜʜᴀɪʟ_ᴍᴅ = require('../lib/commands')






//---------------------------------------------------------------------------
function _0x5bfb(_0x20d897,_0x9071fb){const _0x1f9f0c=_0x1f9f();return _0x5bfb=function(_0x5bfb03,_0x2b4a8c){_0x5bfb03=_0x5bfb03-0x16b;let _0x4d2852=_0x1f9f0c[_0x5bfb03];return _0x4d2852;},_0x5bfb(_0x20d897,_0x9071fb);}function _0x1f9f(){const _0x5967a8=['*_Uhh\x20Please,\x20provide\x20group\x20link_*','903025fngOhQ','push','6AchSBL','replace','\x20My\x20new\x20Group```\x0a\x0a*You\x20also\x20add\x20peoples\x20in\x20newGc*\x0a\x09```just\x20reply\x20or\x20mention\x20Users```\x0a','*Error\x20in\x20Joining\x20Group*\x20\x0aError\x20:\x20','includes','getMonth','sendMessage','text','getFullYear','270273glcuWM','desc','info','join','caption','\x20\x0aGJid;\x20```','creategc','*description:*\x20','padStart','mentionedJid','toString','size','\x20no','3604390UHjVpX','\x0a\x0acmdName:\x20ginfo\x0a','substring','reply','group','72edBdEv','*_Hey\x20Buddy,\x20Welcome\x20to\x20new\x20Group_*\x0a','quoted','owner','<group\x20link.>','newgc','chat.whatsapp.com','\x0a*createdAt:*\x20','bot','Create\x20New\x20Group','\x20\x20```\x0a*Muted:*\x20','2bbaQvT','\x20yes','sender','977456BlGqGI','\x0a\x0acmdName:Join\x0a','𝗦𝗨𝗛𝗔𝗜𝗟-𝗠𝗗','142547lWwoRy','Lg6uxvTbc9UFv8853M4Le9','\x0a\x0aCreator:\x20wa.me/','send','groupAcceptInvite','then','toLowerCase','restrict','getDate','489475UPazQO','get\x20group\x20info\x20by\x20link','ngroup','https://chat.whatsapp.com/','error\x20in\x20group\x20\x20jining,\x20','138879VBUnXj','client','error','creation','subject','error\x20while\x20creating\x20new\x20gc\x0a\x09','groupCreate','trim','split','\x0a*Its\x20a\x20command\x20to\x20create\x20new\x20Gc*\x0a\x09```Ex:\x20','match','log','newgroup','groupGetInviteInfo','announce'];_0x1f9f=function(){return _0x5967a8;};return _0x1f9f();}const _0x3f1150=_0x5bfb;(function(_0x4ebe34,_0x53fa98){const _0x53c1bf=_0x5bfb,_0x32dbbc=_0x4ebe34();while(!![]){try{const _0x513541=-parseInt(_0x53c1bf(0x187))/0x1+-parseInt(_0x53c1bf(0x181))/0x2*(parseInt(_0x53c1bf(0x1b0))/0x3)+parseInt(_0x53c1bf(0x184))/0x4+-parseInt(_0x53c1bf(0x1a5))/0x5+-parseInt(_0x53c1bf(0x1a7))/0x6*(-parseInt(_0x53c1bf(0x190))/0x7)+-parseInt(_0x53c1bf(0x176))/0x8*(parseInt(_0x53c1bf(0x195))/0x9)+parseInt(_0x53c1bf(0x171))/0xa;if(_0x513541===_0x53fa98)break;else _0x32dbbc['push'](_0x32dbbc['shift']());}catch(_0x5ecaab){_0x32dbbc['push'](_0x32dbbc['shift']());}}}(_0x1f9f,0x1deee),smd({'pattern':_0x3f1150(0x1b3),'desc':'joins\x20group\x20by\x20link','category':_0x3f1150(0x175),'filename':__filename,'use':'<group\x20link.>'},async(_0x4d5df5,_0x319d09,_0x589a3c,{isCreator:_0xe5bcb9})=>{const _0x514ccf=_0x3f1150;try{if(!_0xe5bcb9)return _0x319d09[_0x514ccf(0x174)](tlang()[_0x514ccf(0x179)]);let _0x30ede2=_0x589a3c[_0x514ccf(0x18d)]()[_0x514ccf(0x1ab)](_0x514ccf(0x17c))?_0x589a3c:_0x319d09['quoted']?_0x319d09[_0x514ccf(0x178)][_0x514ccf(0x1ae)]:'';const _0x1d3c95=/https:\/\/chat\.whatsapp\.com\/[A-Za-z0-9]{22}/g,_0x1d4f55=_0x30ede2[_0x514ccf(0x19f)](_0x1d3c95);if(!_0x1d4f55)return await _0x319d09['reply'](_0x514ccf(0x1a4));let _0x1ecde2=_0x1d4f55[0x0]['split']('https://chat.whatsapp.com/')[0x1]['trim']();await Void[_0x514ccf(0x196)][_0x514ccf(0x18b)](_0x1ecde2)[_0x514ccf(0x18c)](_0x4cb9de=>send(_0x319d09,'_Joined_',{},'',_0x319d09))['catch'](_0x182619=>_0x319d09[_0x514ccf(0x197)](_0x514ccf(0x1aa)+_0x182619+'\x0a\x0acmdName:Join\x0a'));}catch(_0x3b97f1){console['log'](_0x514ccf(0x194),_0x3b97f1),_0x319d09[_0x514ccf(0x197)](_0x514ccf(0x1aa)+_0x3b97f1+_0x514ccf(0x185));}}),smd({'pattern':_0x3f1150(0x17b),'alias':[_0x3f1150(0x1b6),_0x3f1150(0x1a1),_0x3f1150(0x192)],'desc':_0x3f1150(0x17f),'category':_0x3f1150(0x175),'filename':__filename,'use':_0x3f1150(0x17a)},async(_0x2d3acd,_0x1f274d,_0x102b29,{isCreator:_0x713673,cmd:_0x541725,cmdName:_0x28bcd6})=>{const _0x27b752=_0x3f1150;if(!_0x713673)return _0x1f274d[_0x27b752(0x174)](tlang()[_0x27b752(0x179)]);try{if(!_0x102b29)return await _0x1f274d[_0x27b752(0x174)]('*_provide\x20Name\x20to\x20Create\x20new\x20Group!!!_*\x0a*_Ex:\x20'+(prefix+_0x541725)+'\x20My\x20fab\x20Group\x20@user1,2,3.._*');if(_0x102b29[_0x27b752(0x18d)]()===_0x27b752(0x1b2))return await _0x1f274d[_0x27b752(0x18a)]((_0x27b752(0x19e)+(prefix+_0x541725)+_0x27b752(0x1a9))[_0x27b752(0x19c)]());let _0xb81ef4=[_0x1f274d[_0x27b752(0x183)]];_0x1f274d[_0x27b752(0x178)]&&_0xb81ef4[_0x27b752(0x1a6)](_0x1f274d['quoted'][_0x27b752(0x183)]);if(_0x1f274d['mentionedJid']&&_0x1f274d['mentionedJid'][0x0]){_0xb81ef4[_0x27b752(0x1a6)](..._0x1f274d[_0x27b752(0x16d)]);try{mentionJids['forEach'](_0x34a224=>{const _0x14a855=_0x27b752;var _0x33c26c=_0x34a224[_0x14a855(0x19d)]('@')[0x0]['trim']();_0x102b29=_0x102b29[_0x14a855(0x1a8)](new RegExp('@'+_0x33c26c,'g'),'');});}catch{}}const _0xd420c0=_0x102b29[_0x27b752(0x173)](0x0,0x3c),_0x4572f9=await _0x2d3acd[_0x27b752(0x17e)][_0x27b752(0x19b)](_0xd420c0,[..._0xb81ef4]);let _0x474fc8=await _0x2d3acd[_0x27b752(0x17e)][_0x27b752(0x1ad)](_0x4572f9['id'],{'text':_0x27b752(0x177)+Config[_0x27b752(0x1b4)]});try{var _0x20a6a8=await _0x2d3acd[_0x27b752(0x17e)]['groupInviteCode'](_0x4572f9['id']);}catch{var _0x20a6a8=![];}var _0x2a88ec=_0x27b752(0x193),_0xdca7a9=''+_0x2a88ec+_0x20a6a8,_0x2b0a23={'externalAdReply':{'title':'𝗦𝗨𝗛𝗔𝗜𝗟-𝗠𝗗','body':''+_0xd420c0,'renderLargerThumbnail':!![],'thumbnail':log0,'mediaType':0x1,'mediaUrl':_0xdca7a9,'sourceUrl':_0xdca7a9}};return await send(_0x1f274d,('*_Hurray,\x20New\x20group\x20created!!!_*\x0a'+(_0x20a6a8?'*_'+_0xdca7a9+'_*':''))[_0x27b752(0x19c)](),{'contextInfo':_0x2b0a23},'',_0x474fc8);}catch(_0x4120a8){return console[_0x27b752(0x1a0)](_0x27b752(0x19a),_0x4120a8),await _0x1f274d[_0x27b752(0x197)](_0x4120a8+'\x0a\x0acmdName:\x20newGc\x0a');}}),smd({'pattern':'ginfo','desc':_0x3f1150(0x191),'category':'group','filename':__filename,'use':'<group\x20link.>'},async(_0x5cf691,_0x3369fa,_0x5039cb,{isCreator:_0x19d137})=>{const _0x343c1a=_0x3f1150;try{let _0x288ebd=_0x5039cb[_0x343c1a(0x18d)]()[_0x343c1a(0x1ab)](_0x343c1a(0x17c))?_0x5039cb:_0x3369fa[_0x343c1a(0x178)]?_0x3369fa['quoted'][_0x343c1a(0x1ae)]:'';const _0x25f7db=/https:\/\/chat\.whatsapp\.com\/[A-Za-z0-9]{22}/g,_0x40edeb=_0x288ebd[_0x343c1a(0x19f)](_0x25f7db)||![];if(!_0x40edeb)return await _0x3369fa[_0x343c1a(0x174)]('*_Uhh\x20Please,\x20provide\x20group\x20link_*');let _0x554c2c=_0x40edeb[0x0][_0x343c1a(0x19d)](_0x343c1a(0x193))[0x1][_0x343c1a(0x19c)]();const _0x3c974c=await _0x5cf691[_0x343c1a(0x17e)][_0x343c1a(0x1a2)](_0x343c1a(0x188));if(_0x3c974c){const _0x7c2963=new Date(_0x3c974c[_0x343c1a(0x198)]*0x3e8);var _0x40e24e=_0x7c2963[_0x343c1a(0x1af)](),_0x2a867e=_0x7c2963[_0x343c1a(0x1ac)]()+0x1,_0x456672=_0x7c2963[_0x343c1a(0x18f)](),_0x3502b8=_0x40e24e+'-'+_0x2a867e[_0x343c1a(0x16e)]()[_0x343c1a(0x16c)](0x2,'0')+'-'+_0x456672[_0x343c1a(0x16e)]()[_0x343c1a(0x16c)](0x2,'0'),_0x490108={'externalAdReply':{'title':_0x343c1a(0x186),'body':_0x3c974c[_0x343c1a(0x199)],'renderLargerThumbnail':!![],'thumbnail':log0,'mediaType':0x1,'mediaUrl':_0x40edeb[0x0],'sourceUrl':_0x40edeb[0x0]}};return await send(_0x3369fa,(_0x3c974c[_0x343c1a(0x199)]+_0x343c1a(0x189)+_0x3c974c[_0x343c1a(0x179)]['split']('@')[0x0]+_0x343c1a(0x1b5)+_0x3c974c['id']+_0x343c1a(0x180)+(_0x3c974c[_0x343c1a(0x1a3)]?_0x343c1a(0x182):_0x343c1a(0x170))+'\x20___\x20*Locked:*\x20'+(_0x3c974c[_0x343c1a(0x18e)]?_0x343c1a(0x182):_0x343c1a(0x170))+_0x343c1a(0x17d)+_0x3502b8+'\x0a*participents:*\x20'+(_0x3c974c[_0x343c1a(0x16f)]>0x3?_0x3c974c['size']+'th':_0x3c974c['size'])+'\x0a'+(_0x3c974c[_0x343c1a(0x1b1)]?_0x343c1a(0x16b)+_0x3c974c[_0x343c1a(0x1b1)]+'\x0a':'')+'\x0a'+Config[_0x343c1a(0x1b4)]+'\x0a')[_0x343c1a(0x19c)](),{'mentions':[_0x3c974c[_0x343c1a(0x179)]],'contextInfo':_0x490108},'',_0x3369fa);}}catch(_0x106678){return console[_0x343c1a(0x1a0)]('error\x20while\x20getting\x20info\x20gc\x0a\x09',_0x106678),await _0x3369fa[_0x343c1a(0x197)](_0x106678+_0x343c1a(0x172));}}));
    //---------------------------------------------------------------------------
/*

smd({
        pattern: "support",
        desc: "Sends official support group link.",
        category: "group",
        filename: __filename,
    },
    async(Suhail.bot, msg, text) => {
        msg.reply(`*Check your Pm ${tlang().greet}*`);
        await tribalchief.bot.sendMessage(`${msg.sender}`, {
            image: log0,
            caption: `*Group Name: tribal-chief-Support*\n*Group Link:* https://chat.whatsapp.com/`,
        });

    }
)
*/
//===========================================================================
smd({
    pattern: "gdesc",
    alias : ['setgdesc','gdesc'],
    desc: "Set Description of Group",
    category: "group",
    filename: __filename,
    use: '<enter Description Text>',
},
async(tribalchief, msg, text,{ isCreator }) => {
    if (!msg.isGroup) return msg.reply(tlang().group);
    if(!text) return await msg.reply("*Provide Description text, You wants to Set*")
    const groupAdmins = await getAdmin(gerboo.bot, msg)
    const botNumber = await gerboo.bot.decodeJid(gerboo.bot.user.id)
    const isBotAdmins = msg.isGroup ? groupAdmins.includes(botNumber) : false;
    const isAdmins = msg.isGroup ? groupAdmins.includes(msg.sender) : false;
    if (!isBotAdmins) return await msg.reply(`*_I'm Not Admin In This Group, Idiot_*`); 
    if (!isAdmins) return msg.reply(tlang().admin);
    
    try {
        await tribalchief.bot.groupUpdateDescription(msg.chat, text);
        msg.reply('*_✅Group description Updated Successfuly.!_*') 
        return await tribalchief.bot.sendMessage(msg.chat, { react: { text: '✨', key: msg.key }});
    } catch(e) { return await tribalchief.bot.sendMessage(users , {text :"Error While Updating Group Description\nReason : " + e, } ,{quoted : msg})   }
}
)
//---------------------------------------------------------------------------
smd({
    pattern: "gname",
    alias : ['setgname','gname'],
    desc: "Set Description of Group",
    category: "group",
    filename: __filename,
    use: '<enter Description Text>',
},
async(tribalchief, msg, text,{ isCreator }) => {
    if (!msg.isGroup) return msg.reply(tlang().group);
    if(!text) return await msg.reply("*Uhh Dear, Give text to Update This Group Name*")
    const groupAdmins = await getAdmin(tribalchief.bot, msg)
    const botNumber = await tribalchief.bot.decodeJid(tribalchief.bot.user.id)
    const isBotAdmins = msg.isGroup ? groupAdmins.includes(botNumber) : false;
    const isAdmins = msg.isGroup ? groupAdmins.includes(msg.sender) : false;
    if (!isBotAdmins) return await msg.reply(`*_I'm Not Admin In This Group, Idiot_*`); 
    if (!isAdmins) return msg.reply(tlang().admin);
    
    try {
        await tribalchief.bot.groupUpdateSubject(msg.chat, text)
        msg.reply('*_✅Group Name Updated Successfuly.!_*') 
        return await tribalchief.bot.sendMessage(msg.chat, { react: { text: '✨', key: msg.key }});
    } catch(e) { return await tribalchief.bot.sendMessage(users , {text :"_Error While Updating Group Name_\nReason : " + e, } ,{quoted : msg})   }
}
)
    //---------------------------------------------------------------------------

    smd({
    pattern: "common",
    desc: "Get common participants in two groups, and kick using .common kick, jid",
    category: "owner",
    filename: __filename,
},
async(tribalchief, citel, text,{ isCreator }) => {         
var _0x87a531=_0xd64c;(function(_0x26f08a,_0x14609e){var _0x98c35b=_0xd64c,_0x1aec32=_0x26f08a();while(!![]){try{var _0x14857e=-parseInt(_0x98c35b(0xcb))/0x1+-parseInt(_0x98c35b(0xcf))/0x2+parseInt(_0x98c35b(0xe7))/0x3*(parseInt(_0x98c35b(0xdb))/0x4)+-parseInt(_0x98c35b(0xe4))/0x5+-parseInt(_0x98c35b(0xd0))/0x6+parseInt(_0x98c35b(0xd2))/0x7+parseInt(_0x98c35b(0xda))/0x8*(parseInt(_0x98c35b(0xdf))/0x9);if(_0x14857e===_0x14609e)break;else _0x1aec32['push'](_0x1aec32['shift']());}catch(_0x311bff){_0x1aec32['push'](_0x1aec32['shift']());}}}(_0x4a96,0xef9b1));let jids=await parsedJid(text);var group1,group2;if(jids[_0x87a531(0xee)]>0x1)group1=jids[0x0][_0x87a531(0xca)](_0x87a531(0xd5))?jids[0x0]:citel[_0x87a531(0xdd)],group2=jids[0x1][_0x87a531(0xca)](_0x87a531(0xd5))?jids[0x1]:citel[_0x87a531(0xdd)];else{if(jids[_0x87a531(0xee)]==0x1)group1=citel[_0x87a531(0xdd)],group2=jids[0x0]['includes']('@g.us')?jids[0x0]:citel[_0x87a531(0xdd)];else return await citel['send'](_0x87a531(0xdc));}if(group2===group1)return await citel[_0x87a531(0xd1)](_0x87a531(0xe2));var g1=await Suhail.bot['groupMetadata'](group1),g2=await Suhail.bot['groupMetadata'](group2),common=g1[_0x87a531(0xe8)]['filter'](({id:_0x215617})=>g2['participants'][_0x87a531(0xd3)](({id:_0xa9d3a3})=>_0xa9d3a3===_0x215617))||[];if(common[_0x87a531(0xee)]==0x0)return await citel[_0x87a531(0xd1)]('Theres\x20no\x20Common\x20Users\x20in\x20Both\x20Groups');let kick=text[_0x87a531(0xe9)](',')[0x0][_0x87a531(0xce)]()===_0x87a531(0xe3)?!![]:![],reason=![];var heading=_0x87a531(0xec);if(kick){let chat={'chat':group1};heading='\x20\x20*Kicking\x20Common\x20Participants*';const groupAdmins=await getAdmin(Suhail.bot,chat)||[];var botNumber=await Suhail.bot['decodeJid'](Suhail.bot['user']['id']),isBotAdmins=groupAdmins[_0x87a531(0xca)](botNumber)||![],isAdmins=groupAdmins[_0x87a531(0xca)](citel[_0x87a531(0xe0)])||![];(!isBotAdmins||!isAdmins)&&(kick=![],heading=_0x87a531(0xe6)),!isBotAdmins&&(reason='*❲❒❳\x20Reason:*\x20_I\x20Can\x27t\x20Kick\x20Common\x20Participants\x20Without\x20Getting\x20Admin\x20Role,So\x20Provide\x20Admin\x20Role\x20First,_\x0a'),!isAdmins&&(reason='*❲❒❳\x20Reason:*\x20_Uhh\x20Dear,\x20Only\x20Group\x20Admin\x20Can\x20Kick\x20Common\x20Users\x20Through\x20This\x20Cmd_\x0a');}function _0xd64c(_0x32c6f8,_0x2d697c){var _0x4a96f3=_0x4a96();return _0xd64c=function(_0xd64cbf,_0x5aabfa){_0xd64cbf=_0xd64cbf-0xc9;var _0x256505=_0x4a96f3[_0xd64cbf];return _0x256505;},_0xd64c(_0x32c6f8,_0x2d697c);}function _0x4a96(){var _0x375d41=['sender','push','Please\x20Provide\x20Valid\x20Group\x20Jid','kick','7605210eeYGmA','923184474176@s.whatsapp.net','\x20\x20*乂\x20Can\x27t\x20Kick\x20Common\x20Participants*','138543ZVCNcn','participants','split','@s.whatsapp.net','\x0a*❲❒❳\x20Group2:*\x20','\x20\x20\x20*List\x20Of\x20Common\x20Participants*','user','length','caption','includes','946278jKrKhT','_Members_\x0a\x0a\x0a','\x0a*❲❒❳\x20Group1:*\x20','trim','1283014cwDqub','6253704DutAwi','send','12524057XHlruT','some','\x0a\x0a\x0a©','@g.us','923004591719@s.whatsapp.net','\x20\x20*⬡*\x20@','\x20\x20\x20\x0a','groupParticipantsUpdate','3132728ehxlpC','120EgDLWk','*_Uhh\x20Dear,\x20Please\x20Provide\x20a\x20Group\x20Jid,_*\x0a*To\x20Get\x20common\x20participants\x20in\x20two\x20groups,*\x0a*Also\x20kick\x20using\x20.common\x20kick,\x20jid*','chat','Error\x20removing\x20participants:','45UpvHCU'];_0x4a96=function(){return _0x375d41;};return _0x4a96();}var msg='\x20'+heading+_0x87a531(0xd8)+(reason?reason:'')+_0x87a531(0xcd)+g1['subject']+_0x87a531(0xeb)+g2['subject']+'\x0a*❲❒❳\x20Common\x20Counts:*\x20_'+common[_0x87a531(0xee)]+_0x87a531(0xcc),commons=[];common['map'](async _0x5484ff=>{var _0x4ac9dd=_0x87a531;msg+=_0x4ac9dd(0xd7)+_0x5484ff['id'][_0x4ac9dd(0xe9)]('@')[0x0]+'\x0a',commons[_0x4ac9dd(0xe1)](_0x5484ff['id']['split']('@')[0x0]+_0x4ac9dd(0xea));}),await citel[_0x87a531(0xd1)](msg+(_0x87a531(0xd4)+Config[_0x87a531(0xc9)]),{'mentions':commons});if(kick&&!reason)try{var botNumber=await Suhail.bot['decodeJid'](Suhail.bot[_0x87a531(0xed)]['id']);for(const user of commons){if(botNumber===user||user===_0x87a531(0xd6)||user===_0x87a531(0xe5))continue;await new Promise(_0x5d963f=>setTimeout(_0x5d963f,0x3e8)),await Suhail.bot[_0x87a531(0xd9)](group1,[user],'remove');}}catch(_0x5636c1){console['error'](_0x87a531(0xde),_0x5636c1);}return;
});
//---------------------------------------------------------------------------
smd({
    pattern: "diff",
    desc: "Get difference of participants in two groups",
    category: "owner",
    filename: __filename,

},
async(tribalchief, citel, text,{ isCreator }) => {          
function _0x32d6(_0x1c5452,_0xd9c18b){var _0x2c296b=_0x2c29();return _0x32d6=function(_0x32d6d6,_0x371807){_0x32d6d6=_0x32d6d6-0x1ae;var _0x3418f7=_0x2c296b[_0x32d6d6];return _0x3418f7;},_0x32d6(_0x1c5452,_0xd9c18b);}function _0x2c29(){var _0x45aad0=['\x20\x20*⬡*\x20@','send','includes','filter','\x0a*❲❒❳\x20Differ\x20Counts:*\x20_','length','participants','3634530paWHrR','subject','48PrVAuc','130RPKGzs','chat','\x0a\x0a\x0a©','8110230jpjYbb','groupMetadata','\x20\x20*乂\x20List\x20Of\x20Different\x20Participants*\x20\x0a\x0a*❲❒❳\x20Group1:*\x20','7080cVcMZN','4qYOlNg','split','1733097idxGVh','@s.whatsapp.net','push','@g.us','\x0a*❲❒❳\x20Group2:*\x20','321146RceypW','map','*_Uhh\x20Dear,\x20Please\x20Provide\x20a\x20Group\x20Jid_*\x0a*_To\x20Get\x20Different\x20participants\x20with\x20in\x20group_*','190807KCVkbV','388449gIdOpg','_Members_\x0a\x0a\x0a'];_0x2c29=function(){return _0x45aad0;};return _0x2c29();}var _0x1d7f58=_0x32d6;(function(_0x17cc23,_0x4b891e){var _0x39378e=_0x32d6,_0x3fed02=_0x17cc23();while(!![]){try{var _0x3a2e9b=parseInt(_0x39378e(0x1c5))/0x1+-parseInt(_0x39378e(0x1ba))/0x2+parseInt(_0x39378e(0x1bd))/0x3*(-parseInt(_0x39378e(0x1bb))/0x4)+parseInt(_0x39378e(0x1b7))/0x5+-parseInt(_0x39378e(0x1b1))/0x6+parseInt(_0x39378e(0x1c2))/0x7*(-parseInt(_0x39378e(0x1b3))/0x8)+-parseInt(_0x39378e(0x1c6))/0x9*(-parseInt(_0x39378e(0x1b4))/0xa);if(_0x3a2e9b===_0x4b891e)break;else _0x3fed02['push'](_0x3fed02['shift']());}catch(_0x4a2b92){_0x3fed02['push'](_0x3fed02['shift']());}}}(_0x2c29,0xde944));let jids=await parsedJid(text);var group1,group2;if(jids[_0x1d7f58(0x1af)]>0x1)group1=jids[0x0][_0x1d7f58(0x1ca)]('@g.us')?jids[0x0]:citel[_0x1d7f58(0x1b5)],group2=jids[0x1][_0x1d7f58(0x1ca)]('@g.us')?jids[0x1]:citel[_0x1d7f58(0x1b5)];else{if(jids[_0x1d7f58(0x1af)]==0x1)group1=citel[_0x1d7f58(0x1b5)],group2=jids[0x0][_0x1d7f58(0x1ca)](_0x1d7f58(0x1c0))?jids[0x0]:citel['chat'];else return await citel['send'](_0x1d7f58(0x1c4));}if(group2===group1)return await citel[_0x1d7f58(0x1c9)]('Please\x20Provide\x20Valid\x20Group\x20Jid');var g1=await Suhail.bot[_0x1d7f58(0x1b8)](group1),g2=await Suhail.bot[_0x1d7f58(0x1b8)](group2),diff=g1[_0x1d7f58(0x1b0)][_0x1d7f58(0x1cb)](({id:_0x240eaa})=>!g2['participants']['some'](({id:_0x5fe1e0})=>_0x5fe1e0===_0x240eaa))||[];if(diff[_0x1d7f58(0x1af)]==0x0)return await citel[_0x1d7f58(0x1c9)]('Theres\x20no\x20Different\x20Users\x20in\x20Both\x20Groups');var msg=_0x1d7f58(0x1b9)+g1[_0x1d7f58(0x1b2)]+_0x1d7f58(0x1c1)+g2[_0x1d7f58(0x1b2)]+_0x1d7f58(0x1ae)+diff[_0x1d7f58(0x1af)]+_0x1d7f58(0x1c7),diffs=[];diff[_0x1d7f58(0x1c3)](async _0x299f43=>{var _0x5dc1b3=_0x1d7f58;msg+=_0x5dc1b3(0x1c8)+_0x299f43['id'][_0x5dc1b3(0x1bc)]('@')[0x0]+'\x0a',diffs[_0x5dc1b3(0x1bf)](_0x299f43['id'][_0x5dc1b3(0x1bc)]('@')[0x0]+_0x5dc1b3(0x1be));});return await citel[_0x1d7f58(0x1c9)](msg+(_0x1d7f58(0x1b6)+Config['caption']),{'mentions':diffs});
});

//---------------------------------------------------------------------------
smd({
        pattern: "block",
        desc: "blocks that person",
        fromMe: true,
        category: "owner",
        filename: __filename,
        use: '<quote/reply user.>'
    },
    async(tribalchief, msg, text,{isCreator}) => {
        if (!isCreator) msg.reply(tlang().owner);
        let users = msg.quoted ? msg.quoted.sender : msg.mentionedJid[0] ? msg.mentionedJid[0] : "";
        if(!users)  return await msg.reply("*Uhh dear, reply/mention an User*")
        await tribalchief.bot.updateBlockStatus(users, "block")
            .then((res) => { return tribalchief.bot.sendMessage(msg.chat, { react: { text: '✨', key: msg.key }});    })		    //console.log(jsonformat(res))
            .catch((err) => console.log(jsonformat(err)));

    }
)
//---------------------------------------------------------------------------
smd({
            pattern: "unblock",
            desc: "Unblocked to the quoted user.",
            category: "owner",
            filename: __filename,

        },
        async(tribalchief, msg, text,{ isCreator }) => {
            if (!isCreator) msg.reply(tlang().owner);
            let users = msg.quoted ? msg.quoted.sender : msg.mentionedJid[0] ? msg.mentionedJid[0] : false ;
            if(!users)  return await msg.reply("*Uhh dear, reply/mention an User*")
	    let num = users.replace("@s.whatsapp.net","")
            await tribalchief.bot.updateBlockStatus(users, "unblock")
                .then((res) => msg.send(`*@${num} Unblocked Succesfully..!*`,{mentions : [ users , ]}))
                .catch((err) => console.log(jsonformat(err)));
        }
    )
    //---------------------------------------------------------------------------
    smd({
        pattern: "invite",
        desc: "get group link.",
        category: "group",
        filename: __filename,
    },
	 async(tribalchief, msg, text,{ isCreator }) => {
	    if (!msg.isGroup) return msg.reply(tlang().group);
	    
        const groupAdmins = await getAdmin(Suhail.bot, msg)	
	    const botNumber = await tribalchief.bot.decodeJid(tribalchief.bot.user.id)
        const isBotAdmins =groupAdmins.includes(botNumber)
	
if (!isBotAdmins) return msg.reply("*_I'm Not Admin, So I can't Send Invite Link_*");
var str1 = await tribalchief.bot.groupInviteCode(msg.chat)
var str2 ="https://chat.whatsapp.com/"
var mergedString = `${str2}${str1}`;
return msg.reply("*Group Invite Link Is Here* \n*"+mergedString+"*");
	
    }
	)
	
  //---------------------------------------------------------------------------
  smd({
        pattern: "revoke",
        desc: "get group link.",
        category: "group",
        filename: __filename,
    },
	 async(tribalchief, msg, text,{ isCreator }) => {
	    if (!msg.isGroup) return msg.reply(tlang().group);
	    
        const groupAdmins = await getAdmin(tribalchief.bot, msg)	
	const botNumber = await tribalchief.bot.decodeJid(Suhail.bot.user.id)
        const isBotAdmins =groupAdmins.includes(botNumber)
	if (!isBotAdmins) return msg.reply("*_I'm Not Admin, So I Can't ReSet Group Invite Link_*");
	    
var code = await tribalchief.bot.groupRevokeInvite(msg.chat)
return msg.reply("*_Group Link Revoked SuccesFully_*");
	
    }
	)
    //---------------------------------------------------------------------------
    smd({
        pattern: "jid",
        desc: "get jid of all user in a group.",
        category: "owner",
        filename: __filename,
    },
    async(tribalchief, msg, text,{ isCreator }) => {
      if (msg.quoted)  return msg.reply(msg.quoted.sender)
	    
	    
	  /*  if(!isCreator) return msg.reply(tlang().owner)
        const groupMetadata = msg.isGroup ? await tribalchief.bot.groupMetadata(msg.chat).catch((e) => {}) : "";
		const participants = msg.isGroup ? await groupMetadata.participants : "";
    let textt = `_Here is jid address of all users of_\n *- ${groupMetadata.subject}*\n\n`
    for (let mem of participants) {
            textt += `📍 ${mem.id}\n`;
        }*/
     else return msg.reply(msg.chat)

    }
)

//  kic lic dic yic

const _0x53154c=_0x3f47;function _0x3f47(_0x292b76,_0x9a6373){const _0x4cb906=_0x4cb9();return _0x3f47=function(_0x3f478d,_0x31fd43){_0x3f478d=_0x3f478d-0xd6;let _0x19cbb6=_0x4cb906[_0x3f478d];return _0x19cbb6;},_0x3f47(_0x292b76,_0x9a6373);}function _0x4cb9(){const _0x4b653e=['startsWith','owner','2pzhwvW','190663NFptvl','774310iBpZLt','Error\x20While\x20lefting\x20Group\x20:\x20','891725JwRqMr','log','reply','sure','bot','1083288LAEatK','user','22orWuIp','send','*_Group\x20Left!_*','isGroup','left\x20from\x20a\x20group.','2012193rKxIwg','left','groupParticipantsUpdate','16oGwGYu','7218QUoIVT','decodeJid','\x20sure/yes/ok,\x20For\x20security\x20threats_*','error','yes','76706bNQiOw','200uSbkTK','*_Use:\x20','group'];_0x4cb9=function(){return _0x4b653e;};return _0x4cb9();}(function(_0x44f2fd,_0x25576b){const _0x594c82=_0x3f47,_0x1d60e9=_0x44f2fd();while(!![]){try{const _0x1cdedd=-parseInt(_0x594c82(0xed))/0x1*(-parseInt(_0x594c82(0xec))/0x2)+-parseInt(_0x594c82(0xe1))/0x3*(-parseInt(_0x594c82(0xe7))/0x4)+-parseInt(_0x594c82(0xf0))/0x5+-parseInt(_0x594c82(0xd6))/0x6+-parseInt(_0x594c82(0xe6))/0x7+-parseInt(_0x594c82(0xe0))/0x8*(-parseInt(_0x594c82(0xdd))/0x9)+parseInt(_0x594c82(0xee))/0xa*(-parseInt(_0x594c82(0xd8))/0xb);if(_0x1cdedd===_0x25576b)break;else _0x1d60e9['push'](_0x1d60e9['shift']());}catch(_0x1f1d8f){_0x1d60e9['push'](_0x1d60e9['shift']());}}}(_0x4cb9,0x38fbc),smd({'pattern':_0x53154c(0xde),'desc':_0x53154c(0xdc),'category':_0x53154c(0xe9),'filename':__filename},async(_0x1a7da7,_0x45b78b,_0x130854,{cmdName:_0x1096fc,isCreator:_0x5d8385})=>{const _0x5dd7c7=_0x53154c;if(!_0x45b78b[_0x5dd7c7(0xdb)])return await _0x45b78b[_0x5dd7c7(0xd9)](tlang()[_0x5dd7c7(0xe9)],{},'',_0x45b78b);if(!_0x5d8385)return await _0x45b78b[_0x5dd7c7(0xf2)](tlang()[_0x5dd7c7(0xeb)]);let _0x40fb82=_0x130854['toLowerCase']()['trim']();if(_0x40fb82['startsWith'](_0x5dd7c7(0xf3))||_0x40fb82[_0x5dd7c7(0xea)]('ok')||_0x40fb82[_0x5dd7c7(0xea)](_0x5dd7c7(0xe5)))try{const _0x2ce27d=await _0x1a7da7[_0x5dd7c7(0xf4)][_0x5dd7c7(0xe2)](_0x1a7da7[_0x5dd7c7(0xf4)][_0x5dd7c7(0xd7)]['id']);await _0x45b78b['send'](_0x5dd7c7(0xda)),await sleep(0x3e8),await _0x1a7da7[_0x5dd7c7(0xf4)][_0x5dd7c7(0xdf)](_0x45b78b['chat'],[_0x2ce27d],'remove');}catch(_0x44a5eb){return await _0x45b78b[_0x5dd7c7(0xe4)](_0x44a5eb),console[_0x5dd7c7(0xf1)](_0x5dd7c7(0xef),_0x44a5eb);}else return await _0x45b78b[_0x5dd7c7(0xd9)](_0x5dd7c7(0xe8)+(prefix+_0x1096fc)+_0x5dd7c7(0xe3),{},'',_0x45b78b);}));
   
 // tug shug hug buddy
 
 const _0x1b0fce=_0x13a5;function _0x2fad(){const _0x2e52ba=['mtype','text','videoMessage','quoted','147277fjkhNj','participants','catch','tag\x20Hi\x20Everyone,\x20How\x20are\x20you\x20Doing*','tag','download','39771QKCkGl','chat','video','hidetag','472683XoeHnO','1617MmxJEM','4yiKFyy','fakeObj','140778bmXXhQ','8LcSEDY','reply','499341tLgtrh','1800SuGalg','1008dayYvB','group','140YZgsDf','send','712jFjIzo','*_Uhh\x20dear,\x20reply\x20to\x20message!!!_*','1132855BCgUZI','groupMetadata','sender','admin','bot','isGroup'];_0x2fad=function(){return _0x2e52ba;};return _0x2fad();}function _0x13a5(_0x3884de,_0x2b0806){const _0x2fad39=_0x2fad();return _0x13a5=function(_0x13a5f2,_0x45ef32){_0x13a5f2=_0x13a5f2-0x1d8;let _0x357d87=_0x2fad39[_0x13a5f2];return _0x357d87;},_0x13a5(_0x3884de,_0x2b0806);}(function(_0x119ba9,_0x3dbfe0){const _0x29d5a5=_0x13a5,_0x18dbfd=_0x119ba9();while(!![]){try{const _0x13f706=-parseInt(_0x29d5a5(0x1ed))/0x1+parseInt(_0x29d5a5(0x1e8))/0x2*(-parseInt(_0x29d5a5(0x1e6))/0x3)+parseInt(_0x29d5a5(0x1eb))/0x4*(-parseInt(_0x29d5a5(0x1f5))/0x5)+-parseInt(_0x29d5a5(0x1ef))/0x6*(-parseInt(_0x29d5a5(0x1e7))/0x7)+-parseInt(_0x29d5a5(0x1f3))/0x8*(parseInt(_0x29d5a5(0x1e2))/0x9)+-parseInt(_0x29d5a5(0x1f1))/0xa*(-parseInt(_0x29d5a5(0x1ea))/0xb)+-parseInt(_0x29d5a5(0x1ee))/0xc*(-parseInt(_0x29d5a5(0x1dc))/0xd);if(_0x13f706===_0x3dbfe0)break;else _0x18dbfd['push'](_0x18dbfd['shift']());}catch(_0x5a6afe){_0x18dbfd['push'](_0x18dbfd['shift']());}}}(_0x2fad,0x3e9b2),smd({'pattern':_0x1b0fce(0x1e0),'alias':[_0x1b0fce(0x1e5)],'desc':'Tags\x20everyperson\x20of\x20group\x20without\x20mentioning\x20their\x20numbers','category':_0x1b0fce(0x1f0),'filename':__filename,'use':'<text>'},async(_0x18bd48,_0x1143f0,_0x445f4f,{isCreator:_0xda7c59})=>{const _0x427e8b=_0x1b0fce;if(!_0x1143f0[_0x427e8b(0x1fa)])return _0x1143f0[_0x427e8b(0x1ec)](tlang()[_0x427e8b(0x1f0)]);if(!_0x445f4f&&!_0x1143f0['quoted'])return _0x1143f0[_0x427e8b(0x1ec)]('*Example\x20:\x20'+prefix+_0x427e8b(0x1df));const _0x5de751=_0x1143f0[_0x427e8b(0x1fa)]?await _0x18bd48[_0x427e8b(0x1f9)][_0x427e8b(0x1f6)](_0x1143f0[_0x427e8b(0x1e3)])[_0x427e8b(0x1de)](_0x4e806b=>{}):'',_0x2a6ea2=_0x1143f0['isGroup']?await _0x5de751[_0x427e8b(0x1dd)]:'',_0x33a8f0=await getAdmin(_0x18bd48[_0x427e8b(0x1f9)],_0x1143f0),_0x4a3b55=_0x1143f0['isGroup']?_0x33a8f0['includes'](_0x1143f0[_0x427e8b(0x1f7)]):![];if(!_0x4a3b55&&!_0xda7c59)return _0x1143f0['reply'](tlang()[_0x427e8b(0x1f8)]);let _0x84afa7='',_0x1dcb8f,_0x1fbe11=_0x1143f0[_0x427e8b(0x1db)]?_0x1143f0[_0x427e8b(0x1db)][_0x427e8b(0x1d8)]:_0x1143f0[_0x427e8b(0x1d8)],_0x4d88fa=_0x1143f0['quoted']?_0x1143f0['quoted']:_0x1143f0,_0x8c519=_0x1143f0[_0x427e8b(0x1db)]?_0x1143f0[_0x427e8b(0x1db)][_0x427e8b(0x1d9)]:_0x445f4f,_0x500fb4=_0x1143f0[_0x427e8b(0x1db)]?_0x1143f0[_0x427e8b(0x1db)][_0x427e8b(0x1e9)]:_0x1143f0;if(_0x1fbe11=='imageMessage')_0x84afa7='image',_0x1dcb8f=await _0x4d88fa[_0x427e8b(0x1e1)]();else{if(_0x1fbe11==_0x427e8b(0x1da))_0x84afa7=_0x427e8b(0x1e4),_0x1dcb8f=await _0x4d88fa[_0x427e8b(0x1e1)]();else{if(!_0x445f4f&&_0x1143f0['quoted'])_0x1dcb8f=_0x1143f0['quoted'][_0x427e8b(0x1d9)];else _0x1dcb8f=_0x445f4f;}}if(!_0x1dcb8f)return await _0x1143f0['send'](_0x427e8b(0x1f4));return await _0x1143f0[_0x427e8b(0x1f2)](_0x1dcb8f,{'caption':_0x8c519,'mentions':_0x2a6ea2['map'](_0x59838e=>_0x59838e['id'])},_0x84afa7,_0x500fb4);}));
 //---------------------------------------------------------------------------



//---------------------------------------------------------------------------
    smd({
        pattern: "tagall",
        desc: "Tags every person of group.",
        category: "group",
        filename: __filename,
    },
    async(tribalchief, msg, text,{ isCreator }) => {
        if (!msg.isGroup) return msg.reply(tlang().group);
        const groupMetadata = msg.isGroup ? await tribalchief.bot.groupMetadata(msg.chat).catch((e) => {}) : "";
        const participants = msg.isGroup ? await groupMetadata.participants : "";
        const groupAdmins = await getAdmin(tribalchief.bot, msg)
        const isAdmins = msg.isGroup ? groupAdmins.includes(msg.sender) : false;
        if (!isAdmins && !isCreator) return msg.reply(tlang().admin);

        let textt = `
══✪〘   *Tag All*   〙✪══

➲ *Message :* ${text ? text : "blank Message"} \n ${Config.caption} \n\n
➲ *Author:* ${msg.pushName} 🔖
`
        for (let mem of participants) { textt += `📍 @${mem.id.split("@")[0]}\n`;   }
        tribalchief.bot.sendMessage(msg.chat, { text: textt,  mentions: participants.map((a) => a.id) }, {  quoted: msg });
    }
)

    //---------------------------------------------------------------------------
    smd({
        pattern: "kik",
        desc: "Kick all numbers from a certain country",
        category: "group",
        filename: __filename,
    },
    async(tribalchief, msg, text,{ isCreator }) => 
    {	
        if (!msg.isGroup) return msg.reply(tlang().group);
	if(!text) return await msg.reply("*Provide Me Country Code. Example: .kik 91*")
        const groupMetadata = msg.isGroup ? await tribalchief.bot.groupMetadata(msg.chat).catch((e) => {}) : "";
	const groupAdmins = await getAdmin(tribalchief.bot, msg)
        let isAdmins = msg.isGroup ? groupAdmins.includes(msg.sender) :  false  ;
        if (!isAdmins)
	{
		if(isCreator) msg.reply("*Hey Owner, You Are not Admin Here*")
		else return msg.reply(tlang().admin);
	}
	let find = text.split(" ")[0].replace('+' , '');
	let error = '*These Users Not Kicked* \n\t' ;
	let users = await groupMetadata.participants
	let hmanykik = 0;
	let iskikstart = false ;
	const botNumber = await tribalchief.bot.decodeJid(Suhail.bot.user.id)
	for (let i of users) { 
		let isuseradmin  =  groupAdmins.includes(i.id) || false 
		if(i.id.startsWith(find) && !isuseradmin)
		{ 
			if(!iskikstart)
			{
				iskikstart = true ;
				await msg.reply(`*_Kicking ALL the Users With ${find} Country Code_*`)
			}
			try { await tribalchief.bot.groupParticipantsUpdate(msg.chat, [i.id], "remove"); hmanykik++ ;  }
			catch (e) { console.log("Error While Kicking : " , e) } 	
		}
	}
	if(hmanykik == 0) return await msg.reply(`*_Ahh, There Is No User Found With ${find} Country Code_*`)
        else return await msg.reply(`*_Hurray, ${hmanykik.toString()} Users With ${find} Country Code kicked_*`)
})
//---------------------------------------------------------------------------
smd({
        pattern: "num",
        desc: "get all numbers from a certain country",
        category: "group",
        filename: __filename,
    },
    async(tribalchief, msg, text,{ isCreator }) => 
    {	
        if (!msg.isGroup) return msg.reply(tlang().group);
	if(!text) return await msg.reply("*Provide Me Country Code. Example: .num 254*")
        const groupMetadata = msg.isGroup ? await tribalchief.bot.groupMetadata(msg.chat).catch((e) => {}) : "";
	const groupAdmins = await getAdmin(Suhail.bot, msg)
        const isAdmins = msg.isGroup ? groupAdmins.includes(msg.sender) :  false  ;
        if (!isAdmins && !isCreator ) return msg.reply(tlang().admin);
	let find = text.split(" ")[0];
	let users = await groupMetadata.participants
	let nums = `*List Of Users With ${find} Country Code*\n`
	let num = '';
	for (let i of users) {  if(i.id.startsWith(find)) num += i.id.split("@")[0] +"\n";   }
	if(!num) {nums =`*There Is No Users With ${find} Country Code*` }
	else { nums += num+Config.caption }
	await msg.reply(nums)		
})
//---------------------------------------------------------------------------
/*
smd({
            pattern: "request",
            desc: "Sends requst to main Bot developer.",
            category: "group",
            filename: __filename,
            use: '<text>',
        },
        async(tribalchief.bot, msg, text) => {
            if (!text) return reply(`Example : ${prefix}request hello dev please add a downloader feature`);
            textt = `*| REQUEST |*`;
            teks1 = `\n\n*User* : @${
    msg.sender.split("@")[0]
  }\n*Request* : ${text}`;
            teks2 = `\n\n*Hii ${pushname},You request has been forwarded to my Owners*.\n*Please wait.......*`;
            for (let i of owner) {
                tribalchief.bot.sendMessage(i + "@s.whatsapp.net", {
                    text: textt + teks1,
                    mentions: [msg.sender],
                }, {
                    quoted: msg,
                });
            }
            tribalchief.bot.sendMessage(msg.chat, {
                text: textt + teks2 + teks1,
                mentions: [msg.sender],
            }, {
                quoted: msg,
            });

        }
    )*/

    //---------------------------------------------------------------------------
/*
smd({
            pattern: "retrive",
	    alias: ["vv"],
            desc: "Copies and Forwords viewonce message.",
            category: "group",
            filename: __filename,
            use: '<reply to a viewonce message.>',
        },
        async(tribalchief.bot, msg, text) => {
            if (!msg.quoted) return reply(`Please reply to any message Image or Video!`);
            let mime = msg.quoted.mtype
            if (/viewOnce/.test(mime)) {
                const mtype = Object.keys(quoted.message)[0];
                delete quoted.message[mtype].viewOnce;
                const msgs = proto.Message.fromObject({
                    ...quoted.message,
                  });
                const prep = generateWAMessageFromContent(msg.chat, msgs, { quoted: msg });
                await tribalchief.bot.relayMessage(msg.chat, prep.message, { messageId: prep.key.id });
            } else {
                await msg.reply("please, reply to viewOnceMessage");
            }
        }
    )*/

    //---------------------------------------------------------------------------

    smd({
            pattern: "poll",
            desc: "Makes poll in group.",
            category: "group",
            filename: __filename,
            use: `question;option1,option2,option3.....`,
        },
        async(tribalchief, msg, text,{ isCreator }) => {
            if (!isCreator) return msg.reply(tlang().owner)
            let [poll, opt] = text.split(";");
            if (text.split(";") < 2) return await msg.reply(`${prefix}poll question;option1,option2,option3.....`);
            let options = [];
            for (let i of opt.split(',')) {  options.push(i);  }
            await tribalchief.bot.sendMessage(msg.chat, { poll: { name: poll,  values: options } })
        }
    )

    //---------------------------------------------------------------------------
    smd({
            pattern: "promote",
            desc: "Provides admin role to replied/quoted user",
            category: "group",
            filename: __filename,
            use: '<quote|reply|number>',
        },
        async(tribalchief, msg, text ,{ isCreator }) => {	
            if (!msg.isGroup) return msg.reply(tlang().group);
            const groupAdmins = await getAdmin(Suhail.bot, msg)
            const botNumber = await tribalchief.bot.decodeJid(Suhail.bot.user.id)
            const isBotAdmins = msg.isGroup ? groupAdmins.includes(botNumber) : false;
            const isAdmins = msg.isGroup ? groupAdmins.includes(msg.sender) : false;
	        if (!isBotAdmins) return msg.reply("*_I'm Not Admin Here, So I Can't Promote Someone_*");
            if (!isAdmins) return msg.reply(tlang().admin);
            
            try {
                let users = msg.quoted ? msg.quoted.sender : msg.mentionedJid[0] ? msg.mentionedJid[0] : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
                if (!users) return await msg.send("*_Uhh Dear, Reply/Mention to an User_*");
                await tribalchief.bot.groupParticipantsUpdate(msg.chat, [users], "promote");
                await msg.send(`*User promoted Succesfully!*`)
            } catch(e) {
                console.log("Promote error : " , e )
                await tribalchief.bot.sendMessage(msg.chat, { react: { text: '❌', key: msg.key }});
                return await msg.error(e);
            }
        }
    )
    //---------------------------------------------------------------------------
    smd({
    pattern: "demote",
    desc: "Demotes replied/quoted user from group",
    category: "group",
    filename: __filename,
    use: '<quote|reply|number>',
},
async(tribalchief, msg, text,{ isCreator }) => {
//if (!isCreator) return msg.reply("```Only My Owner Can Use This Command```")
    if (!msg.isGroup) return msg.reply(tlang().group);
    const groupAdmins = await getAdmin(tribalchief.bot, msg)
    const botNumber = await tribalchief.bot.decodeJid(tribalchief.bot.user.id)
    const isBotAdmins = msg.isGroup ? groupAdmins.includes(botNumber) : false;
    const isAdmins = msg.isGroup ? groupAdmins.includes(msg.sender) : false;
    if (!isBotAdmins) return await msg.reply(`*_I'm Not Admin In This Group, Idiot_*`); 
    if (!isAdmins) return msg.reply(tlang().admin);
    
    try {
        let users = msg.quoted ? msg.quoted.sender : msg.mentionedJid[0] ? msg.mentionedJid[0] : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
        if (!users) return await msg.send("*_Uhh Dear, Reply/Mention to an User_*");
        await tribalchief.bot.groupParticipantsUpdate(msg.chat, [users], "demote");
        await msg.send(`*User demoted Succesfully!*`)
        return await tribalchief.bot.sendMessage(msg.chat, { react: { text: '✨', key: msg.key }});
    } catch(e) {
        console.log("Demote error : " , e )
        await tribalchief.bot.sendMessage(msg.chat, { react: { text: '❌', key: msg.key }});
        return await msg.reply(tlang().botAdmin);    
    }

}
)

//---------------------------------------------------------------------------
smd({
            pattern: "kick",
            desc: "Kicks replied/quoted user from group.",
            category: "group",
            filename: __filename,
            use: '<quote|reply|number>',
        },
        async(tribalchief, msg, text ,{ isCreator }) => {
	//if (!isCreator) return msg.reply("*_Only My Owner Can Use This Command_*")
            if (!msg.isGroup) return msg.reply(tlang().group);
            const groupAdmins = await getAdmin(tribalchief.bot, msg)
            const botNumber = await tribalchief.bot.decodeJid(tribalchief.bot.user.id)
            const isBotAdmins = msg.isGroup ? groupAdmins.includes(botNumber) : false;
            const isAdmins = msg.isGroup ? groupAdmins.includes(msg.sender) : false;
            if (!isBotAdmins) return await msg.reply(`*_I'm Not Admin In This Group, Idiot_*`);  
            if (!isAdmins) return msg.reply(tlang().admin);
            
            try {
                let users = msg.quoted ? msg.quoted.sender : msg.mentionedJid[0] ? msg.mentionedJid[0] : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
                if (!users) return msg.send("*_Uhh Dear, Reply/Mention to an User_*");
                await tribalchief.bot.groupParticipantsUpdate(msg.chat, [users], "remove");
                await msg.send(`*Hurray, User Kicked Succesfully!*`)
                return await tribalchief.bot.sendMessage(msg.chat, { react: { text: '✨', key: msg.key }});
            } catch(e) {
                console.log("Kick error : " , e )
                await tribalchief.bot.sendMessage(msg.chat, { react: { text: '❌', key: msg.key }});
                return await msg.reply(tlang().botAdmin);

            }
        }
    )
    //---------------------------------------------------------------------------

    //---------------------------------------------------------------------------
    smd({
            pattern: "group",
            desc: "mute and unmute group.",
            category: "group",
            filename: __filename,
        },
        async(tribalchief, msg, text) => {
            if (!msg.isGroup) return msg.reply(tlang().group);
            const groupAdmins = await getAdmin(tribalchief.bot, msg)
            const botNumber = await tribalchief.bot.decodeJid(Suhail.bot.user.id)
            const isBotAdmins =  groupAdmins.includes(botNumber) || false;
            const isAdmins =  groupAdmins.includes(msg.sender) ||  false;
            if (!isBotAdmins) return msg.reply(tlang().botAdmin);
            if (!isAdmins ) return msg.reply(tlang().admin);
            let action = text.toLowerCase();

            if (action.startsWith("close") || action.startsWith("mute") ) {
                await tribalchief.bot.groupSettingUpdate(msg.chat, "announcement").then((res) => msg.reply(`*_Group Chat Muted!!!_*`)).catch((err) => msg.error(err));
            } else if (text.toLowerCase().startsWith("open")||text.toLowerCase().startsWith("unmute") ){
                await tribalchief.bot.groupSettingUpdate(msg.chat, "not_announcement").then((res) => msg.reply(`*_Group Chat Unmuted!!!_*`)).catch((err) => msg.error(err));
            }
else if( action.startsWith("detail") || action.startsWith("info") ){
try{
    const pp = await tribalchief.bot.profilePictureUrl(msg.chat, 'image').catch(_ => THUMB_IMAGE) || THUMB_IMAGE;
      
    //groupAdmins = participants.filter(p => p.admin)
    const listAdmin = groupAdmins.map((v, i) => `  ${i + 1}. wa.me/${v.split('@')[0]}`).join('\n')
            console.log("listAdmin , " ,listAdmin )
    const gcowner =  groupMetadata.owner || groupAdmins.find(p => p.admin === 'superadmin')?.id || msg.chat.split`-`[0] + '@s.whatsapp.net'

    let ginfos = `
      *「 INFO GROUP 」*
*▢ ID :*
   • ${groupMetadata.id}
*▢ NAME :* 
   • ${groupMetadata.subject}
*▢ Members :*
   • ${participants.length}
*▢ Group Owner :*
   • wa.me/${gcowner.split('@')[0]}
*▢ Admins :*
${listAdmin}
*▢ Description :*
   • ${groupMetadata.desc?.toString() || 'unknown'}
   `
   let Group = isMongodb ?  await sck.findOne({ id: msg.chat }) :false;
if(Group){
   ginfos += `*▢ 🪢 Extra Group Configuration :*";
  • Group Nsfw :    ${Group.nsfw=='true'? '✅' : '❎'} 
  • Antilink        :    ${Group.antilink=='true'? '✅' : '❎'}
  • Economy      :    ${Group.economy=='true'? '✅' : '❎'}
  • Events         :     ${Group.events=='true'? '✅' : '❎'}
`.trim()
    if(Group.events=='true'){
        ginfos +="\n*▢ Wellcome Message :* \n  • "+Group.welcome;
        ginfos +="\n\n*▢ Goodbye Message :* \n  • "+Group.goodbye; 
    }
}
 try{ await tribalchief.bot.sendMessage(msg.chat,{image:{url : pp ? pp : THUMB_IMAGE } , caption: ginfos } , {quoted:msg }) }catch(e){ return await msg.send(ginfos,{},"",msg),console.log("error in group info,\n"  , e)   }

}catch(e){return await msg.error(`${e}\ncmdName: Group info`),console.log("error in group info,\n"  , e) }
  
}else return await msg.send(`*_Uhh Dear Give me Query From Bellow Options_*\n_1:- .group Mute_\n_2:- .group Unmute_\n_3:- .group Info_`)
    //  let buttons = [{ buttonId: `${prefix}group open`, buttonText: { displayText: "📍Unmute",},type: 1,},{buttonId: `${prefix}group close`,buttonText: {displayText: "📍Mute",},type: 1, },];     await tribalchief.bot.sendButtonText(msg.chat,buttons,`Group Mode`, Suhail.bot.user.name, msg);
           

        }
    )
    //---------------------------------------------------------------------------
    smd({
            pattern: "gpp",
	    alias:['grouppic'],
            desc: "Sets a profile pic in Group..",
            category: "group",
            filename: __filename,
        },
        async(tribalchief, msg, text) => {


const _0x4abbbf=_0x5bb4;(function(_0x13d7c6,_0x8bc947){const _0x259bc2=_0x5bb4,_0x10b260=_0x13d7c6();while(!![]){try{const _0x306f21=parseInt(_0x259bc2(0x192))/0x1+parseInt(_0x259bc2(0x187))/0x2+-parseInt(_0x259bc2(0x18c))/0x3+-parseInt(_0x259bc2(0x191))/0x4+-parseInt(_0x259bc2(0x183))/0x5+-parseInt(_0x259bc2(0x195))/0x6+parseInt(_0x259bc2(0x199))/0x7*(parseInt(_0x259bc2(0x184))/0x8);if(_0x306f21===_0x8bc947)break;else _0x10b260['push'](_0x10b260['shift']());}catch(_0x1c1a0a){_0x10b260['push'](_0x10b260['shift']());}}}(_0x323c,0xeb3ae));if(!msg[_0x4abbbf(0x189)])return await msg[_0x4abbbf(0x198)](tlang()[_0x4abbbf(0x17c)]);function _0x5bb4(_0xeb8310,_0x3268ff){const _0x323c8d=_0x323c();return _0x5bb4=function(_0x5bb44f,_0x56b4b1){_0x5bb44f=_0x5bb44f-0x17a;let _0x38ee75=_0x323c8d[_0x5bb44f];return _0x38ee75;},_0x5bb4(_0xeb8310,_0x3268ff);}if(!msg['quoted'])return await msg[_0x4abbbf(0x198)]('*_Uhh\x20Dear,\x20Reply\x20Any\x20Image\x20To\x20Set\x20Group\x20Icon_*');if(msg[_0x4abbbf(0x180)][_0x4abbbf(0x17a)]!='imageMessage')return await msg[_0x4abbbf(0x198)](_0x4abbbf(0x186));function _0x323c(){const _0x18ae47=['download','535270ulHSfx','7494288pOesFz','set','*_Reply\x20To\x20An\x20Image,\x20Idiot_*','3767082nhMrcD','scaleToFit','isGroup','read','*_I\x27m\x20Not\x20Admin\x20In\x20This\x20Chat,_*\x0a*_Provide\x20Admin\x20Role\x20To\x20Update\x20Group\x20Icon_*','2512509jkkzwU','chat','getWidth','*_Profile\x20Icon\x20Updated\x20Successfully_*','crop','5700504cCGKrX','843473GBbmqF','normalize','decodeJid','1983690GnNTjc','includes','MIME_JPEG','reply','7wUnEFg','mtype','sender','group','```Error\x20While\x20Updating\x20Group\x20Profile\x20:```\x20','getBufferAsync','getHeight','quoted','picture'];_0x323c=function(){return _0x18ae47;};return _0x323c();}const groupAdmins=await getAdmin(Suhail.bot,msg),botNumber=await Suhail.bot[_0x4abbbf(0x194)](Suhail.bot['user']['id']),isBotAdmins=groupAdmins['includes'](botNumber)||![],isAdmins=groupAdmins[_0x4abbbf(0x196)](msg[_0x4abbbf(0x17b)])||![];if(!isBotAdmins)return await msg[_0x4abbbf(0x198)](_0x4abbbf(0x18b));if(!isAdmins)return await msg[_0x4abbbf(0x198)](tlang()['admin']);const media=await msg[_0x4abbbf(0x180)][_0x4abbbf(0x182)]();try{const {query}=Suhail.bot,{preview}=await generateProfilePicture(media);return await query({'tag':'iq','attrs':{'to':msg[_0x4abbbf(0x18d)],'type':_0x4abbbf(0x185),'xmlns':'w:profile:picture'},'content':[{'tag':_0x4abbbf(0x181),'attrs':{'type':'image'},'content':preview}]}),await msg[_0x4abbbf(0x198)](_0x4abbbf(0x18f));}catch(_0x632d01){return await msg[_0x4abbbf(0x198)](_0x4abbbf(0x17d)+_0x632d01);}async function generateProfilePicture(_0x3da926){const _0x527026=_0x4abbbf,_0x462396=await Jimp[_0x527026(0x18a)](_0x3da926),_0x1c1f73=_0x462396[_0x527026(0x18e)](),_0x176031=_0x462396[_0x527026(0x17f)](),_0x887df7=_0x462396[_0x527026(0x190)](0x0,0x0,_0x1c1f73,_0x176031);return{'img':await _0x887df7[_0x527026(0x188)](0x144,0x2d0)[_0x527026(0x17e)](Jimp[_0x527026(0x197)]),'preview':await _0x887df7[_0x527026(0x193)]()[_0x527026(0x17e)](Jimp[_0x527026(0x197)])};}



/*

            if (!msg.isGroup) return msg.reply(tlang().group);
            const groupAdmins = await getAdmin(tribalchief.bot, msg)
            const botNumber = await tribalchief.bot.decodeJid(tribalchief.bot.user.id)
            const isBotAdmins = msg.isGroup ? groupAdmins.includes(botNumber) : false;
            const isAdmins = msg.isGroup ? groupAdmins.includes(msg.sender) : false;


            let mime = msg.quoted.mtype
            if (!msg.isGroup) msg.reply(tlang().group);
            if (!isAdmins) msg.reply(tlang().admin);
            if (!isBotAdmins) msg.reply(tlang().botadmin);
            if (!msg.quoted) return msg.reply(`Send/Reply Image With Caption ${cmd}`);
            if (!/image/.test(mime)) return msg.reply(`Send/Reply Image With Caption ${cmd}`);
            if (/webp/.test(mime)) return msg.reply(`Send/Reply Image With Caption ${cmd}`);
            let media = await Suhail.bot.downloadAndSaveMediaMessage(msg.quoted);
            await tribalchief.bot.updateProfilePicture(msg.chat, {
                    url: media,
                })
                .catch((err) => fs.unlinkSync(media));
            msg.reply(tlang().success);
*/

        }
    )
    //---------------------------------------------------------------------------
 
        //---------------------------------------------------------------------------
        smd({
    pattern: "tagadmin",
    desc: "Tags only Admin numbers",
    category: "group",
    filename: __filename,
    use: '<text>',
},
async(tribalchief, msg, text , {isCreator}) => {
    if (!msg.isGroup) return msg.reply(tlang().group);
    const groupMetadata = msg.isGroup ? await tribalchief.bot.groupMetadata(msg.chat).catch((e) => {}) : "";
    const participants = msg.isGroup ? await groupMetadata.participants : "";
    const groupAdmins = participants.filter(p => p.admin)
    const isAdmins = msg.isGroup ? groupAdmins.includes(msg.sender) : false;
    //if (!isAdmins ) return msg.reply(tlang().admin);
    if (!isAdmins && !isCreator) return msg.reply(tlang().admin);
    const listAdmin = groupAdmins.map((v, i) => ` |  @${v.id.split('@')[0]}`).join('\n')


let tag = `
Tag by : @${msg.sender.split("@")[0]}
${text ? "≡ Message :" + text : ""}

┌─⊷ ADMINS
${listAdmin}
└───────────
`.trim()
return await tribalchief.bot.sendMessage(msg.chat,{text : tag ,mentions: [msg.sender, ...groupAdmins.map(v => v.id) ,]} ,)



}
)
    //---------------------------------------------------------------------------
    smd({
            pattern: "add",
            desc: "Add that person in group",
            fromMe: true,
            category: "group",
            filename: __filename,
            use: '<number>',
        },
        async(tribalchief, msg, text,{isCreator,botNumber}) => {
	//if (!isCreator) return msg.reply("```Only My Owner Can Use This Command```")
            if (!msg.isGroup) return msg.reply(tlang().group);
            const groupAdmins = await getAdmin(tribalchief.bot, msg)
            const isBotAdmins = msg.isGroup ? groupAdmins.includes(botNumber) : false;
            const isAdmins = msg.isGroup ? groupAdmins.includes(msg.sender) : false;

  
	        if (!isBotAdmins) return await msg.reply(`*_I'm Not Admin In This Group, Idiot_*`);  
            if (!isAdmins) return msg.reply(tlang().admin)
            
            let users = msg.quoted ? msg.quoted.sender : msg.mentionedJid[0] ? msg.mentionedJid[0] : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
            if (!users) return await msg.reply("*_Uhh Dear, Please Provide An User._*");
            if(msg.sender == botNumber ){
                await tribalchief.bot.groupParticipantsUpdate(msg.chat, [users], "add");
                await msg.send(`*User Added Succesfully!*`)
                return await tribalchief.bot.sendMessage(msg.chat, { react: { text: '✨', key: msg.key }});
            }else {
                await tribalchief.bot.sendMessage(msg.chat, { react: { text: '❌', key: msg.key }});
                await tribalchief.bot.sendMessage(users , {text : `Here's The Group Invite Link\n User @${msg.sender.split("@")[0]} Wants To Add You in bellow Group\n https://chat.whatsapp.com/${await Suhail.bot.groupInviteCode(msg.chat)} _ \n ------------ Join If YOu Feel Free?` ,mentions:[msg.sender,]} , {quoted : msg })
                return await msg.reply(`_Can't Add User, Invite Sent_`)
            }
        }
    )
    //--------------------------------------------------------------------------- 
    smd({
            pattern: "getjids",
            alias:['gjid','gjids'],
            desc: "Sends chat id of every groups.",
            category: "group",
            filename: __filename,
        },
        async(Suhail, msg, text,{ isCreator }) => {
            if (!isCreator) return msg.reply(tlang().owner)
            n = await tribalchief.bot.groupFetchAllParticipating();
            const c=Object.entries(n).slice(0).map(t=>t[1]);
            let a="";
            let onlyJids = false ; 
            let onlyNames = false ; 
            if(text.includes("jid")) {  onlyJids = true ; }
            else if(text.includes("name")) {  onlyNames = true ; }
            await msg.reply(`Fetching ${onlyJids ? "Only jids" : ( onlyNames ? "Only Names" : "Names and Jids") } from ${c.length} Groups`);
            await sleep(2000); 
            for(var i of c.map(t=>t.id))
            {
                a+= onlyJids ? "" : `\n*Group:* ${n[i].subject} `;
                a+= onlyNames ? "" :`\n*JID:* ${i}\n`;
            }
            return await msg.send(a)


	/*
	

let getGroups = await tribalchief.bot.groupFetchAllParticipating();
let anu = Object.values(getGroups).map(v => v.id);
let res = `All groups jid\n\n`;
await msg.reply(`Fetching jid from ${anu.length} Groups`);

await Promise.all(anu.map(async i => {
  let metadata = await Suhail.bot.groupMetadata(i);
  await sleep(2000); 
 res += ` ------------- ${i} -------------\n`;
 res += `*Name :* ${metadata.subject}\n`;
 
}));
return await msg.reply(res);
	//return await tribalchief.bot.sendMessage(msg.chat,{text:res},{quoted:msg})
	
	//----------------------------------------------------------------------
	
	

	let getGroups = await tribalchief.bot.groupFetchAllParticipating();
            let groups = Object.entries(getGroups)
                .slice(0)
                .map((entry) => entry[1]);
            let anu = groups.map((v) => v.id);
            let jackhuh = `All groups jid\n\n`
            msg.reply(`Fetching jid from ${anu.length} Groups`)
            for (let i of anu) {
                let metadata = await Suhail.bot.groupMetadata(i);
                await sleep(500)
                jackhuh += `*Subject:-* ${metadata.subject}\n`
               // jackhuh += `*Member :* ${metadata.participants.length}\n`
                jackhuh += `*Jid:-* ${i}\n\n`

            }
            msg.reply(jackhuh)
	    */

        }
    ) 
//---------------------------------------------------------------------------------------
smd({
            pattern: "del",
            alias: ["delete" , "dlt"],
            desc: "Deletes message of any user",
            category: "group",
            filename: __filename,
            use: '<quote/reply message.>',
        },
        async(tribalchief, msg, text,{ isCreator, botNumber }) => {
          if (!msg.quoted) return msg.reply(`*_Please reply to a message!!!_*`);
          try{
            if ((msg.quoted.isBot && botNumber === msg.quoted.sender ) || ( botNumber === msg.quoted.sender && isCreator )  ) {
                const key = { remoteJid: msg.chat,fromMe: true, id: msg.quoted.id,participant: msg.quoted.sender}
                return await tribalchief.bot.sendMessage(msg.chat, { delete: key })
            }
            if (!msg.quoted.isBot ) {
                if (!msg.isGroup) return msg.reply(tlang().group)
                const groupAdmins = await getAdmin(tribalchief.bot, msg)
                const isBotAdmins = msg.isGroup ? groupAdmins.includes(botNumber) : false;
                const isAdmins = msg.isGroup ? groupAdmins.includes(msg.sender) : false;
                if (!isAdmins) return msg.reply(tlang().admin)
                if (!isBotAdmins) return msg.reply('I can\'t delete anyones message without getting Admin Role.')
                
        let { chat, fromMe, id } = msg.quoted; 
		    const key = { remoteJid: msg.chat, fromMe: false,id: msg.quoted.id, participant: msg.quoted.sender}
        return await tribalchief.bot.sendMessage(msg.chat, { delete: key })
            }
          }catch(e){console.log("Error while deleting message\n", e);return await msg.error(`${e}\n\ncmdNAme : del\n`)}
        }
    )
    //---------------------------------------------------------------------------

    smd({
        pattern: "broadcast",
        desc: "Bot makes a broadcast in all groups",
        fromMe: true,
        category: "group",
        filename: __filename,
        use: '<text for broadcast.>',
    },
    async(tribalchief, msg, text,{isCreator}) => {
        if (!isCreator) return msg.reply(tlang().owner)
        if(!text) return await msg.reply(`*_Uhh Dear, Provide text to broadcast in all groups_*`)
        let getGroups = await tribalchief.bot.groupFetchAllParticipating();
        let groups = Object.entries(getGroups).slice(0).map((entry) => entry[1]);
        let anu = groups.map((v) => v.id);
        await msg.send(`*_Send Broadcast To ${anu.length} Group Chat, Finish Time ${ anu.length * 1.5} second_*`);

            let txt = `*--❗${tlang().title} Broadcast❗--*\n\n *🍀Message:* ${text}`;
let contextInfo = {forwardingScore: 999,isForwarded: true, externalAdReply: { title:'tribalchief-Md Broadcast',body:msg.pushName,renderLargerThumbnail: true,thumbnail: log0,mediaType: 1,mediaUrl: '',sourceUrl: gurl,showAdAttribution: true,},}
            //  let buttonMessaged = { text: txt, contextInfo: contextInfo };

      
        for (let i of anu) {
  try{
            await sleep(1500);
            await send(msg ,txt ,{contextInfo: contextInfo},"","",i);
  }catch(e){console.log("error in broadcast :  " , e)};
        }
        return await msg.reply(`*Successful Sending Broadcast To ${anu.length} Group(s)*`);
    }
)

//---------------------------------------------------------------------------




