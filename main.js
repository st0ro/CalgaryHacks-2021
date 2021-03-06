const { app, BrowserWindow } = require('electron')

function createWindow () {
  const win = new BrowserWindow({
    width: 1000,
    height: 600,
    minWidth: 850,
    minHeight: 550,
    //maxWidth: 1300,
    //maxHeight: 700,
    webPreferences: {
      nodeIntegration: true
    },
  })
  win.setMenuBarVisibility(false);
  win.loadFile('index.html')
}

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})