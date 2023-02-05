import React, {useState, useEffect} from 'react';
import {View, Text, FlatList, TextInput} from 'react-native';
import {Image} from 'react-native-svg';
import {getItunes} from '../api/service';
import {styles} from './Search.Styles';
import {Search as SearchIcon} from 'react-native-feather';

export default function Search() {
  const [userCred, setUserCred] = useState('');
  const [songs, setSongs] = useState([]);
  async function getSongs() {
    const songsList = await getItunes();
    setSongs(songsList.results);
  }

  useEffect(() => {
    getSongs(userCred);
  }, [userCred]);

  function SongCard(props) {
    return (
      <View style={styles.cardContainer}>
        <View style={styles.cardLeftWrapper}>
          <Image
            source={{uri: props.song.item.artworkUrl100}}
            style={styles.image}
          />
        </View>
        <View style={styles.cardRightWrapper}>
          <Text style={styles.defaultText}>{props.song.item.artistName}</Text>
          <Text style={styles.defaultText}>
            {props.song.item.collectionName}
          </Text>
          <Text style={styles.defaultText}>{props.song.item.trackName}</Text>
        </View>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <SearchIcon
          stroke={'#F9C70C'}
          fill="transparent"
          width={20}
          height={20}
        />
        <TextInput
          placeholder="Search"
          style={styles.input}
          value={userCred}
          onChange={setUserCred}
        />
      </View>
      <FlatList
        data={songs}
        renderItem={song => {
          return <SongCard song={song} />;
        }}
        keyExtractor={item => item.id}
      />
    </View>
  );
}
