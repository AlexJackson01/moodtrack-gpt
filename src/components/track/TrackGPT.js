import {Dimensions, StyleSheet, Text, View} from 'react-native';
import Slider from '@react-native-community/slider';
import {Button} from 'react-native-paper';
import TypeWriter from 'react-native-typewriter'
import {OPENAI_API_KEY} from "@env"
const { Configuration, OpenAIApi } = require("openai");



import {useState, useEffect} from 'react';

const TrackGPT = ({ navigation }) => {

  const [response, setResponse] = useState('')

  const generatePrompt = async () => {
    const configuration = new Configuration({
      apiKey: process.env.OPENAI_API_KEY,
    });
    const openai = new OpenAIApi(configuration);
    
    const completion = await openai.createCompletion(
      {
        model: "text-davinci-003",
        prompt: "Hello world",
        max_tokens: 200
      },
      {
        timeout: 1000,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    console.log(completion);
    setResponse(completion.data.choices[0].text)

  }

  useEffect(() => {
    generatePrompt()
  }, []);

  return (
    <View style={styles.container}>
      <TypeWriter typing={1} style={styles.greeting}>MoodTrack of the Day</TypeWriter>
      
      <Text>{response}</Text>
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
  },
  greeting: {
    fontFamily: 'Playlist Script',
    fontSize: 25,
    paddingBottom: 10
  },
  moodHeading: {
    fontSize: 17,
    paddingBottom: 30
  },
  moodLabel: {
    fontStyle: 'italic',
    fontSize: 10
  },
  button: {
    borderRadius: 0,
    marginTop: 10
  }
});
export default TrackGPT;
