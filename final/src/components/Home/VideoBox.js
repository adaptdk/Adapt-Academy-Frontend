import React from 'react';
import videoPoster from '../../assets/poster2.png';
import cryptoVideo from '../../assets/crypto.mp4';
import { Player, ControlBar, ReplayControl,
  ForwardControl, CurrentTimeDisplay,
  TimeDivider, PlaybackRateMenuButton, VolumeMenuButton
} from 'video-react';


const VideoBox = () => (
  <Player
  poster={ videoPoster }
>
  <source src={ cryptoVideo } />


  <ControlBar>
    <ReplayControl seconds={ 10 } order={ 1.1 } />
    <ForwardControl seconds={ 30 } order={ 1.2 } />
    <CurrentTimeDisplay order={ 4.1 } />
    <TimeDivider order={ 4.2 } />
    <PlaybackRateMenuButton
      rates={ [5, 2, 1, 0.5, 0.1] }
      order={ 7.1 }
    />
    <VolumeMenuButton />
  </ControlBar>
</Player>
);

export default VideoBox;
