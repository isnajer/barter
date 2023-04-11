import React from 'react';
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';

function WelcomeScreen(props) {
    return (
        <ImageBackground
            style={styles.background}
            source={require("../assets/homescreen.jpg")}
        >
            <Image style={styles.logo} source={require("../assets/logo.png")}/>
            {/* <Text>Trade What You Don't Need</Text> */}
            <View style={styles.loginButton}></View>
            <View style={styles.registerButton}></View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
    },
    // loginButton: {
    //     width: '100%',
    //     height: 70,
    //     backgroundColor: "#C3B19B",
    // },
    // registerButton: {
    //     width: '100%',
    //     height: 70,
    //     backgroundColor: "#E3DFDA",
    // },
    logo: {
        width: 440,
        height: 460,
        position: 'absolute',
        top: 180,
    },
})

export default WelcomeScreen;