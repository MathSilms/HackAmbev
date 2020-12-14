import React from 'react';
import { View, Image, StyleSheet, Text, TextInput } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import styled from 'styled-components';


const Login = () => {

  const navigation = useNavigation();

  function handleNavigateToHome() {
    navigation.navigate('Home');
  }

  return (<>
    <View style={styles.container}>
      
      <View style={styles.HeaderContainer}>
          <Text style={styles.title}>
              Login
          </Text>
          <Text style={styles.subTitle}>
          Entre com as informações de
 login para acessar sua conta
          </Text>
      </View>

        <View style={styles.sectionContainer}>
            <TextInput placeholder="digite seu email.." style={styles.input} />
            <TextInput placeholder="digite sua senha" style={styles.input} />
        </View>

      <View style={styles.FooterContainer}>
      <RectButton style={styles.button} onPress={handleNavigateToHome}>
        <Text style={styles.buttonContent}>
          Login
        </Text>

      </RectButton>
      </View>
      {/* <RectButton style={styles.button} onPress={handleNavigateToHome}>
        <Text style={styles.buttonContent}>
          Começar
        </Text>

      </RectButton> */}
    </View>
  </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center'
  },

  HeaderContainer:{
      flex:1,
      justifyContent: 'center',
      alignItems: 'center'
  },
  sectionContainer:{
      flex:1,
      justifyContent: 'center',
      alignItems: 'center'
  },

  FooterContainer:{
      flex:1,
  },

  title: {
    color: '#F7B500',
    fontSize: 42,
    fontFamily: 'Ubuntu_700Bold',
    marginTop: 128,
  },
  subTitle:{
      textAlign: 'center',
    fontSize: 12,
    color: '#205072',
    marginTop:15,
    marginLeft:25, 
    marginRight:25, 
  },

  logo: {
    width: '100%',
    height: 250,

  },
  input: {
    height: 60,
    backgroundColor: 'white',
    
    shadowOffset: {
        width: 0,
        height: 4,
    },
    shadowOpacity: 0.30,
    shadowColor: "#F7B500",
    shadowRadius: 4.65,
    elevation: 8,
    borderRadius: 21,
    marginBottom: 18,
    paddingHorizontal: 44,
    fontSize: 16,
    color:'#205072',
  },

  // description: {
  //   color: '#6C6C80',
  //   fontSize: 16,
  //   marginTop: 16,
  //   fontFamily: 'Roboto_400Regular',
  //   maxWidth: 260,
  //   lineHeight: 24,
  // },

  // footer: {},

  // select: {},

  

  button: {
    backgroundColor: '#AE1E27',
    width:280,
    height: 60,
    borderRadius: 21,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 48,
  },
  buttonContent: {
    color: 'white'

    // height: 60,
    // flexDirection: 'row',
    // borderRadius: 10,
    // overflow: 'hidden',
    // alignItems: 'center',
    // marginTop: 8,
  },

  // buttonIcon: {
  //   height: 60,
  //   width: 60,
  //   backgroundColor: 'rgba(0, 0, 0, 0.1)',
  //   justifyContent: 'center',
  //   alignItems: 'center'
  // },

  buttonText: {
    flex: 1,
    justifyContent: 'center',
    textAlign: 'center',
    color: '#FFF',
    fontFamily: 'Roboto_500Medium',
    fontSize: 16,
  }
});


export default Login;