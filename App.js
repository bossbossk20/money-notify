import React, { Component } from 'react'
import { Platform, StyleSheet, Text, View } from 'react-native'
import styled from 'styled-components'


const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu'
})

const Container = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #000;
  height: 100%;
`

const TextTitle = styled.Text`
  color: #FFF;
`

export default class App extends Component {
  render() {
    return (
      <Container>
        <TextTitle>{instructions}</TextTitle>
      </Container>
    )
  }
}

