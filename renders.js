const {remote} = require("electron");

function closeWindow(){
    var window = remote.getCurrentWebContents();

    window.close();
}

function minimizeWindow(){
    var window = remote.getCurrentWebContents();
    window.minimize();
}

function maximizeWindow(){
    var window = remote.getCurrentWebContents();
    window.isMaximized() ? window.unmaximize() : window.maximize();
}