import React from 'react';
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';

function WelcomeScreen(props) {
    return (
        <ImageBackground
            style={styles.background}
            source={require("../assets/homescreen.jpg")}
        >
            <Image style={styles.logo} source={require("../assets/logo.png")}/>
            <View style={styles.loginButton}></View>
            <View style={styles.registerButton}></View>
            <Text style={styles.textBottom}>Already have an account? Sign In</Text>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
    },
    loginButton: {
        width: '55%',
        height: 70,
        backgroundColor: "#A9C0D6",
        opacity: "0.8",
        borderRadius: "20%",
        marginBottom: "19%"
    },
    // registerButton: {
    //     width: '55%',
    //     height: 70,
    //     backgroundColor: "#A9C0D6",
    //     opacity: "0.7",
    //     borderRadius: "18%",
    //     marginBottom: "3%"
    // },
    logo: {
        width: 440,
        height: 460,
        position: 'absolute',
        top: 175,
    },
    textBottom: {
        alignContent: "center",
        fontSize: 13,
        color: "#FFDE59",
        marginBottom: "10%",
        fontWeight: "700",
    }
})

export default WelcomeScreen;