import React from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';



const Start = () => {

  const navigation = useNavigation();

  function handleNavigateToLogin() {
    navigation.navigate('Login');
  }

  return (<>
    <View style={styles.container}>
      <Image source={require('../../assets/Imagem3.png')} style={styles.logo} />
      <Image source={require('../../assets/friendImage.png')} style={styles.logo} />
      <RectButton style={styles.button} onPress={handleNavigateToLogin}>
        <Text style={styles.buttonContent}>
          Começar
        </Text>

      </RectButton>
    </View>
  </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#F7B500',
    justifyContent: 'center',
    alignItems: 'center'
  },

  // title: {
  //   color: '#322153',
  //   fontSize: 32,
  //   fontFamily: 'Ubuntu_700Bold',
  //   maxWidth: 260,
  //   marginTop: 128,
  // },

  logo: {
    width: '100%',
    height: 250,

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

  // input: {
  //   height: 60,
  //   backgroundColor: '#FFF',
  //   borderRadius: 10,
  //   marginBottom: 8,
  //   paddingHorizontal: 24,
  //   fontSize: 16,
  // },

  button: {
    backgroundColor: '#AE1E27',
    width:280,
    height: 60,
    borderRadius: 21,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 88,
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

export default Start;