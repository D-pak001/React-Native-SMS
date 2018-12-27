import React, { Component } from 'react';
import { Alert, Text, View, Button, StyleSheet, TextInput, ImageBackground, Image, TouchableWithoutFeedback } from 'react-native';

const styles = StyleSheet.create({
  main: {
    flex: 1,
    fontFamily: 'Roboto'
  }
});

export default class login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    }
  }
  handleLogin() {
    alert(this.state.username);
  }
  handleRegister() {
    Alert.alert('register page');
  }

  render() {

    return (
      <View style={styles.main}>


        <ImageBackground
          style={{ flex: 1 }}
          source={require("../image/login/background-image.png")}
        >
          <View style={{ flex: 1, alignItems: 'center', marginTop: 50 }}>
            <View style={{ borderWidth: 1, borderRadius: 100, borderColor: '#00a3e4', padding: 15 }}>
              <Image source={require("../image/login/Logo.png")} style={{ width: 110, height: 110 }} />
            </View>
            <Text style={{ color: 'white', marginTop: 20, fontSize: 30 }}>Welcome</Text>
            <Text style={{ color: 'white', marginTop: 8, fontSize: 12, marginLeft: 35, marginRight: 35 }}>
              The ScrollView works best to present a small amount of things of a limited size.
            </Text>
          </View>
        </ImageBackground>


        <View style={{ flex: 1 }} >
          <View style={{ padding: 50 }}>
            <TextInput
              placeholder='User Name'
              placeholderTextColor='black'
              style={{ padding: 5, borderColor: 'gray', borderBottomWidth: 2 }}
              onChangeText={(text) => this.setState({ username: text })}

            />
            <TextInput
              placeholder='password'
              placeholderTextColor='black'
              style={{ marginTop: 20, borderColor: 'gray', borderBottomWidth: 2 }}
              onChangeText={(pass) => this.setState({ password: pass })}

            />
            <View style={{ marginTop: 30, marginLeft: 100, width: 100 }}>
              <Button
                onPress={this.handleLogin.bind(this)}
                title="Login"
                color="#ff5060"

              />
              <View style={{ flex: 1, alignItems: 'center', marginTop: 20 }}>
              <TouchableWithoutFeedback onPress={this.handleRegister.bind(this)} underlayColor="white" >
                <View><Text>Register</Text></View>
              </TouchableWithoutFeedback>
              </View>
              
            </View>
          </View>
        </View>
      </View>
    );
  }
}