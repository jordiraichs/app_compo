import React from 'react';
import { View, FlatList, Text } from 'react-native';

/**
 * https://docs.expo.dev/versions/latest/sdk/av/
 * Instal·lació component: npx expo install expo-av
 */
import { ResizeMode, Video, VideoNaturalSize } from 'expo-av'; 

import alan from '../assets/videos/Alan.mp4';


// Creem la llista amb els elements
const videos = [
  { id: 1, title: 'Video 1', source: alan },
  { id: 2, title: 'Video 2', source: "https://res.cloudinary.com/demo/video/upload/c_scale,w_400/elephants.mp4"},
  { id: 3, title: 'Video 3', source: alan },
  { id: 4, title: 'Video 4', source: alan },
  { id: 5, title: 'Video 5', source: alan },
  { id: 6, title: 'Video 6', source: alan },
  { id: 7, title: 'Video 7', source: alan },
  { id: 8, title: 'Video 8', source: alan },
  { id: 9, title: 'Video 9', source: alan },
];

// Component: VideoList
const VideoList = () => {

  // ** funció renderització , cridem al component Video
  const renderVideoItem = ({ item }) => (
    <View>
      
      <Text>{item.title}</Text>
            
      <Video 
        // Props (propietats): style, source,... https://docs.expo.dev/versions/latest/sdk/video/#videostyle
        style={{ alignContent:'center', width: 320, height: 200 }}
        source={item.source}
        useNativeControls
        resizeMode={ResizeMode.CONTAIN} // S'ajusta als límits dels components tot conservant la relació d'aspecte
      />

    </View>
  );
  
  // ** retornem la FlatList : https://reactnative.dev/docs/flatlist 
  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={videos} // font de dades 
        renderItem={renderVideoItem} // extraiem els elements de la font i els renderitzem 
      />
    </View>
  );
};

export default VideoList;

