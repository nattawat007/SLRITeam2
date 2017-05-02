import React, { Component } from 'react'
import {
  Container,
  Content,
  Footer,
  FooterTab,
  Button,
  Icon,
  Badge,
  Text
} from 'native-base'

import { StackNavigator } from 'react-navigation';

export default class SynFooter extends Component{
  render() {
    return (
      <Footer>
          <FooterTab>
                <Button active>
                    <Icon name="star" />
                      <Text> Event </Text>
                </Button>
                <Button
                  onPress={() => this.props.StackNavigator.navigate('Alarm', { user: 'Lucy' })}
                  title="Alarm"
                active>
                    <Icon name="alarm" />
                      <Text> Alarm   </Text>
                </Button>
              <Button>
                  <Icon name="apps" />
                    <Text> Dashboard </Text>
              </Button>
          </FooterTab>
      </Footer>
    );
  }
}
