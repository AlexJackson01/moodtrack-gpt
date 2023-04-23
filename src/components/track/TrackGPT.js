import {
  Dimensions,
  Image,
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Slider from '@react-native-community/slider';
import {ActivityIndicator, Button} from 'react-native-paper';
import TypeWriter from 'react-native-typewriter';
import {OPENAI_API_KEY} from '@env';
const {Configuration, OpenAIApi} = require('openai');
const extractUrls = require('extract-urls');
import Video from 'react-native-video';
import Music from '../../assets/videos/music.mp4';
import Icon from 'react-native-vector-icons/FontAwesome'

import {useState, useEffect} from 'react';

const TrackGPT = ({navigation, sadHappy, stressedRelaxed, tiredEnergetic}) => {
  const [response, setResponse] = useState('');
  const [song, setSong] = useState('');
  const [reason, setReason] = useState('');
  const [songLink, setSongLink] = useState(null);

  const generatePrompt = async () => {
    const configuration = new Configuration({
      apiKey: process.env.OPENAI_API_KEY,
    });
    const openai = new OpenAIApi(configuration);

    const completion = await openai.createCompletion(
      {
        model: 'text-davinci-003',
        prompt: `On a scale of 0 to 10, from sad to happy, I am ${sadHappy}. On a scale of 0 to 10, from stressed to relaxed, I am ${stressedRelaxed}. On a scale of 0 to 10, from tired to energetic, I am ${tiredEnergetic}. Recommend me a song based on my mood in the format: "Song Name" by Artist. Tell me why you've recommended it.`,
        max_tokens: 600,
      },
      {
        timeout: 1000,
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );
    console.log(completion);
    let res = completion.data.choices[0].text;
    let song = res.substring(res.indexOf('"') - 1, res.indexOf('.'));
    let reason = res.substring(res.indexOf('.') + 2);
    let songLink = song.replaceAll('"', '').replaceAll("'", '').split(' ');
    console.log(songLink);

    setResponse(completion.data.choices[0].text);
    setSong(song);
    setReason(reason);
    setSongLink(songLink);
  };

  
  const [platforms, setPlatforms] = useState([
    {
      name: 'spotify',
      link: `https://open.spotify.com/search/results/`,
    },
    {
      name: 'apple',
      link: `https://music.apple.com/us/search?term=`,
    },
    {
      name: 'youtube-play',
      link: `https://music.youtube.com/search?q=`,
    },
    {
      name: 'amazon',
      link: `https://music.amazon.co.uk/search/`,
    },
  ]);

  useEffect(() => {
    generatePrompt();
  }, []);

  return (
    <View style={styles.container}>
      <TypeWriter typing={1} style={styles.greeting}>
        MoodTrack of the Day
      </TypeWriter>

      {/* {image && <Image source={{ uri: image[0]}} style={styles.songCover} />} */}

      {response ? (
        <>
          <Video
            source={Music}
            paused={false}
            style={styles.video}
            repeat={true}
          />
          <Text style={styles.songTitle}>{song}</Text>
          <Text style={styles.songReason}>{reason}</Text>
          <Text>{songLink}</Text>
          <Text>Listen to your MoodTrack here:</Text>

        <View style={styles.platformContainer}>
            {platforms.map((platform, i) => (
              <TouchableOpacity key={i} onPress={() => Linking.openURL(`${platform.link}${songLink.join(' ')}`)}>
                <Icon style={styles.platforms} name={platform.name} size={30} color='#9155d4' />
              </TouchableOpacity>
            ))}
            </View>
        </>
      ) : (
        <ActivityIndicator animating={true} color="#9155d4" />
      )}

      {}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: '#fff',
    width: Dimensions.get('window').width - 50,
    marginBottom: 50,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    padding: 20,
  },
  greeting: {
    fontFamily: 'Playlist Script',
    fontSize: 25,
    paddingBottom: 40,
  },
  moodHeading: {
    fontSize: 17,
    paddingBottom: 30,
  },
  moodLabel: {
    fontStyle: 'italic',
    fontSize: 10,
  },
  button: {
    borderRadius: 0,
    marginTop: 10,
  },
  songTitle: {
    fontWeight: 'bold',
    fontSize: 15,
    textAlign: 'center',
  },
  songReason: {
    paddingTop: 20,
    textAlign: 'center',
    paddingBottom: 20,
    fontSize: 12,
    fontStyle: 'italic',
  },
  video: {
    height: 50,
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  platformContainer: {
    paddingTop: 20,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  platforms: {
    margin: 10,
    marginBottom: 5,
    // justifyContent: 'space-evenly'
  }
});
export default TrackGPT;
