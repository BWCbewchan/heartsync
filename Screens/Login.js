import React from 'react'
import { Image, SafeAreaView, Text, TouchableOpacity, View } from 'react-native'

function Login({ navigation }) {
  return (
    <SafeAreaView style={{backgroundColor:"white"}}>
        <View style={{ flexDirection: "column",alignItems:"center", height:"60%", justifyContent: "center"}}>
            <Image style={{width:134, height:134}} source={require('../assets/img/logo.png')}/>
            <Text style={{color:'gray'}}>Where Hearts Connect, Love Finds Its Sync.</Text>
        </View>
        <View style={{height:"40%", flexDirection: "column",alignItems:"center",width:'100%'}}>
            <TouchableOpacity onPress={() => navigation.navigate('Match')}>
                <Image source={require('../assets/img/ButtonApple.png')}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Match')}>
                <Image source={require('../assets/img/ButtonFacebook.png')}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Match')}>
                <Image source={require('../assets/img/ButtonPhone.png')}/>
            </TouchableOpacity>
            
            <View style={{ flexDirection:'column',alignItems:"center", marginTop:40}}>
                <Text style={{color:'gray'}}>By signing up you agree to our Terms and Conditions</Text>
                <Text style={{color:'gray'}}>See how we use your data in our Privacy Policy</Text>
            </View>
        </View>
    </SafeAreaView>
  )
}

export default Login