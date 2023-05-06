import {Text, View} from 'react-native';
import {useEffect, useState} from 'react';
import {createClient} from '@supabase/supabase-js';
import {SUPABASE_ANON_KEY} from '@env';

const supabase = createClient(
  'https://rjguuofnbkbhecexfzox.supabase.co',
  `${SUPABASE_ANON_KEY}`,
);

const LatestSongsScreen = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    getCountries();
  }, []);

  async function getCountries() {
    const {data} = await supabase.from('countries').select();
    setCountries(data);
  }

  return (
    <View>
      {countries.map(country => (
        <Text key={country.name}>{country.name}</Text>
      ))}
    </View>
  );
};
export default LatestSongsScreen;
