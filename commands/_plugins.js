/**
CURRENTLY RUNNING ON BETA VERSION!!
*
   * @project_name : tribal-chief-Md
   * @author : 254gerboo
   * @description : tribal-chief-Md ,A Multi-functional whatsapp user bot.
   * @version 1.2.2
*
   * Licensed under the  GPL-3.0 License;
* 
   * Created By 254gerboo.
   * © 2024 tribal-chief-Md.
* 
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
   * SOFTWARE.

 **/

const axios = require('axios');
const fs = require('fs-extra')
const { exec } = require("child_process"); 
const {plugins, isUrl, pluginsdb,smd , tlang  , Config } = require('../lib')
//---------------------------------------------------------------------------
smd({pattern: "plugins",alias :['plugin'],category: "owner",desc: "Shows list of all externally installed modules", filename: __filename },async(Aviator, msg, text, { isCreator }) => {
  if (!isCreator) return msg.send(tlang().owner);
  let res = await plugins('plugins' ,text);
  return await msg.send(!res?`*_There's no plugin install in ${Config.botname}_*`: !text?`*All Installed Modules are:-*\n\n${res}`:res  )})
//---------------------------------------------------------------------------
smd({ pattern: "remove",alias :['uninstall'],category: "owner", desc: "removes external modules.", filename: __filename },
    async(Aviator, msg, text,{ isCreator}) => { 
      if (!isCreator) return msg.reply(tlang().owner);
      if(!text) return await msg.reply("*_Uhh Please, Provide Me Plugin Name_*");
      if(text==='alls') return await msg.reply(await plugins('remove' ,'all',__dirname) );

      try{
        await msg.send( await plugins('remove' ,text,__dirname),{},"",msg) 
        delete require.cache[require.resolve(__dirname+"/" + text + ".js")];


        //await msg.send( `${plugin} \n*_Please Wait ${Config.botname} Restarting_*` , { edit: msgg.key } , "", msg );
         exec('pm2 restart all')
      }catch{}
    })
//---------------------------------------------------------------------------
smd({ pattern: "install",category: "owner", desc: "Installs external modules..",filename: __filename},
    async(Aviator, msg, text, {isCreator}) => {
      if (!isCreator) return msg.reply(tlang().owner);
      let url = text ? text : msg.quoted ?  msg.quoted.text : '';
      if(!url.toLowerCase().includes("https")) return await msg.send("*_Uhh Please, Provide Me Plugin Url_*");
      await msg.reply( await plugins('install' ,url , __dirname ) ) ;
    
    });


 