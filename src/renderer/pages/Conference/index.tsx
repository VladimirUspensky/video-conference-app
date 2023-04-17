import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
// @ts-ignore
import { JitsiMeeting } from '@jitsi/react-sdk';
import Recorder from 'renderer/features/components/recorder';
import Recordercopy from 'renderer/features/components/recordercopy';

function Conference() {
  const history = useHistory();
  // console.log(history);
  const params = useParams();

  console.log(params);

  const renderSpinner = () => (
    <div
      style={{
        fontFamily: 'sans-serif',
        textAlign: 'center',
      }}
    >
      Loading..
    </div>
  );

  const handleJitsiIFrameRef1 = (iframeRef: any) => {
    iframeRef.style.border = '10px solid #3d3d3d';
    iframeRef.style.background = '#3d3d3d';
    iframeRef.style.height = '100vh';
    iframeRef.style.marginBottom = '20px';
  };

  const handleApiReady = (apiObj: any) => {
    console.log(apiObj);
  };

  return (
    <div>
    <JitsiMeeting
        // key={'vpaas-magic-cookie-96d6d57073ba4233a4ecfafca82b6e2e'}
        // roomName="06b03abc775a6339930906839729ac539f002cdaab4b2e03a0ccff6e80e4e354"
        roomName={`RoomNameTesty${params.Id}`}
        spinner={renderSpinner}
        getIFrameRef={handleJitsiIFrameRef1}
        onReadyToClose={() => history.push(`/`)}
        // configOverwrite={{
        //   subject: 'lalalala',
        //   hideConferenceSubject: false,
        // }}
        onApiReady={(externalApi) => handleApiReady(externalApi)}
        // onReadyToClose={handleReadyToClose}
        // getIFrameRef={handleJitsiIFrameRef1}
      /> 
      {/* <Recorder /> */}
      <Recordercopy />
    </div>
  );
}

export default Conference;
