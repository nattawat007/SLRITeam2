import React, { Component } from 'react';
import {
  StyleSheet,
  View
} from 'react-native';
import {
  Container,
  Header,
  Content,
  Button,
  Text,
  Left
} from 'native-base';
import {
  StackNavigator,
  NavigationActions
 } from 'react-navigation';

 import SynEvent from './SynEvent';
 import SynSystem from './SynSystem';
 import SynAlarm from './SynAlarm';
 import SynDashboard from './SynDashboard';

const App = StackNavigator({
    System: { screen: SynSystem },
    Event: { screen: SynEvent },
    Alarm: { screen: SynAlarm },
    Dashboard: { screen: SynDashboard },
  },
  {
    headerMode: 'none'
  }
);

export default App;
