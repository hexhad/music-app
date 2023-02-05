import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  input: {
    backgroundColor: 'gray',
    padding: 10,
    color: 'white',
  },
  break: {
    height: 0.5,
    backgroundColor: 'white',
    width: '80%',
    borderRadius:50,
    margin:20
  },
  yellow: {
    color: '#F9C70C',
  },
  yellowBg: {
    backgroundColor: '#F9C70C',
  },
  defaultText: {
    color: 'white',
  },
  container: {
    backgroundColor: 'black',
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 40,
  },
  caption: {
    margin: 10,
    fontSize: 15,
  },
  forgotPassword: {
    marginVertical: 10,
    fontSize: 10,
  },
  centerMe: {
    marginVertical: 'auto',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logInBtn: {
    backgroundColor: 'white',
    padding: 15,
    alignItems: 'center',
    borderRadius: 50,
    marginVertical: 25,
  },
  direction: {
    flexDirection: 'row',
  },
  centerText: {
    textAlignVertical: 'center',
    textAlign: 'center',
  },
});

export {styles};
