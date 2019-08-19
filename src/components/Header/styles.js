import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    // flex: 1,
    paddingHorizontal: 10,
    height: 70,
    backgroundColor: '#320060',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },

  subTitle: {
    color: 'white',
    marginLeft: 30,
  },

  img: {
    width: 40,
    height: 40,
  },
});
