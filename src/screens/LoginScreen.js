import React, {useEffect, useState} from 'react';
import {View, Text, Image, TouchableOpacity, TextInput} from 'react-native';
import main_image from '../assets/practical_test_logo.png';
import {styles} from './LoginScreen.Styles';
import {callAuth} from '../api/service';
import {setData} from '../storage/asyncStorage';

export default function LoginScreen() {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  async function authHandle() {
    let token = await callAuth();
    console.log(token?.ownerAccessToken);
    setData('TOKEN', token?.ownerAccessToken);
  }

  return (
    <View style={styles.container}>
      <View style={styles.centerMe}>
        <Image source={main_image} style={{width: 150, height: 150}} />
      </View>
      <Text style={[styles.caption, styles.defaultText]}>Username</Text>
      <TextInput
        placeholder="user name"
        style={styles.input}
        value={userName}
        onChange={setUserName}
      />
      <Text style={[styles.caption, styles.defaultText]}>Pass</Text>
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        secureTextEntry={true}
        placeholder="pwd"
        style={styles.input}
        value={password}
        onChange={setPassword}
      />
      <Text style={[styles.forgotPassword, styles.defaultText]}>
        Forgot your password?
      </Text>
      <TouchableOpacity
        onPress={() => {
          console.log(userName);
          authHandle();
        }}
        style={[styles.logInBtn, styles.yellowBg]}>
        <Text style={styles.defaultText}>LOGIN</Text>
      </TouchableOpacity>
      <Text style={styles.defaultText}>or continue with</Text>
      <View style={[styles.centerMe, styles.direction]}>
        <Image source={main_image} style={{width: 90, height: 90}} />
        <Image source={main_image} style={{width: 90, height: 90}} />
      </View>
      <View style={styles.centerMe}>
        <Text style={[styles.defaultText, styles.centerText]}>
          By continuing you agree to our Tearms of Service. Privacy policy
        </Text>
      </View>
      <View style={styles.centerMe}>
        <View style={styles.break}></View>
      </View>
      <View style={styles.centerMe}>
        <Text style={styles.defaultText}>
          Not have an account yet? <Text style={styles.yellow}>Join Us</Text>
        </Text>
      </View>
    </View>
  );
}
