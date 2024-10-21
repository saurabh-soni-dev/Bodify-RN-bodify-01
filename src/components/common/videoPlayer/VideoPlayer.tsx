import React, { FC, memo, useRef } from 'react';
import { View, ViewStyle } from 'react-native';
import Video, { LoadError } from 'react-native-video';
import { styles } from './videoPlayer.style';

interface VideoPlayerProps {
  sourceType: 'local' | 'uri';
  uri: string;
  resizeMode: 'stretch' | 'contain' | 'cover' | 'none' | undefined;
  onError?: (error: LoadError) => void;
  controls?: boolean;
  paused?: boolean;
  muted?: boolean;
  volume?: number;
  playInBackground?: boolean;
  repeat?: boolean;
  fullscreen?: boolean;
  fullscreenOrientation?: 'all' | 'landscape' | 'portrait' | undefined;
  containerStyle?: ViewStyle;
  videoStyle?: ViewStyle;
}
const VideoPlayer: FC<VideoPlayerProps> = ({
  sourceType,
  uri,
  resizeMode,
  onError,
  controls,
  paused,
  muted,
  playInBackground,
  repeat,
  volume,
  fullscreen,
  fullscreenOrientation,
  containerStyle,
  videoStyle,
}) => {
  const videoRef = useRef<Video>(null);

  // Modify the source prop based on the sourceType
  const videoSource = sourceType === 'local' ? { uri } : { uri: uri };

  return (
    <View style={[styles.container, containerStyle]}>
      <Video
        ref={videoRef}
        source={videoSource}
        resizeMode={resizeMode}
        style={[styles.video, videoStyle]}
        onError={onError}
        controls={controls}
        paused={paused}
        muted={muted}
        playInBackground={playInBackground}
        repeat={repeat}
        volume={volume}
        fullscreen={fullscreen}
        fullscreenOrientation={fullscreenOrientation}
      />
    </View>
  );
};

export default memo(VideoPlayer);
