import { WebView } from "react-native-webview";
import { View, Text } from "react-native";
import { useState, useEffect } from "react";

const OpenCVScreen = () => {
  const [streamActive, setStreamActive] = useState(true);

  return (
    <>
      {streamActive ? (
        <WebView
          source={{
            uri: "http://192.168.1.105:4000/video_feed",
          }}
          style={{ flex: 1 }}
        />
      ) : (
        <View>
          <Text>Done</Text>
        </View>
      )}
    </>
  );
};

export default OpenCVScreen;
