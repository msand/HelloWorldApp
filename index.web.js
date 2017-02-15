import { AppRegistry } from 'react-native';
import HelloWorldApp from './src';

AppRegistry.registerComponent('HelloWorldApp', () => HelloWorldApp);
AppRegistry.runApplication('HelloWorldApp', {
  rootTag: document.getElementById('root'),
});
