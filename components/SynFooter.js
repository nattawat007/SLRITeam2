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


export default class SynFooter extends Component{
  render() {
    return (
      <Footer>
          <FooterTab>
                <Button active>
                    <Icon name="star" />
                      <Text> Event </Text>
                </Button>
                <Button>
                    <Icon name="alarm" />
                      <Text> Event </Text>
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
