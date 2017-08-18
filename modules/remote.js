const remote = require("electron").remote;
const BrowserWindow = remote.BrowserWindow;

module.exports.EzformNew = function(){
    win = new BrowserWindow({
      width:800,
      height:600,
      frame:true
    });
    win.loadURL(`file://${__dirname}/index2.html`);
    win.on("closed",()=>{
       win = null
    });
}