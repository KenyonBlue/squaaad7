import React, { Component } from 'react';
import {  View, Image } from 'react-native';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import Home from './../Tabs/Home';
import Explore from './../Tabs/Explore';
import Likes from './../Tabs/Likes';
import Profile from './../Tabs/Profile';
import UpLoad from './../Tabs/UpLoad';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Feather from 'react-native-vector-icons/Feather'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Entypo from 'react-native-vector-icons/Entypo'

const Screens = {
    Home: {
        screen: Home, 
        navigationOptions: () => ({
            tabBarIcon: ({ focused }) => (
                <MaterialCommunityIcons name={focused ? 'home' : 'home-outline'  } size={25}  />
        )
    }),
},

    Explore: {
        screen: Explore, 
        navigationOptions: () => ({
            tabBarIcon: ({ focused }) => (
                focused ? <FontAwesome name={'search'} size={25}/>
                :<Feather name={'search'} size={25}  />
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
            tabBarIcon: ({ focused}) => (
                <Entypo name={focused ? 'heart' : 'heart-outlined'} size={25}  />
        )
    }),
},

Profile: {
    screen: Profile, 
    navigationOptions: () => ({
        tabBarIcon: ({ focused }) => (
            <View style={{ height: 30, width: 30, borderRadius: 15, borderWidth: focused ? 1: 0, borderColor: 'grey',alignItems:'center', justifyContent: 'center'  }} >
            <Image 
            style={{height: 25 , width: 25, borderRadius: 25/2}}
            source={require ('../Images/kenyon.jpg' ) }
            />
        </View>
            // <FontAwesome name={ focused ? 'user': 'user-o'} size={25}  />
    )
}),
},
};

const Config = {
    tabBarOptions: {
        showLabel: false
    },
    navigationOptions: {
        header: null
    }
};



const Tab = createBottomTabNavigator(Screens, Config);

export default Tab


//  source={{uri: 'https://instagram.forf1-2.fna.fbcdn.net/vp/cb562ad4a8532bcf965f93e72ba078a8/5D6409BB/t51.2885-19/s320x320/32343967_183218169175351_8853912254198841344_n.jpg?_nc_ht=instagram.forf1-2.fna.fbcdn.net' }}/>