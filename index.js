/**
 * @author: dongntd@bkav.com
 * name: Nguyen Thanh Dong
 * project: Do an tot nghiep
 * Unit: CNTT3-K57-UTC
 * Msv: 160702277
 * Hanoi-10/2020
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import TrackPlayer from "react-native-track-player";


AppRegistry.registerComponent(appName, () => App);
TrackPlayer.registerPlaybackService(() => require('./src/Service/Music/MusicService'));


