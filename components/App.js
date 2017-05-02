import React, { Component } from 'react'
// Packages Components
import {
  Container,
  Button,
  Text
} from 'native-base';

import Drawer from 'react-native-drawer'

// Customize Components
import SynHeader from './SynHeader'
import SynFooter from './SynFooter'
import SynAlarm from './SynAlarm'
import SideBar from './SideBar'

export default class App extends Component {
  state = {
    isPress: false,
    test: 12
  }

  changeStateIsPress(){
    this.setState({isPress: !this.state.isPress});
  }

  closeControlPanel = () => {
    this._drawer.close()
  };

  openControlPanel = () => {
    this._drawer.open()
  };

  render() {
    return (
      <Drawer
        ref={ (ref) => this._drawer = ref }
        open={this.state.isPress}
        type="overlay"
        content={<SideBar />}
        tapToClose={true}
        openDrawerOffset={0.2} // 20% gap on the right side of drawer
        panCloseMask={0.2}
        closedDrawerOffset={-3}
        styles={drawerStyles}
        tweenHandler={(ratio) => ({
          main: { opacity:(2-ratio)/2 }
        })}
        >
          <Container>
            <SynHeader onPress={ () => { this.openControlPanel() }} />
             <SynAlarm/>
             <SynFooter/>
          </Container>
      </Drawer>
    );
  }
}

const drawerStyles = {
  drawer: { shadowColor: '#000000', shadowOpacity: 0.8, shadowRadius: 3},
  main: {paddingLeft: 3},
}
