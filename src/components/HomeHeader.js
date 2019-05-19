import React, { Component } from 'react'
import { StyleSheet, View, Image } from 'react-native'
import Feather from 'react-native-vector-icons/Feather';




 class HomeHeader extends Component {
  render() {
    return (
        <View style={styles.container}>
            <View style={styles.inner}>
                    <View style={styles.right}>
                        <Feather name={'camera'} size={25}  /> 
                    </View>
                    <Image source={require ('../Images/SQUAAADLOGO2.png') } style={styles.image} />
                    <View style={styles.right}>
                        <Feather name={'tv'} size={25}  /> 
                        <Feather name={'send'} size={25}  /> 
                    </View>
            </View>
        </View>
      
    )
  }
}

const styles = StyleSheet.create({
        container: {
            height: 50,
            width: '100%',
            borderBottomWidth: 0.2,
            borderColor: 'rgba(0,0,0,7)',
            alignItems: 'center'
        },
        inner: {
            height: 50,
            width: '95%',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center'
        },
        right: {
            width: '20%',
            flexDirection: 'row',
            justifyContent: 'space-between'
        },
        image: {
            height: '78%',
            width: '35%'
        }
})

export  {HomeHeader};