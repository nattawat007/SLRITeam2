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
  FooterTab,
  List,
  ListItem
} from 'native-base';

export default class SynEvent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
    };
  }

  componentDidMount() {
      this.fetchData();
  }

  fetchData() {
    var REQUEST_URL = 'http://10.1.10.149:8001/api/event?bl=3' ;

    fetch(REQUEST_URL)
      .then((response) => response.json())
      .then((responseData) => {
        this.setState({
          data: responseData.Data,
        });
      })
      .done();
  }

  render() {
    const { navigate, state } = this.props.navigation;
    data = this.state.data;
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
                    <List dataArray={data}
                        renderRow={(data) => (
                            <ListItem>
                              <Body>
                                <Text>{data[1]}</Text>
                                <Text note>{data[0]}</Text>
                              </Body>
                              <Right>
                                  <Text>{data[2]}</Text>
                              </Right>
                            </ListItem>
                        )}>
                    </List>
                  </Content>
                </Container>
                <Footer>
                    <FooterTab>
                          <Button active>
                              <Icon name="star" />
                                <Text> Event </Text>
                          </Button>
                          <Button onPress={() => navigate('Alarm', { title: state.params.title, bl: state.params.bl })}>
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
