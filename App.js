import 'react-native-gesture-handler';
import React from 'react';
import MainScreen from './src/screens/MainScreen';
import { LogBox } from 'react-native';

LogBox.ignoreLogs(['Setting a timer']);
LogBox.ignoreLogs(['Non-serializable values were found in the navigation state']);
LogBox.ignoreLogs(['Can\'t perform a React state update on an unmounted component']);
LogBox.ignoreLogs(['@firebase/firestore: Firestore (8.0.0): Connection WebChannel transport errored']);
LogBox.ignoreLogs(['Possible Unhandled Promise Rejection']);
LogBox.ignoreLogs(['Warning: Cannot record touch end without a touch start.']);
LogBox.ignoreLogs(['Require cycle:']);
LogBox.ignoreLogs(['Require cycle: node_modules/react-native-track-player/lib/index.js -> node_modules/react-native-track-player/lib/hooks.js -> node_modules/react-native-track-player/lib/index.js']);
LogBox.ignoreLogs(['Please report: Excessive number of pending callbacks: 501. Some pending callbacks that might have leaked by never being called from native code:']);


const App = () => {
  return <MainScreen />
};
export default App;
