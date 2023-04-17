// Disable no-unused-vars, broken for spread args
/* eslint no-unused-vars: off */
import { contextBridge, ipcRenderer, IpcRendererEvent } from 'electron';

const { writeFile } = require('fs');
// const { remote } = require('electron');
// const mainWindow = remote.getCurrentWindow();
// console.log(mainWindow);

export type Channels = 'ipc-example';

const electronHandler = {
  ipcRenderer: {
    sendMessage(channel: Channels, args: unknown[]) {
      ipcRenderer.send(channel, args);
    },
    on(channel: Channels, func: (...args: unknown[]) => void) {
      const subscription = (_event: IpcRendererEvent, ...args: unknown[]) =>
        func(...args);
      ipcRenderer.on(channel, subscription);

      return () => {
        ipcRenderer.removeListener(channel, subscription);
      };
    },
    once(channel: Channels, func: (...args: unknown[]) => void) {
      ipcRenderer.once(channel, (_event, ...args) => func(...args));
    },

    save(buffer) {
      getputh().then((data) => {
        writeFile(data, buffer, (data) => console.log(data));
      });
    },
  },
};

const getputh = async () => {
  const result = await ipcRenderer.invoke('save-video', [1, 2, 3]);
  return result;
};

contextBridge.exposeInMainWorld('electron', electronHandler);

export type ElectronHandler = typeof electronHandler;

window.addEventListener('DOMContentLoaded', async () => {
  const result = await ipcRenderer.invoke('save-video-cahnels', [1, 2, 3]);
  console.log(result);
});
