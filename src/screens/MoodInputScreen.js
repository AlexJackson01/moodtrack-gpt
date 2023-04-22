import {
  Dimensions,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {useEffect} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import TypeWriter from 'react-native-typewriter';

const MoodInputScreen = ({navigation}) => {
  return (
    <LinearGradient
      colors={['#9155d4', '#5a6db7', '#198699']}
      style={styles.linearGradient}>
      <SafeAreaView>
        <View style={styles.logoContainer}>
          <Image
            source={require('../assets/images/MoodTrack_logo.png')}
            style={styles.logo}
          />
        </View>

        <View style={styles.container}>
          <Text>How are you feeling?</Text>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 2,
    backgroundColor: '#fff',
    width: Dimensions.get('window').width - 50,
    marginBottom: 50,
  },
  logoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    height: 100,
    width: 100,
    marginBottom: 20,
  },
  title: {
    color: '#fff',
    position: 'absolute',
    top: 279,
    fontSize: 24,
    fontFamily: 'Playlist Script',
  },
});

export default MoodInputScreen;
