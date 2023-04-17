import React, { useRef, useState, useEffect } from 'react';
import { Buffer } from 'buffer';
import style from './styles.module.scss';
import { Button, ButtonTypes } from '../button';

function Recordercopy() {
  const [sources, setSources] = useState([]);
  const [recording, setRecording] = useState(false);
  const [mediaRecorder, setMediaRecorder] = useState(null);
  const [chunks, setChunks] = useState(null);

  const ref = useRef(null);

  useEffect(() => {
    const getSources = async () => {
      try {
        window.electron.ipcRenderer.sendMessage('get-chanels', 'sadasd');
        window.electron.ipcRenderer.once('get-chanels', (arg) => {
          setSources([arg[0][0], ...arg[1]]);
          console.log(arg);

          handleSelectSource(arg[0][0]);
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
        audio: {
          mandatory: {
            chromeMediaSource: 'desktop',
          },
        },
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
      const streamVideo = await navigator.mediaDevices.getUserMedia({
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

      let streamMicrophone;
      try {
        streamMicrophone = await navigator.mediaDevices.getUserMedia({
          audio: true,
        });
      } catch (error) {
        console.log(error);
      }

      const audioCtx = new AudioContext();
      const source1 = audioCtx.createMediaStreamSource(stream);

      let source2;
      if (streamMicrophone) {
        source2 = audioCtx.createMediaStreamSource(streamMicrophone);
      }
      const destination = audioCtx.createMediaStreamDestination();

      source1.connect(destination);
      if (source2) {
        source2.connect(destination);
      }

      const mediaStream = new MediaStream();

      mediaStream.getAudioTracks();

      mediaStream.addTrack(stream.getVideoTracks()[0]);
      mediaStream.addTrack(destination.stream.getAudioTracks()[0]);

      handleStream(streamVideo);

      const options = { mimeType: 'video/webm; codecs=vp9' };
      const mediaRecorder = new MediaRecorder(mediaStream, options);
      let chunks2 = [];

      setMediaRecorder(mediaRecorder);

      mediaRecorder.ondataavailable = (e) => {
        chunks2.push(e.data);
      };

      mediaRecorder.onstop = async () => {
        const blob = new Blob(chunks2, { type: 'video/webm; codecs=vp9' });
        const buffer = Buffer.from(await blob.arrayBuffer());
        console.log(buffer);

        chunks2 = [];
        window.electron.ipcRenderer.save(buffer);
      };
    } catch (error) {
      console.log(error);
    }
  };

  function handleStream(stream: any) {
    const video = ref.current;
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
    sources.forEach((i) => {
      if (i.id === e.target.value) {
        console.log(i);
        console.log(sources);

        handleSelectSource(i);
        return;
      }
    });
  };
  return (
    <div className={style.videocon}>
      <video
        ref={ref}
        muted
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

        <select
          className={style.sel}
          onChange={(e) => changeSelect(e)}
          onBlur={() => {
            'ffff';
          }}
        >
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

export default Recordercopy;
