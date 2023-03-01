import React from 'react';
import { useParams } from 'react-router-dom';
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';
import './VideoChat.css';
function VideoChat(props) {
  const { roomId } = useParams();
  let Meeting;
  if (props.trainer) {
    Meeting = async (element) => {
      const appID = parseInt(process.env.REACT_APP_APPID);
      const serverSecret = process.env.REACT_APP_SERVERSECRET;

      const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
        appID,
        serverSecret,
        roomId,
        Date.now().toString(),
        `${props.name} (Trainer )`
      );
      console.log(appID);
      const zc = ZegoUIKitPrebuilt.create(kitToken);
      zc.joinRoom({
        container: element,
        // sharedLinks: [
        //   {
        //     name: 'Copy Link:',
        //     url: `http://localhost:3000/client/room/${roomId}`,
        //   },
        // ],
        scenario: {
          mode: ZegoUIKitPrebuilt.OneONoneCall,
        },
        showScreenSharingButton: false,
      });
    };
  } else {
    Meeting = async (element) => {
      const appID = parseInt(process.env.REACT_APP_APPID);
      const serverSecret = process.env.REACT_APP_SERVERSECRET;

      const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
        appID,
        serverSecret,
        roomId,
        Date.now().toString(),
        `${props.name}`
      );
      console.log(appID);
      const zc = ZegoUIKitPrebuilt.create(kitToken);
      zc.joinRoom({
        container: element,
        // sharedLinks: [
        //   {
        //     name: 'Copy Link:',
        //     url: `http://localhost:3000/client/room/${roomId}`,
        //   },
        // ],
        scenario: {
          mode: ZegoUIKitPrebuilt.OneONoneCall,
        },
        showScreenSharingButton: false,
      });
    };
  }

  return (
    <div>
      <div className="row justify-content-center align-items-center h-100">
        <div className="col-12 col-lg-8 col-xl-6">
          <div className="form-outline">
            <div className="mt-5" ref={Meeting} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default VideoChat;
