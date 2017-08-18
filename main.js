const { app , BrowserWindow } =require("electron");
const url = require("url");
let win = null;
function boot(){
    win = new BrowserWindow({
      width:800,
      height:600,
      frame:true
    });
    win.loadURL(`file://${__dirname}/index.html`);
    win.on("closed",()=>{
       win = null
    });
}
app.on('ready', boot);