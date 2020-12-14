import React from 'react';
import { View, StyleSheet, Text, TextInput } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';



const Home = () => {

    const navigation = useNavigation();

    function handleNavigateToHome() {
        navigation.navigate('Home');
    }

    return (<>
        <View style={styles.container}>

            <View style={styles.HeaderContainer}>
                <View style={styles.profile}>
                
                </View>
                <View>
                    <Text style={styles.title}>
                        Login
                    </Text>
                    <Text style={styles.subTitle}>
                        Entre com as informações de
                        login para acessar sua conta
                    </Text>
                </View>
            </View>

            <View style={styles.sectionContainer}>
                 
            </View>

            <View style={styles.FooterContainer}>
                <View style={styles.menu}>
                    
                </View>
            </View>
                
        </View>
    </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 0,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center'
    },

    HeaderContainer: {
        flex: 1,
        width: '100%',
        backgroundColor: '#F7B500',
        justifyContent: 'center',
        alignItems: 'center'
    },
    sectionContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    FooterContainer: {
        flex: 1,
    },
    profile: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        color: '#F7B500',
        fontSize: 42,
        fontFamily: 'Ubuntu_700Bold',
        marginTop: 128,
    },
    subTitle: {
        textAlign: 'center',
        fontSize: 12,
        color: '#205072',
        marginTop: 15,
        marginLeft: 25,
        marginRight: 25,
    },
    menu:{
        width:50,
        height: 20,
        backgroundColor:"#F6920E",
    },

});


export default Home;