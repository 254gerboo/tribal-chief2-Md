/** 
 * 
 * CURRENTLY RUNNING ON BETA VERSION!!
*
   * @project_name : tribal-chief-Md
   * @author : 254gerboo
   * @description : tribal-chief-Md ,A Multi-functional whatsapp user bot.
   * @version 1.2.2
*
   * Licensed under the  GPL-3.0 License;
* 
   * Created By Suhail Tech Info.
   * © 2023 Suhail-Md.
* 
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
   * SOFTWARE.

 **/

const axios = require('axios')
const fs = require('fs-extra');
const { exec } = require('child_process')
const { Sticker, createSticker, StickerTypes } = require("wa-sticker-formatter");
const fetch = require('node-fetch');
 const { userdb, tiny, fancytext,getBuffer, listall ,getRandom, prefix,smd,generateSticker, TelegraPh , Config  , tlang} = require('../lib/')






//---------------------------------------------------------------------------
smd({pattern: "sticker",alias: ["s"], desc: "Makes sticker of replied image/video.",category: "sticker", filename: __filename, use: '<reply to any image/video.>' },
         async(tribalchief, msg,) => {
          let mime = msg.mtype;
          let media ;
          if (mime =="imageMessage" || mime =="videoMessage") {  media = await msg.download(); }
          else if (msg.quoted){ 
            mime = msg.quoted.mtype; 
            if (mime =="imageMessage" || mime =="videoMessage" || mime =="stickerMessage") {  media = await msg.quoted.download(); }
            else return msg.reply("*Uhh Dear, Reply to image/video*")
          }else return msg.reply("*Uhh Dear, Reply to image/video*");
          let options={pack: Config.packname,author: Config.author,type: StickerTypes.FULL,quality: 20, }
          return await generateSticker(tribalchief, msg, 'sticker', media, options ) , media = false; 
           
})
  //---------------------------------------------------------------------------

     //---------------------------------------------------------------------------
 smd({pattern: "take", desc: "Makes sticker of replied image/video.", category: "sticker", filename: __filename},
         async(tribalchief, msg, text) => {
             if (!msg.quoted) return msg.reply("*Uhh Dear, Reply to sticker*");
             let mime = msg.quoted.mtype
             if ( mime !="stickerMessage") return await msg.reply("*Uhh Please, Reply to sticker*") 
             var pack; var author;
             if (text) {let anu = text.split("|");pack = anu[0] !== "" ? anu[0] : msg.pushName; author = anu[1] && anu[1]!==""? anu[1] : 'Suhail.bot-Md ♥️'; } 
              else { pack = msg.pushName;  author = 'tribalchief.bot-Md ♥️'  }
              let media = await msg.quoted.download();

           let options={pack: pack,author: author,type: StickerTypes.FULL,quality: 75, }
           return await generateSticker(tribalchief, msg, 'take', media, options ) , media = false;
});
  //---------------------------------------------------------------------------
 smd({pattern: "attp",desc: "Makes sticker of given text.",category: "sticker",filename: __filename,use: '<text>'},
  async(tribalchief, msg, text , {smdName}) => {
 if(!text) return msg.reply("*Please provide text to generate sticker*")
let media  = await getBuffer(`https://raganork-api.onrender.com/api/attp?text=${text}&apikey=with_love_souravkl11`);
return await generateSticker(tribalchief, msg, smdName, media, );
  })
     //---------------------------------------------------------------------------

 smd({pattern: "crop",alias: ["cropsticker"], desc: "Makes sticker of replied image.", category: "sticker",filename: __filename,use: '<reply image>'},
         async(tribalchief, msg,) => {
             if (!msg.quoted) return msg.reply("*Uhh Dear, Reply to an image*");
             let mime = msg.quoted.mtype;
             if (mime =="imageMessage"  || mime =="stickerMessage") {
              let media = await msg.quoted.download();
               let options={pack: Config.packname,author: Config.author,type: StickerTypes.CROPPED,quality: 75, }
              return await generateSticker(tribalchief, msg, 'crop', media, options ) , media = false;               
             }else return msg.reply("*Uhh please, Reply to an image*");
 
         }
     )
    //---------------------------------------------------------------------------
 smd({ pattern: "circle", alias: ["circlestic","circlesticker","cs"], desc: "circle sticker of image.",category: "sticker",filename: __filename, use: '<repl image.>'},
         async(tribalchief, msg,) => {
             if (!msg.quoted) return msg.reply("*Uhh dear, Reply to an image*");
             let mime = msg.quoted.mtype
            if (mime =="imageMessage" || mime =="stickerMessage") {
              let media = await msg.quoted.download();
              let options={pack: Config.packname,author: Config.author,type: StickerTypes.CIRCLE,quality: 75, }
              return await generateSticker(tribalchief, msg, 'circle', media, options ) , media = false;
            }else return msg.reply("*Uhh please, Reply to an image*");
         })
 //---------------------------------------------------------------------------
smd({pattern: "round", alias: ["roundstic","roundsticker"], desc: "Makes sticker of replied image/video.",category: "sticker", filename: __filename,use: '<reply to any image/video.>' },
         async(tribalchief, msg,) => {
            if (!msg.quoted) return msg.reply("*Uhh dear, Reply to an image*");
            let mime = msg.quoted.mtype
            if (mime =="imageMessage" || mime =="stickerMessage") {
              let media = await msg.quoted.download();              
              let options={pack: Config.packname,author: Config.author,type: StickerTypes.ROUNDED,quality: 75, }
              return await generateSticker(tribalchief, msg, 'circle', media, options ) , media = false;
            }else return msg.reply("*Uhh please, Reply to an image*");
})



 //---------------------------------------------------------------------------







smd({
        pattern: "wallpaper",
        desc: "To get Random Pics",
       category: "Anime Pics",
        filename: __filename
    },

    async(tribalchief, msg, text) => {


const response = await fetch('https://api.unsplash.com/photos/random?client_id=72utkjatCBC-PDcx7-Kcvgod7-QOFAm2fXwEeW8b8cc');
const data = await response.json();
  const url =data.urls.regular
                let buttonMessaged = {
                    image: { url: url },
                    caption: '*---Random Wallpapers Here---*',
                    footer: tlang().footer,
                    headerType: 4,
                   
                };
                return await tribalchief.bot.sendMessage(msg.chat, buttonMessaged , {quoted : msg});


}
   )
    //---------------------------------------------------------------------------


//================================================================================
/*
smd({
            pattern: "fancy",
            desc: "Makes stylish/fancy given text",
            category: "converter",
            use: '56 tribalchief',
           // react: "✅",
            filename: __filename
        },
        async(tribalchief, msg, text) => {
            if (isNaN(text.split(" ")[0]) || !text) {
                let text = tiny(
                    "Fancy text generator\n\n*_______________________________*\n*Example: .fancy 32 tribalchief Md*\n*_______________________________*\n\n"
                );
                listall("tribalchief").forEach((txt, num) => {
                    text += `${(num += 1)} ${txt}\n`;
                });
                return await msg.reply(text);
            }

            let fancytextt = await fancytext(`${text.slice(2)}`, text.split(" ")[0])
            return await msg.send(fancytextt)

        }
    )
    */
    //---------------------------------------------------------------------------

 
function _0x27a9(){const _0x48f920=['send','random','#000000','toMp4\x20:\x20','394977tiSphq','getName','*_Uhh\x20Please,\x20Reply\x20To\x20A\x20Non\x20Animated\x20Sticker_*','../lib','#FFFFFF','Quotely\x20:\x20','tiny\x20:\x20','toMp4','Write\x20text\x20on\x20quoted\x20image.','memegen','photo\x20:\x20','https://bot.lyo.su/quote/generate','chat','Example\x20:\x20','sendMessage','error','quotely','sender','unlink','name','*This\x20is\x20Not\x20A\x20ViewOnce\x20Message*','Makes\x20photo\x20of\x20replied\x20sticker.','3699535CXmlLo','*_Reply\x20to\x20Any\x20Sticker._*','sticker','*Damn...\x20Reply\x20To\x20An\x20Animated\x20Sticker\x20or\x20Gif\x20*','emix','<url>','Quot\x20Entered','tovideo','FULL','json','results','log','url','audio/mpeg','imageMessage','tiny','text','*_Can\x27t\x20create\x20mixture,\x20try\x20other\x20emojies_*','mimetype','startsWith','*🛡️Your\x20Shortened\x20URL*\x0a\x0a','mp3','floor','<text>','test','*Uhh\x20Dear,\x20Reply\x20To\x20Animated\x20Sticker\x20or\x20Gif*','<query>','1215120CJfueZ','reply','quoted','msg','Makes\x20url\x20tiny.','packname','videoMessage','bot','7279020MbnHxJ','png','length','https://api.memegen.link/images/custom/','locale','quote','message','Makes\x20Sticker\x20of\x20quoted\x20text.','tovid','data','split','audioMessage','profilePictureUrl','converter','viewonce','ViewOnce\x20Entered','stickerMessage','8493216zMMbLE','caption','*please\x20provide\x20text\x20and\x20image*','emix\x20:\x20','1446220EuxAOp','*Uh\x20Please\x20Reply\x20A\x20ViewOnce\x20Message*','memegen\x20:\x20','readFileSync','28LiDJvQ','contextInfo','Mixes\x20two\x20emojies.','result','Provide\x20me\x20a\x20link','changes\x20type\x20to\x20audio.','mtype','image','base64','get','.png','emix\x20😅,🤔','downloadAndSaveMediaMessage','<reply\x20to\x20any\x20message.>','1937184ziLPFp'];_0x27a9=function(){return _0x48f920;};return _0x27a9();}function _0x3f54(_0x35dcce,_0x120c5d){const _0x27a914=_0x27a9();return _0x3f54=function(_0x3f549a,_0x78ab66){_0x3f549a=_0x3f549a-0x1cd;let _0x6fe690=_0x27a914[_0x3f549a];return _0x6fe690;},_0x3f54(_0x35dcce,_0x120c5d);}const _0x3f3dc0=_0x3f54;(function(_0x3751fe,_0x5dfd8b){const _0x2d15d7=_0x3f54,_0x28f1db=_0x3751fe();while(!![]){try{const _0x1b183a=-parseInt(_0x2d15d7(0x201))/0x1+-parseInt(_0x2d15d7(0x1e4))/0x2+parseInt(_0x2d15d7(0x218))/0x3*(parseInt(_0x2d15d7(0x205))/0x4)+parseInt(_0x2d15d7(0x1ec))/0x5+parseInt(_0x2d15d7(0x1fd))/0x6+-parseInt(_0x2d15d7(0x22e))/0x7+-parseInt(_0x2d15d7(0x213))/0x8;if(_0x1b183a===_0x5dfd8b)break;else _0x28f1db['push'](_0x28f1db['shift']());}catch(_0x13d1a8){_0x28f1db['push'](_0x28f1db['shift']());}}}(_0x27a9,0xec748),smd({'pattern':_0x3f3dc0(0x1d8),'desc':_0x3f3dc0(0x1e8),'category':_0x3f3dc0(0x1f9),'use':_0x3f3dc0(0x1ce),'react':'✅','filename':__filename},async(_0x22b6f1,_0x5b3858,_0x471d11)=>{const _0x54253b=_0x3f3dc0;if(!_0x471d11)return _0x5b3858[_0x54253b(0x1e5)](_0x54253b(0x209));try{let _0x37f738=_0x471d11[_0x54253b(0x1f6)]('\x20')[0x0],_0x49195b=await axios[_0x54253b(0x20e)]('https://tinyurl.com/api-create.php?url='+_0x37f738);_0x5b3858['send'](_0x54253b(0x1dd)+_0x49195b[_0x54253b(0x1f5)]);}catch(_0x1c9308){return await _0x5b3858['error'](_0x1c9308),console['log'](_0x54253b(0x21e),_0x1c9308);}}),smd({'pattern':'toaudio','alias':[_0x3f3dc0(0x1de),'tomp3'],'desc':_0x3f3dc0(0x20a),'category':_0x3f3dc0(0x1f9),'use':'<reply\x20to\x20any\x20Video>','filename':__filename},async(_0x2d9734,_0x53e6db,_0x386677)=>{const _0x818a9e=_0x3f3dc0;if(!_0x53e6db[_0x818a9e(0x1e6)])return _0x53e6db[_0x818a9e(0x1e5)]('_Reply\x20to\x20Any\x20Video_');let _0x347a55=_0x53e6db[_0x818a9e(0x1e6)][_0x818a9e(0x20b)];if(_0x347a55==_0x818a9e(0x1f7)||_0x347a55==_0x818a9e(0x1ea))try{let _0x5e0647=await _0x2d9734[_0x818a9e(0x1eb)][_0x818a9e(0x211)](_0x53e6db[_0x818a9e(0x1e6)]);const {toAudio:_0xe3bec3}=require(_0x818a9e(0x21b));let _0x23eea9=fs[_0x818a9e(0x204)](_0x5e0647),_0x584542=await _0xe3bec3(_0x23eea9);await _0x2d9734['bot'][_0x818a9e(0x226)](_0x53e6db['chat'],{'audio':_0x584542,'mimetype':_0x818a9e(0x1d6)},{'quoted':_0x53e6db});try{return await fs[_0x818a9e(0x22a)](_0x5e0647);}catch(_0x283624){}}catch(_0x415f8c){return await _0x53e6db[_0x818a9e(0x227)](_0x415f8c),console[_0x818a9e(0x1d4)]('audio\x20:\x20',_0x415f8c);}else return _0x53e6db[_0x818a9e(0x214)]('*Uhh\x20Please,\x20Reply\x20To\x20A\x20video\x20Message*');}),smd({'pattern':_0x3f3dc0(0x21f),'alias':['mp4',_0x3f3dc0(0x1d0),_0x3f3dc0(0x1f4)],'desc':'changes\x20type\x20to\x20audio.','category':'converter','use':'<reply\x20to\x20any\x20Video>','filename':__filename},async(_0x3c8c59,_0x5ec215,_0x4be7c9)=>{const _0x5d8916=_0x3f3dc0,{webp2mp4File:_0x3e0f21}=require(_0x5d8916(0x21b));if(!_0x5ec215[_0x5d8916(0x1e6)])return _0x5ec215[_0x5d8916(0x214)](_0x5d8916(0x1e2));let _0x568e04=_0x5ec215['quoted']['mtype'],_0x5a9f34=_0x5ec215[_0x5d8916(0x1e6)][_0x5d8916(0x1db)];if(_0x568e04!=_0x5d8916(0x1ea)&&!/webp/['test'](_0x5a9f34))return await _0x5ec215[_0x5d8916(0x214)](_0x5d8916(0x231));let _0x36c004=await _0x3c8c59[_0x5d8916(0x1eb)][_0x5d8916(0x211)](_0x5ec215[_0x5d8916(0x1e6)]);try{if(/webp/[_0x5d8916(0x1e1)](_0x5a9f34)){let _0xd377dd=await _0x3e0f21(_0x36c004);_0x36c004=_0xd377dd[_0x5d8916(0x208)];}await _0x3c8c59[_0x5d8916(0x1eb)][_0x5d8916(0x226)](_0x5ec215['chat'],{'video':{'url':_0x36c004},'caption':Config[_0x5d8916(0x1fe)]});try{return await fs['unlink'](_0x36c004);}catch(_0x558e22){}}catch(_0x2abbd2){return await _0x5ec215[_0x5d8916(0x227)](_0x2abbd2),console[_0x5d8916(0x1d4)](_0x5d8916(0x217),_0x2abbd2);}}),smd({'pattern':'photo','desc':_0x3f3dc0(0x22d),'category':_0x3f3dc0(0x1f9),'use':'<reply\x20to\x20any\x20gif>','filename':__filename},async(_0x3271fb,_0x1dd66c,_0x1668df)=>{const _0x3591b7=_0x3f3dc0;if(!_0x1dd66c[_0x3591b7(0x1e6)])return _0x1dd66c['reply'](_0x3591b7(0x22f));let _0x4b3227=_0x1dd66c[_0x3591b7(0x1e6)][_0x3591b7(0x20b)];if(_0x4b3227=='imageMessage'||_0x4b3227==_0x3591b7(0x1fc))try{let _0x765bf0=await _0x3271fb[_0x3591b7(0x1eb)][_0x3591b7(0x211)](_0x1dd66c[_0x3591b7(0x1e6)]),_0x1bd289=await getRandom(_0x3591b7(0x20f));exec('ffmpeg\x20-i\x20'+_0x765bf0+'\x20'+_0x1bd289,_0x35f558=>{const _0x3749ba=_0x3591b7;let _0x338fa5=fs[_0x3749ba(0x204)](_0x765bf0);_0x3271fb[_0x3749ba(0x1eb)][_0x3749ba(0x226)](_0x1dd66c[_0x3749ba(0x224)],{'image':_0x338fa5},{'quoted':_0x1dd66c});try{return fs[_0x3749ba(0x22a)](_0x765bf0);}catch(_0x1d61ea){}});}catch(_0x1d09ec){return await _0x1dd66c[_0x3591b7(0x227)](_0x1d09ec),console[_0x3591b7(0x1d4)](_0x3591b7(0x222),_0x1d09ec);}else return _0x1dd66c[_0x3591b7(0x1e5)](_0x3591b7(0x21a));}),smd({'pattern':'vv','alias':[_0x3f3dc0(0x1fa),'retrive'],'desc':'Flips\x20given\x20text.','category':'misc','use':_0x3f3dc0(0x1e3),'filename':__filename},async(_0x23983d,_0x2e045b,_0x45e740)=>{const _0x10df69=_0x3f3dc0;try{const _0x26e390=_0x2e045b[_0x10df69(0x1e7)][_0x10df69(0x206)]['quotedMessage']['viewOnceMessageV2'];if(_0x26e390){if(_0x26e390[_0x10df69(0x1f2)]['imageMessage']){console[_0x10df69(0x1d4)](_0x10df69(0x1cf));let _0x4cf685=_0x26e390[_0x10df69(0x1f2)][_0x10df69(0x1d7)]['caption'],_0x2f1906=await _0x23983d[_0x10df69(0x1eb)][_0x10df69(0x211)](_0x26e390[_0x10df69(0x1f2)][_0x10df69(0x1d7)]);return _0x23983d['bot']['sendMessage'](_0x2e045b[_0x10df69(0x224)],{'image':{'url':_0x2f1906},'caption':_0x4cf685});}if(_0x26e390[_0x10df69(0x1f2)][_0x10df69(0x1ea)]){let _0x5b0eef=_0x26e390[_0x10df69(0x1f2)][_0x10df69(0x1ea)][_0x10df69(0x1fe)],_0x422f37=await _0x23983d['bot'][_0x10df69(0x211)](_0x26e390['message'][_0x10df69(0x1ea)]);return _0x23983d[_0x10df69(0x1eb)][_0x10df69(0x226)](_0x2e045b['chat'],{'video':{'url':_0x422f37},'caption':_0x5b0eef});}}}catch(_0x262ecf){console['log']('error',_0x262ecf);}if(!_0x2e045b[_0x10df69(0x1e6)])return _0x2e045b['reply'](_0x10df69(0x202));if(_0x2e045b[_0x10df69(0x1e6)][_0x10df69(0x20b)]==='viewOnceMessage'){console[_0x10df69(0x1d4)](_0x10df69(0x1fb));if(_0x2e045b[_0x10df69(0x1e6)][_0x10df69(0x1f2)][_0x10df69(0x1d7)]){let _0x5b7b8a=_0x2e045b[_0x10df69(0x1e6)]['message'][_0x10df69(0x1d7)]['caption'],_0x506594=await _0x23983d[_0x10df69(0x1eb)][_0x10df69(0x211)](_0x2e045b['quoted']['message'][_0x10df69(0x1d7)]);_0x23983d[_0x10df69(0x1eb)][_0x10df69(0x226)](_0x2e045b[_0x10df69(0x224)],{'image':{'url':_0x506594},'caption':_0x5b7b8a});}else{if(_0x2e045b[_0x10df69(0x1e6)][_0x10df69(0x1f2)]['videoMessage']){let _0x21277b=_0x2e045b[_0x10df69(0x1e6)][_0x10df69(0x1f2)]['videoMessage'][_0x10df69(0x1fe)],_0x2a0228=await _0x23983d[_0x10df69(0x1eb)][_0x10df69(0x211)](_0x2e045b[_0x10df69(0x1e6)]['message'][_0x10df69(0x1ea)]);_0x23983d['bot'][_0x10df69(0x226)](_0x2e045b[_0x10df69(0x224)],{'video':{'url':_0x2a0228},'caption':_0x21277b});}}}else return _0x2e045b[_0x10df69(0x1e5)](_0x10df69(0x22c));}),smd({'pattern':_0x3f3dc0(0x221),'desc':_0x3f3dc0(0x220),'category':_0x3f3dc0(0x230),'filename':__filename,'use':_0x3f3dc0(0x1e0)},async(_0x17521b,_0x114d5d,_0x394ca3)=>{const _0x343dcb=_0x3f3dc0;if(!_0x394ca3&&!_0x114d5d[_0x343dcb(0x1e6)])return await _0x114d5d[_0x343dcb(0x1e5)](_0x343dcb(0x1ff));if(_0x114d5d[_0x343dcb(0x1e6)]['mtype']!='imageMessage')return _0x114d5d[_0x343dcb(0x1e5)]('*Uhh\x20please,\x20Reply\x20to\x20an\x20image*');let _0x1906ca=_0x394ca3[_0x343dcb(0x1f6)]('|')[0x0]||'',_0x349723=_0x394ca3[_0x343dcb(0x1f6)]('|')[0x1]||_0x343dcb(0x230),_0x4796c5=_0x1906ca[_0x343dcb(0x1f6)](';')[0x0]||'Suhail',_0x3aa86e=_0x1906ca[_0x343dcb(0x1f6)](';')[0x1]||'_';try{let _0x19212c=await _0x17521b[_0x343dcb(0x1eb)][_0x343dcb(0x211)](_0x114d5d[_0x343dcb(0x1e6)]),_0x14d649=await TelegraPh(_0x19212c);try{return await fs[_0x343dcb(0x22a)](_0x2ea48e);}catch(_0x29c871){}let _0x2ea48e=await getBuffer(_0x343dcb(0x1ef)+_0x3aa86e+'/'+_0x4796c5+'.png?background='+_0x14d649);if(_0x349723['toLowerCase']()[_0x343dcb(0x1dc)]('p'))return await _0x17521b[_0x343dcb(0x1eb)][_0x343dcb(0x226)](_0x114d5d['chat'],{'image':_0x2ea48e,'caption':Config[_0x343dcb(0x1fe)]});let _0x5a4ab9={'pack':Config['packname'],'author':Config['author'],'type':StickerTypes[_0x343dcb(0x1d1)],'quality':0x64};return await generateSticker(_0x17521b,_0x114d5d,_0x343dcb(0x230),_0x2ea48e,_0x5a4ab9),_0x2ea48e=![];}catch(_0x513268){return await _0x114d5d[_0x343dcb(0x227)](_0x513268),console[_0x343dcb(0x1d4)](_0x343dcb(0x203),_0x513268);}}),smd({'pattern':_0x3f3dc0(0x1cd),'desc':_0x3f3dc0(0x207),'category':_0x3f3dc0(0x230),'use':_0x3f3dc0(0x1e3),'filename':__filename},async(_0x15e40a,_0x23f842,_0x24e950,{isCreator:_0x38eaef})=>{const _0x24285c=_0x3f3dc0;if(!_0x24e950)return _0x23f842[_0x24285c(0x1e5)](_0x24285c(0x225)+prefix+_0x24285c(0x210));let _0x41d573=_0x24e950['split'](',')[0x0],_0x1e4c04=_0x24e950[_0x24285c(0x1f6)](',')[0x1];try{const _0xdd8055=await fetch('https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q='+_0x41d573+'_'+_0x1e4c04),_0x26fff4=await _0xdd8055[_0x24285c(0x1d2)]();if(_0x26fff4[_0x24285c(0x1f0)]=='')return _0x23f842[_0x24285c(0x214)](_0x24285c(0x1da));else{let _0x5b351a=await getBuffer(_0x26fff4[_0x24285c(0x1d3)][0x0][_0x24285c(0x1d5)]),_0x4eb496={'pack':Config[_0x24285c(0x1e9)],'author':Config['author'],'type':StickerTypes[_0x24285c(0x1d1)],'quality':0x5a};return await generateSticker(_0x15e40a,_0x23f842,_0x24285c(0x230),_0x5b351a,_0x4eb496),_0x5b351a=![];}}catch(_0x9e745){return await _0x23f842[_0x24285c(0x227)](_0x9e745),console[_0x24285c(0x1d4)](_0x24285c(0x200),_0x9e745);}}),smd({'pattern':_0x3f3dc0(0x228),'desc':_0x3f3dc0(0x1f3),'alias':['q'],'category':_0x3f3dc0(0x230),'use':_0x3f3dc0(0x212),'filename':__filename},async(_0x6dea89,_0x38a4a7,_0x1682a1)=>{const _0x1f1a41=_0x3f3dc0;try{if(!_0x38a4a7[_0x1f1a41(0x1e6)])return _0x38a4a7['reply']('Please\x20quote/reply\x20to\x20any\x20message');let _0xb1f2f0=_0x38a4a7[_0x1f1a41(0x1e6)][_0x1f1a41(0x1d9)],_0x396363;try{_0x396363=await _0x6dea89[_0x1f1a41(0x1eb)][_0x1f1a41(0x1f8)](_0x38a4a7['quoted'][_0x1f1a41(0x229)],'image');}catch(_0x173c95){_0x396363=THUMB_IMAGE;}let _0x381768=[_0x1f1a41(0x21c),_0x1f1a41(0x216)],_0x1b1066=_0x381768[Math[_0x1f1a41(0x1df)](Math[_0x1f1a41(0x215)]()*_0x381768[_0x1f1a41(0x1ee)])]; try{ var _0x1bcda0 = global.isMongodb ? await userdb['findOne']({'id':_0x38a4a7[_0x1f1a41(0x1e6)]['sender']}) : {} ; }catch(e){var _0x1bcda0 =  {} ;console.log(e);}var _0xc047af;_0x1bcda0[_0x1f1a41(0x22b)]&&_0x1bcda0['name']!==undefined?_0xc047af=_0x1bcda0[_0x1f1a41(0x22b)]:_0xc047af=_0x6dea89[_0x1f1a41(0x1eb)][_0x1f1a41(0x219)](_0x38a4a7['quoted'][_0x1f1a41(0x229)]);let _0x299b56={'type':_0x1f1a41(0x1f1),'format':_0x1f1a41(0x1ed),'backgroundColor':_0x1b1066,'width':0x200,'height':0x200,'scale':0x3,'messages':[{'avatar':!![],'from':{'first_name':_0xc047af,'language_code':'en','name':_0xc047af,'photo':{'url':_0x396363}},'text':_0xb1f2f0,'replyMessage':{}}]},_0x3328e=await axios['post'](_0x1f1a41(0x223),_0x299b56),_0x637cf1=Buffer['alloc'](_0x3328e[_0x1f1a41(0x1f5)][_0x1f1a41(0x208)][_0x1f1a41(0x20c)][_0x1f1a41(0x1ee)],_0x3328e[_0x1f1a41(0x1f5)][_0x1f1a41(0x208)][_0x1f1a41(0x20c)],_0x1f1a41(0x20d));return _0x38a4a7[_0x1f1a41(0x214)](_0x637cf1,{'packname':Config[_0x1f1a41(0x1e9)],'author':''},_0x1f1a41(0x230));}catch(_0x5eae08){return await _0x38a4a7[_0x1f1a41(0x227)](_0x5eae08),console[_0x1f1a41(0x1d4)](_0x1f1a41(0x21d),_0x5eae08);}}));/** tooptt */function _0x3ddc(_0x15d29e,_0x1fbeb6){const _0x296467=_0x2964();return _0x3ddc=function(_0x3ddcd6,_0x2e7b83){_0x3ddcd6=_0x3ddcd6-0x97;let _0x8b9d29=_0x296467[_0x3ddcd6];return _0x8b9d29;},_0x3ddc(_0x15d29e,_0x1fbeb6);}function _0x2964(){const _0x4ec786=['1011vpVzre','<reply\x20to\x20any\x20audio>','toptt','4477170LBlKIi','audio/mpeg','307516UsyWnF','quoted','5EAiZLE','410158MadVrx','Error\x20in\x20Audio\x20to\x20Voice\x20Editing\x0a','audio','*_Uhh\x20Please,\x20Reply\x20to\x20audio/video_*','test','13212050BdufTO','1292862zmAdPM','error','4092664yhftQt','bot','1624vSQuhd','videoMessage','9GVLarL','reply','download','mtype','log'];_0x2964=function(){return _0x4ec786;};return _0x2964();}const _0x155562=_0x3ddc;(function(_0x334688,_0x49dc48){const _0x48f2c8=_0x3ddc,_0x3cdfb4=_0x334688();while(!![]){try{const _0x3da24d=-parseInt(_0x48f2c8(0x9b))/0x1+-parseInt(_0x48f2c8(0xa4))/0x2+-parseInt(_0x48f2c8(0xaf))/0x3*(parseInt(_0x48f2c8(0xa8))/0x4)+parseInt(_0x48f2c8(0x9d))/0x5*(parseInt(_0x48f2c8(0x99))/0x6)+-parseInt(_0x48f2c8(0x9e))/0x7+-parseInt(_0x48f2c8(0xa6))/0x8*(parseInt(_0x48f2c8(0xaa))/0x9)+parseInt(_0x48f2c8(0xa3))/0xa;if(_0x3da24d===_0x49dc48)break;else _0x3cdfb4['push'](_0x3cdfb4['shift']());}catch(_0x5b1ab9){_0x3cdfb4['push'](_0x3cdfb4['shift']());}}}(_0x2964,0x633b6),smd({'pattern':'voice','alias':['ptt',_0x155562(0x98)],'desc':'adds\x20bass\x20in\x20given\x20sound','category':_0x155562(0xa0),'use':_0x155562(0x97)},async(_0x538718,_0x46def2,_0x2dc669,{cmdName:_0x27b143,isCreator:_0x2796d9})=>{const _0x11d742=_0x155562;try{let _0x14ead6=_0x46def2[_0x11d742(0xad)]===_0x11d742(0xa9)?_0x46def2[_0x11d742(0xad)]:_0x46def2[_0x11d742(0x9c)]?_0x46def2[_0x11d742(0x9c)]['mtype']:'',_0x3660aa=_0x46def2['mtype']===_0x11d742(0xa9)?_0x46def2:_0x46def2[_0x11d742(0x9c)]?_0x46def2[_0x11d742(0x9c)]:'';console[_0x11d742(0xae)]('Mime\x20:\x20',_0x14ead6);if(!/audio/[_0x11d742(0xa2)](_0x14ead6)&&!/video/[_0x11d742(0xa2)](_0x14ead6))return _0x46def2[_0x11d742(0xab)](_0x11d742(0xa1));let _0x40cd0c=await _0x3660aa[_0x11d742(0xac)]();return await _0x538718[_0x11d742(0xa7)]['sendMessage'](_0x46def2['chat'],{'audio':_0x40cd0c,'mimetype':_0x11d742(0x9a),'ptt':!![]},{'quoted':_0x46def2});}catch(_0x371da7){return await _0x46def2[_0x11d742(0xa5)](_0x371da7+'\x0a\x0acmdName:\x20voice\x0a'),console['log'](_0x11d742(0x9f),_0x371da7);}}));/** @fancy */ function _0x4b57(_0x32ea70,_0x10b4ae){const _0x2dfa97=_0x2dfa();return _0x4b57=function(_0x4b57bd,_0x119adb){_0x4b57bd=_0x4b57bd-0x1aa;let _0x465ac9=_0x2dfa97[_0x4b57bd];return _0x465ac9;},_0x4b57(_0x32ea70,_0x10b4ae);}const _0x337ed9=_0x4b57;function _0x2dfa(){const _0x30610e=['Suhail','converter','```\x09\x09','```🔢Reply\x20the\x20number\x20you\x20wants\x20to\x20select```\x20\x0a\x0a','10FPQezN','log','reply','1181384OywtID','467306hRRBtI','2069262nAUMiH','fancy\x2025\x20Suhail(For\x20specific\x20text)```\x0a\x0a','send','forEach','14617174prCsvx','6635jIjsQr','3YumyuI','Error\x20in\x20\x20fancy\x20\x0a','6924gimGra','184KefEvw','6252348EGqzOP','56\x20Suhail','error','fancy\x20Suhail(For\x20all\x20text)\x0a\x09\x09','\x0a\x0acmdName:\x20fancy','2160412cLFiLF','fancy'];_0x2dfa=function(){return _0x30610e;};return _0x2dfa();}(function(_0xbf6411,_0x199854){const _0x243d6d=_0x4b57,_0x462123=_0xbf6411();while(!![]){try{const _0x2e0e38=-parseInt(_0x243d6d(0x1b1))/0x1+-parseInt(_0x243d6d(0x1c2))/0x2+-parseInt(_0x243d6d(0x1b9))/0x3*(-parseInt(_0x243d6d(0x1bd))/0x4)+parseInt(_0x243d6d(0x1b8))/0x5*(-parseInt(_0x243d6d(0x1bb))/0x6)+parseInt(_0x243d6d(0x1b2))/0x7*(parseInt(_0x243d6d(0x1bc))/0x8)+parseInt(_0x243d6d(0x1b3))/0x9+-parseInt(_0x243d6d(0x1ae))/0xa*(-parseInt(_0x243d6d(0x1b7))/0xb);if(_0x2e0e38===_0x199854)break;else _0x462123['push'](_0x462123['shift']());}catch(_0x148f7c){_0x462123['push'](_0x462123['shift']());}}}(_0x2dfa,0xd3045),smd({'pattern':_0x337ed9(0x1c3),'desc':'Makes\x20stylish/fancy\x20given\x20text','category':_0x337ed9(0x1ab),'use':_0x337ed9(0x1be),'filename':__filename},async(_0x32cc26,_0x1bebba,_0xb70e5e)=>{const _0x136783=_0x337ed9;try{let _0x2216f5='┏━━━━━━━━━━━━━━━━━━━━━━━━\x0a┃\x09*💬TRIBALCHIEF-MD_FANCY_TEXT💬*\x20\x0a┗━━━━━━━━━━━━━━━━━━━━━━━━\x0a\x0a\x20'+(_0xb70e5e?_0x136783(0x1ad):_0x136783(0x1ac)+prefix+_0x136783(0x1c0)+prefix+_0x136783(0x1b4)),_0x5cd3bd=parseInt(_0xb70e5e);if(isNaN(_0x5cd3bd)){let _0x1b2d35=_0xb70e5e?_0xb70e5e:_0x136783(0x1aa);listall(_0x1b2d35)[_0x136783(0x1b6)]((_0xd9f4b3,_0x1be911)=>{_0x2216f5+='\x0a'+(_0x1be911+=0x1)+'\x20'+_0xd9f4b3+'\x0a';});try{return await _0x1bebba[_0x136783(0x1b5)](_0x2216f5,{'caption':_0x2216f5},'',_0x1bebba);}catch{return await _0x1bebba[_0x136783(0x1b0)](_0x2216f5);}}let _0x4408ec=await fancytext(''+_0xb70e5e['slice'](0x2),_0x5cd3bd);return await _0x1bebba['send'](_0x4408ec,{},'',_0x1bebba);}catch(_0x520691){return await _0x1bebba[_0x136783(0x1bf)](_0x520691+_0x136783(0x1c1)),console[_0x136783(0x1af)](_0x136783(0x1ba),_0x520691);}}));



