// FLEXBOX SECTION SAMPLE:
import React from "react";
import WelcomeScreen from "./screens/WelcomeScreen";
import ViewImageScreen from "./screens/ViewImageScreen";

export default function App () {
  return <WelcomeScreen />;
  // return <ViewImageScreen />;
}







// ORIGINAL CODE:
// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, View, SafeAreaView } from 'react-native';
// import { useWindowDimensions } from 'react-native';
// import { useDeviceOrientation } from 'react-native';

// export default function App() {
//   // const {landscape} = useDeviceOrientation();
//   console.log('dimensions are:', useWindowDimensions());

//   return (
//     <SafeAreaView style={[styles.container, containerStyle]}>
//       <View style={{
//         backgroundColor: 'dodgerblue',
//         width: "100%",
//         height: "30%",
//       }}></View>
//       <StatusBar style="auto" />
//     </SafeAreaView>
//   );
// }

// const containerStyle = { backgroundColor: "orange"};

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#ffff'
//   },
// });
