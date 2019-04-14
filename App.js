import React, {Component} from 'react';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import { LoginManager } from 'react-native-fbsdk';
// import { f, auth, storage, database } from './config/config';

type Props = {};
export default class App extends Component<Props> {

  _fbAuth() {
    LoginManager.logInWithReadPermissions(['public_profile']).then(function(result){
      if (result.isCancelled) {
        console.log('login was cancelled ');
      } else {
        console.log('Login was success' + result.grantedPermissions.toString());
      }
    }, function(error) {
      console.log('an error has occured '+ error);
    })
  }

  render() {
    return (
      <View style={styles.container}>
      <Text>Squaaad Goals 7</Text>
        <TouchableOpacity onPress={this._fbAuth}>
        <Text> Facebook </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
