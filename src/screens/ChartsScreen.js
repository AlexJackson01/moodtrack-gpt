import {Dimensions, SafeAreaView, StyleSheet, Text, View, Image} from 'react-native';
import {useEffect, useState} from 'react';
import {createClient} from '@supabase/supabase-js';
import {SUPABASE_ANON_KEY} from '@env';
import LinearGradient from 'react-native-linear-gradient';
import MoodCharts from '../components/charts/MoodCharts';

const supabase = createClient(
  'https://rjguuofnbkbhecexfzox.supabase.co',
  `${SUPABASE_ANON_KEY}`,
);

const ChartsScreen = () => {
  const [moods, setMoods] = useState(null);

  useEffect(() => {
    getMoods();
  }, []);

  const getMoods = async () => {
    const {data} = await supabase.from('moods').select();
    setMoods(data);
  };

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


        <MoodCharts moods={moods} />


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
  logoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    height: 100,
    width: 100,
    marginBottom: 10,
  },
  container: {
    flex: 2,
    backgroundColor: '#fff',
    width: Dimensions.get('window').width - 50,
    marginBottom: 50,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    shadowColor: 'black',
    shadowOpacity: 1,
    shadowOffset: {width: 2, height: 2},
    shadowRadius: 10,
    elevation: 8,
  },
});
export default ChartsScreen;
