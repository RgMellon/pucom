import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7966FF',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 5,
    padding: 10,
  },

  header: {
    height: 370,
  },

  textButtom: {
    color: '#8c52ff',
  },

  buttom: {
    width: '100%',
    marginTop: 50,
    borderWidth: 0.5,
    borderColor: '#8c52ff',
    padding: 20,
    color: '#8c52ff',
    borderRadius: 10,
  },

  login: {
    width: 350,
    marginTop: 30,
    fontFamily: 'NunitoSans-Regular',
    fontSize: 22,
    fontWeight: '400',
    color: 'black',
    borderBottomWidth: 1,
    borderBottomColor: '#47315a',
    paddingBottom: 25,
  },

  subTitle: {
    fontFamily: 'NunitoSans-Regular',
    fontSize: 16,
    marginTop: 30,
  },

});
