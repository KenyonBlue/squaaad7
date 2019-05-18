import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import Home from './../Tabs/Home';
import Explore from './../Tabs/Explore';
import Likes from './../Tabs/Likes';
import Profile from './../Tabs/Profile';
import UpLoad from './../Tabs/UpLoad';
import Icon from 'react-native-vector-icons/Foundation'
import Feather from 'react-native-vector-icons/Feather'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Entypo from 'react-native-vector-icons/Entypo'

const Screens = {
    Home: {
        screen: Home, 
        navigationOptions: () => ({
            tabBarIcon: ({ focused }) => (
                <Icon name={'home'} size={25}  />
        )
    }),
},

    Explore: {
        screen: Explore, 
        navigationOptions: () => ({
            tabBarIcon: ({ focused }) => (
                <Feather name={'search'} size={25}  />
        )
    }),
},  
    UpLoad: {
        screen: UpLoad, 
        navigationOptions: () => ({
            tabBarIcon: ({tintColor, focused}) => (
                <FontAwesome name={'plus-square-o'} size={25}  />
    )
}),
},
    Likes: {
        screen: Likes, 
        navigationOptions: () => ({
            tabBarIcon: ({tintColor, focused}) => (
                <Entypo name={'heart-outlined'} size={25}  />
        )
    }),
},

Profile: {
    screen: Profile, 
    navigationOptions: () => ({
        tabBarIcon: ({tintColor, focused}) => (
            <FontAwesome name={'user'} size={25}  />
    )
}),
},
};

const Config = {
    tabBarOptions: {
        showLabel: false
    }
};



const Tab = createBottomTabNavigator(Screens, Config);

export default Tab


