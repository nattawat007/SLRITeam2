import React, { Component } from 'react'
import {
  Header,
  Left,
  Body,
  Title,
  Button,
  Icon,
  Thumbnail,
  Right,
  Text,
  ListItem
} from 'native-base'
import {
  Image
} from 'react-native'
export default class SynHeader extends Component{
  render() {
    return (
      <Header>
         <Left>
         <Button
           transparent
           onPress = { this.props.onPress }
         >
               <Icon name='menu' />
            </Button>
         </Left>
         <Body>
            <Text style={{color:'#FFF'}}>{this.props.title}</Text>
         </Body>
      </Header>
    );
  }
}
