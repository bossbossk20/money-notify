import React, { Component } from 'react'
import { Platform, StyleSheet, Text, View } from 'react-native'
import {
  Container,
  Header,
  Content,
  Footer,
  FooterTab,
  Button,
  Icon,
  Body
} from 'native-base'
import styled from 'styled-components'
import { compose, withState } from 'recompose'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu'
})

// const StyledContent= styled(Content)`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   background-color: #000;
//   height: 100%;
// `

const TextTitle = styled.Text`
  color: #000;
`

const ContentBody = styled(Content)`
  background-color: #000;
  display: flex;
`

const ContentText = styled.Text`
  color: #fff;
`

const menu = [0, 1, 2]

const App = props => {
  return (
    <Container>
      <Header>
        <Body>
          <Text>Overview</Text>
        </Body>
      </Header>
      <ContentBody>
        <ContentText>{props.menuValue}</ContentText>
      </ContentBody>
      <Footer>
        <FooterTab>
          {menu.map((item, index) => (
            <Button
              key={index}
              active={index === props.menuValue}
              onPress={() => props.setMenuValue(index)}
            >
              <TextTitle>{item}</TextTitle>
            </Button>
          ))}
        </FooterTab>
      </Footer>
    </Container>
  )
}

export default compose(withState('menuValue', 'setMenuValue', 1))(App)
