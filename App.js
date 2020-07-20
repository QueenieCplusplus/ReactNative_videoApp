import React from 'react';
//import Video from 'react-native-video';
import { StyleSheet, View, Text} from 'react-native';
//expo install expo-av
//https://docs.expo.io/versions/latest/sdk/video/
import { Video } from 'expo-av';

export default function App() {

  return (
      // Within your render function, assuming you have a file called
      // "background.mp4" in your project. You can include multiple videos
      // on a single screen if you like.
      
      // source={{uri:}}
      // source={require("./fkj.mp4")}
      <Video
        source={require('./MP4/fkj.mp4')}
        rate={1.0}
        volume={1.0}
        isMuted={false}
        resizeMode="cover"
        shouldPlay="true"
        isLooping="true"
        style={{ width: 700, height: 500 }}
      />);
}


/*const styles = StyleSheet.create({
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});*/
