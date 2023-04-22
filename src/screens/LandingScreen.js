import { Image, StyleSheet, Text, View } from "react-native";
import { useEffect } from "react";
import LinearGradient from 'react-native-linear-gradient';
import TypeWriter from 'react-native-typewriter'


   
const LandingScreen = ({navigation}) => {

    useEffect(() => {
        setTimeout(() => {navigation.navigate('MoodInput')}, 2000)
    }, []);
    
    return (
        <LinearGradient colors={['#9155d4', '#5a6db7', '#198699']} style={styles.linearGradient}>
            <Image source={require('../assets/images/Logo_splash.png')} style={styles.logo} />
            <TypeWriter typing={1} maxDelay={100} style={styles.title}>MoodTrack</TypeWriter>
        </LinearGradient>
    );
};

const styles = StyleSheet.create({
    linearGradient: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    logo: {
        height: 200,
        width: 200
    },
    title: {
        color: '#fff',
        position: 'absolute',
        top: 279,
        fontSize: 24,
        fontFamily: 'Playlist Script'
    }
})

export default LandingScreen;