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
import SynEvent from './SynEvent'

export default class App extends Component {
  render() {
    return (
             <Container>
               <SynHeader/>
               <SynEvent/>
               <SynFooter />
             </Container>
    );
  }
}
