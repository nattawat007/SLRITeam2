import React, { Component } from 'react'
// Packages Components
import {
  Container,
  Button,
  Text
} from 'native-base';

// Customize Components
import SynHeader from './SynHeader'
import SynFooter from './SynFooter'
import SynAlarm from './SynAlarm'

export default class App extends Component {
  render() {
    return (
             <Container>
               <SynHeader/>
               <SynAlarm/>
               <SynFooter/>
             </Container>
    );
  }
}
