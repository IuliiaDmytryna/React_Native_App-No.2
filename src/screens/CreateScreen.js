import React, {useState} from 'react'
import { View, Text, StyleSheet, TextInput, Image, Button, ScrollView, TouchableWithoutFeedback, Keyboard } from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import { AppHeaderIcon } from '../components/AppHeaderIcon'
import { THEME } from '../theme'
import { useDispatch } from 'react-redux'
import {addPost} from '../store/actions/post'

export const CreateScreen = ({navigation}) => {
  const img = 'https://cdn.londonandpartners.com/visit/general-london/areas/river/76709-640x360-houses-of-parliament-and-london-eye-on-thames-from-above-640.jpg'
  const dispatch = useDispatch()
  const [text, setText] = useState('')

  const saveHandler = () => {
    const post = {
      date: new Date().toJSON(),
      text: text,
      img: img,
      booked: false
    }
    dispatch(addPost(post))
    navigation.navigate('Main')
  }

  return (
    <ScrollView>
    <TouchableWithoutFeedback onPress = {() => Keyboard.dismiss()}>
    <View style={styles.wrapper}>
      <Text style = {styles.title}>Create new post</Text>
      <TextInput style = {styles.textarea} placeholder = "Введите текст заметки" value = {text} onChangeText = {setText} multiline/>
      <Image style = {{width: '100%', height: 200, marginBottom: 20}} source = {{uri: img}}/>
      <Button title = "Создать пост" color = {THEME.MAIN_COLOR} onPress = {saveHandler}/>
    </View>
    </TouchableWithoutFeedback>
    </ScrollView>
  )
}

CreateScreen.navigationOptions = ({ navigation }) => ({
  headerTitle: 'Создать пост',
  headerLeft: () =>  (
    <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
      <Item
        title='Toggle Drawer'
        iconName='ios-menu'
        onPress={() => navigation.toggleDrawer()}
      />
    </HeaderButtons>
  )
})

const styles = StyleSheet.create({
  wrapper: {
    padding: 10
  },
  title: {
    fontFamily: 'open-regular',
    fontSize: 20,
    marginVertical: 10,
    textAlign: 'center'
  },
  textarea: {
    padding: 10,
    marginBottom: 10
  }
})
