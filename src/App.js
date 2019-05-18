import React, {Component} from 'react';
import { StyleSheet } from 'react-native';
import { LoginManager, AccessToken } from 'react-native-fbsdk';
import { f, auth, database, storage } from '../config/config';
import { Container, Header, Content, Button, } from 'native-base';
import  Root  from './Router/index.js';


type Props = {};
export default class App extends Component<Props> {


  render() {
    return (
     <Root/>
    );
  }
}
