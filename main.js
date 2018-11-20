const electron = require("electron");
const {app, BrowserWindow} = require("electron");
const path = require("path");
const url = require("url");
/*
 Add Kentflix reference so we can use to it later.
 https://stackoverflow.com/questions/34458417/run-node-js-server-file-automatically-after-launching-electron-app

*/
const kentflix = require("./KentFlixClient/src/index");

function createWindow() {
    win = new BrowserWindow({width: 800, height: 600, resizable: true, maximizable: true});
    win.loadURL("file://" + __dirname + "/KentFlixClient/public/index.html)
}

app.on("ready", createWindow);

app.on("window-all-closed", () => {
    if (process.platform !== "darwin") app.quit();
})
app.on("activate", () => {
    if (win === null) createWindow();
})