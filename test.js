import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  FlatList,
  KeyboardAvoidingView,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import index from '../Todos';
import words from './words.json';

const CreateWords = () => {
  const [words, setWords] = useState([]);
  const [addWords, setAddWords] = useState('');
  useEffect(() => {
    AsyncStorage.getItem('newWords')
      .then((data) => {
        if (data !== null) {
          setnewWords(JSON.parse(data));
        }
      })
      .catch((error) => console.log(error.massage));
  }, []);

  const store = (newList) => {
    setnewWords('');
    AsyncStorage.setItem('newWords', JSON.stringify(newList));
  };

  return (
    <KeyboardAvoidingView style={styles.container}>
      <View style={styles.input}>
        <TextInput
          value={addWords}
          onChangeText={(value) => setAddWords(value)}
        />
        <Button
          title="추가"
          onPress={() => {
            if (addWords === '') {
              return;
            }
            const newItem = {
              newWords: addWords,
            };
            store([...newWords, newItem]);
            setAddWords('');
          }}
        />
        <View style={styles.list}>
          <FlatList
            key={index}
            data={newWords}
            renderItem={({item}) => console.log(item)}
          />
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default CreateWords;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
