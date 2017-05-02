import React, { Component } from 'react'
// Packages Components
import {
  Container,
  Button,
  Text,
  Content,
  Header,
  Left,
  Right,
  Body,
  Icon,
  Footer,
  FooterTab
} from 'native-base';

export default class SynAlarm extends Component {
  render() {
    const { navigate, state } = this.props.navigation;
    return (
          <Container>
                <Header>
                   <Left>
                   <Button
                     transparent
                     onPress={() => navigate('System')}
                   >
                         <Icon name='menu' />
                      </Button>
                   </Left>
                   <Body>
                      <Text style={{color:'#FFF'}}>{ state.params.title }</Text>
                   </Body>
                </Header>
                <Container>
                  <Content>

                  </Content>
                </Container>
                <Footer>
                    <FooterTab>
                          <Button onPress={() => navigate('Event', { title: state.params.title, bl: state.params.bl })}>
                              <Icon name="star" />
                                <Text> Event </Text>
                          </Button>
                          <Button active>
                              <Icon name="alarm" />
                                <Text> Alarm   </Text>
                          </Button>
                        <Button onPress={() => navigate('Dashboard', { title: state.params.title, bl: state.params.bl })}>
                            <Icon name="apps" />
                              <Text> Dashboard </Text>
                        </Button>
                    </FooterTab>
                </Footer>
          </Container>
    );
  }
}
