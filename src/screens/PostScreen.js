import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

export const PostScreen = ({}) => {
return(
    <View style = {styles.center}>
        <Text>PostScreen</Text>
    </View>
)
}

PostScreen.navigationOptions = {
    headerTitle: 'Post',
    headerStyle: {
        backgroundColor: 'red'
    },
    headerTintColor: 'white'
}

const styles = StyleSheet.create({
    center: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})