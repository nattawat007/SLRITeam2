import React, { Component } from 'react'
import {
  Image,
  ScrollView
} from 'react-native'
import {
  Container,
  Content,
  List,
  ListItem,
  Text,
  Body,
  Left,
  Right,
  Thumbnail,
  Icon,
  Switch,
  Badge
} from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';

export default class SideBar extends Component {
  render() {
    const { navigate } = this.props.navigation;
    return (

              <Container>
                <Content style={{backgroundColor:'#FFF'}}>
                <Image source={require('../public/slri.jpg')}
                style={{ width:'100%', height: 200}}/>
                    <ListItem Button onPress={() => navigate('Event', { title: 'Beamline 1.1', bl: '11' })} icon>
                        <Body>
                          <Text>Beamline 1.1</Text>
                        </Body>
                        <Right>
                            <Icon name="arrow-forward" />
                        </Right>
                    </ListItem>
                    <ListItem Button onPress={() => navigate('Event', { title: 'Beamline 1.2', bl: '12' })} icon>
                        <Body>
                          <Text>Beamline 1.2</Text>
                        </Body>
                        <Right>
                            <Icon name="arrow-forward" />
                        </Right>
                    </ListItem>
                    <ListItem  Button onPress={() => navigate('Event', { title: 'Beamline 1.3', bl: '13' })} icon>
                        <Body>
                          <Text>Beamline 1.3</Text>
                        </Body>
                        <Right>
                            <Icon name="arrow-forward" />
                        </Right>
                    </ListItem>
                    <ListItem Button onPress={() => navigate('Event', { title: 'Beamline 2', bl: '2' })}  icon>
                        <Body>
                          <Text>Beamline 2</Text>
                        </Body>
                        <Right>
                            <Icon name="arrow-forward" />
                        </Right>
                    </ListItem>
                    <ListItem Button onPress={() => navigate('Event', { title: 'Beamline 3', bl: '3' })}  icon>
                        <Body>
                          <Text>Beamline 3</Text>
                        </Body>
                        <Right>
                            <Icon name="arrow-forward" />
                        </Right>
                    </ListItem>
                    <ListItem Button onPress={() => navigate('Event', { title: 'Beamline 4', bl: '4' })}  icon>
                        <Body>
                          <Text>Beamline 4</Text>
                        </Body>
                        <Right>
                            <Icon name="arrow-forward" />
                        </Right>
                    </ListItem>
                    <ListItem Button onPress={() => navigate('Event', { title: 'Beamline 5', bl: '5' })} icon>
                        <Body>
                          <Text>Beamline 5</Text>
                        </Body>
                        <Right>
                            <Icon name="arrow-forward" />
                        </Right>
                    </ListItem>
                    <ListItem Button onPress={() => navigate('Event', { title: 'Beamline 6', bl: '6'})}  icon>
                        <Body>
                          <Text>Beamline 6</Text>
                        </Body>
                        <Right>
                            <Icon name="arrow-forward" />
                        </Right>
                    </ListItem>
                    <ListItem Button onPress={() => navigate('Event', { title: 'Beamline 7', bl: '7' })}  icon>
                        <Body>
                          <Text>Beamline 7</Text>
                        </Body>
                        <Right>
                            <Icon name="arrow-forward" />
                        </Right>
                    </ListItem>
                    <ListItem Button onPress={() => navigate('Event', { title: 'Beamline 8', bl: '8' })}  icon>
                        <Body>
                          <Text>Beamline 8</Text>
                        </Body>
                        <Right>
                            <Icon name="arrow-forward" />
                        </Right>
                    </ListItem>

                  </Content>
                </Container>

    );
  }
}
