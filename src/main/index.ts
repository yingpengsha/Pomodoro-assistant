import * as path from 'path'
import { app, BrowserWindow } from 'electron'
import Store from 'electron-store'

const loadURL = import.meta.env.PROD
  ? `file://${path.resolve(__dirname, '../renderer/index.html')}`
  // eslint-disable-next-line dot-notation
  : process['env'].RENDERER_URL || 'http://localhost:3000'

Store.initRenderer()

function createWindow () {
  const mainWindow = new BrowserWindow({
    width: 1920,
    height: 1080,
    icon: path.resolve(__dirname, '../../public/icons/256x256.png')
  })

  mainWindow.loadURL(loadURL)

  // mainWindow.webContents.openDevTools()
}

app.whenReady().then(() => {
  createWindow()

  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})
