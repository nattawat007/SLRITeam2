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
    return (

              <Container>
                <Content style={{backgroundColor:'#FFF'}}>
                <Image source={require('../public/slri.jpg')}
                style={{ width:'100%', height: 200}}/>
                    <ListItem icon>
                        <Body>
                          <Text>Beamline 1.1</Text>
                        </Body>
                        <Right>
                            <Icon name="arrow-forward" />
                        </Right>
                    </ListItem>
                    <ListItem icon>
                        <Body>
                          <Text>Beamline 1.2</Text>
                        </Body>
                        <Right>
                            <Icon name="arrow-forward" />
                        </Right>
                    </ListItem>
                    <ListItem icon>
                        <Body>
                          <Text>Beamline 1.3</Text>
                        </Body>
                        <Right>
                            <Icon name="arrow-forward" />
                        </Right>
                    </ListItem>
                    <ListItem icon>
                        <Body>
                          <Text>Beamline 2</Text>
                        </Body>
                        <Right>
                            <Icon name="arrow-forward" />
                        </Right>
                    </ListItem>
                    <ListItem icon>
                        <Body>
                          <Text>Beamline 3</Text>
                        </Body>
                        <Right>
                            <Icon name="arrow-forward" />
                        </Right>
                    </ListItem>
                    <ListItem icon>
                        <Body>
                          <Text>Beamline 4</Text>
                        </Body>
                        <Right>
                            <Icon name="arrow-forward" />
                        </Right>
                    </ListItem>
                    <ListItem icon>
                        <Body>
                          <Text>Beamline 5</Text>
                        </Body>
                        <Right>
                            <Icon name="arrow-forward" />
                        </Right>
                    </ListItem>
                    <ListItem icon>
                        <Body>
                          <Text>Beamline 6</Text>
                        </Body>
                        <Right>
                            <Icon name="arrow-forward" />
                        </Right>
                    </ListItem>
                    <ListItem icon>
                        <Body>
                          <Text>Beamline 7</Text>
                        </Body>
                        <Right>
                            <Icon name="arrow-forward" />
                        </Right>
                    </ListItem>
                    <ListItem icon>
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
