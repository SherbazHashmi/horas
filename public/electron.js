// Note: Can't use import from syntax as this is declared outside of a module
let electron = require('electron');
let path = require('path');
let isDev = require('electron-is-dev');
const { app, BrowserWindow } = electron;

let mainWindow;

const createWindow = () => {
    mainWindow = new BrowserWindow({width: 900, height: 680});
    mainWindow.loadURL(isDev? 'http://localhost:3000': `file://${path.join(__dirname, '../build/index.html')}`)

    mainWindow.on('close', () => {
        mainWindow = null
    });
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
});

app.on('activate', () => {
    if (mainWindow === null) {
        createWindow()
    }
});