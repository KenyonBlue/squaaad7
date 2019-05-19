import React, { Component } from 'react';
import {  StyleSheet, SafeAreaView  } from 'react-native';
import { HomeHeader } from '../components';



 class Home extends Component {
  render() {
    return (
      <SafeAreaView>
        <HomeHeader/>
      </SafeAreaView>
    )
  }
}

export default Home;

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    backgroundColor: 'white'
  }
})
