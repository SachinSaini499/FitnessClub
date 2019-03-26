/**
 * @format
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';


import Rout from './AppRouting'
 
//import Rout from '../FitnessClub/src/components/screens/MaleWorkoutDetails';


AppRegistry.registerComponent(appName, () => Rout);
