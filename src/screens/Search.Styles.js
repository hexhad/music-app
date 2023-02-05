import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  cardContainer: {
    flex: 1,
    flexDirection: 'row',
    height: 90,
  },
  cardLeftWrapper: {
    height: 90,
    width: 90,
    backgroundColor: 'gray',
  },
  cardRightWrapper: {
    marginLeft:4
  },
  container: {
    backgroundColor: 'black',
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 40,
  },
  yellow: {
    color: '#F9C70C',
  },
  defaultText: {
    color: 'white',
  },
  image: {
    height: '100%',
    width: '100%',
  },
  input: {
    padding: 10,
    color: 'white',
    // backgroundColor:'red',
    width:'100%',
  },
  searchContainer: {
    width:'100%',
    // flex: 1,
    flexDirection: 'row',
    height: 40,
    borderBottomWidth:1,
    borderBottomColor:'#F9C70C',
    marginBottom:3,
    // marginVertical: 'auto',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export {styles};
