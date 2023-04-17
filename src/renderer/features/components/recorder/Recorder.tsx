import React, { useRef, useState, useEffect } from 'react';
import { Buffer } from 'buffer';
import style from './styles.module.scss';
import { Button, ButtonTypes } from '../button';

function Recorder() {
  const [sources, setSources] = useState([]);
  const [recording, setRecording] = useState(false);
  const [mediaRecorder, setMediaRecorder] = useState(null);
  const [chunks, setChunks] = useState(null);

  useEffect(() => {
    const getSources = async () => {
      try {
        window.electron.ipcRenderer.sendMessage('get-chanels', 'sadasd');
        window.electron.ipcRenderer.once('get-chanels', (arg) => {
          setSources(arg);
        });
      } catch (error) {
        console.log(error);
      }
    };

    getSources();
  }, []);

  const handleSelectSource = async (source) => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        audio: false,
        video: {
          mandatory: {
            chromeMediaSource: 'desktop',
            chromeMediaSourceId: source.id,
            minWidth: 1280,
            maxWidth: 1280,
            minHeight: 720,
            maxHeight: 720,
          },
        },
      });
      // let devices = await navigator.mediaDevices.enumerateDevices();
      // console.log(devices);

      // await navigator.mediaDevices.getUserMedia({ audio: true, video: true });
      let devices = await navigator.mediaDevices.enumerateDevices();
      console.log(devices);

      handleStream(stream);

      // window.electron.ipcRenderer.sendMessage('save-video', [stream]);
      // window.electron.ipcRenderer.once('save-video', (arg) => {
      //   console.log(arg);
      // });
      const options = { mimeType: 'video/webm; codecs=vp9' };
      const mediaRecorder = new MediaRecorder(stream, options);
      const chunks2 = [];
      setMediaRecorder(mediaRecorder);

      mediaRecorder.ondataavailable = (e) => {
        console.log(e.data);

        chunks2.push(e.data);

        console.log(chunks2);
      };

      mediaRecorder.onstop = async () => {
        const blob = new Blob(chunks2, { type: 'video/webm; codecs=vp9' });
        const buffer = Buffer.from(await blob.arrayBuffer());
        console.log(buffer);

        window.electron.ipcRenderer.save(buffer);
      };
    } catch (error) {
      console.log(error);
    }
  };

  function handleStream(stream) {
    const video = document.querySelector('video');
    video.srcObject = stream;
    video.onloadedmetadata = (e) => video.play();
  }

  const startRec = () => {
    mediaRecorder.start();
    setRecording(true);
  };

  const handleStopRecording = () => {
    if (mediaRecorder) {
      mediaRecorder.stop();
      setRecording(false);
      setChunks([]);
    }
  };

  const changeSelect = (e) => {
    console.log(e.target.value);
    sources.forEach((i) => {
      if (i.id === e.target.value) {
        handleSelectSource(i);
        return;
      }
    });
  };
  return (
    <div className={style.videocon}>
      <video
        className={
          mediaRecorder
            ? recording
              ? style.videono
              : style.video
            : style.videono
        }
        height={100}
      ></video>

      <div className={style.container}>
        <Button
          onClick={startRec}
          type={
            mediaRecorder
              ? recording
                ? ButtonTypes.DISABLED
                : ButtonTypes.PRIMARY
              : ButtonTypes.DISABLED
          }
          text="Запись экрана"
          mini
        />

        <select className={style.sel} onChange={(e) => changeSelect(e)}>
          {sources.map((source) => (
            <option value={source.id} key={source.id}>
              {source.name}
            </option>
          ))}
        </select>

        <Button
          mini
          text="Стоп"
          onClick={handleStopRecording}
          type={recording ? ButtonTypes.PRIMARY : ButtonTypes.DISABLED}
        />
      </div>
    </div>
  );
}

export default Recorder;
