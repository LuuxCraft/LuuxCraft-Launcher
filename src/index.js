import { app } from 'electron';

import UpdateWindow from "./assets/js/windows/updateWindow.js";
import MainWindow from "./assets/js/windows/mainWindow.js";


if (!app.requestSingleInstanceLock()) app.quit();
else app.whenReady().then(() => {
    // if (dev) return MainWindow.createWindow()
    UpdateWindow.createWindow()
});