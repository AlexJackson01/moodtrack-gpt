import { Image, StyleSheet, Text, View } from "react-native";
import LinearGradient from 'react-native-linear-gradient';
import TypeWriter from 'react-native-typewriter'



        
const App = () => {
    return (
        <LinearGradient colors={['#9155d4', '#5a6db7', '#198699']} style={styles.linearGradient}>
            <Image source={require('./assets/images/Logo_splash.png')} style={styles.logo} />
            <TypeWriter typing={1} style={styles.title}>MoodTrack</TypeWriter>
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
        top: 288,
    }
})

export default App;