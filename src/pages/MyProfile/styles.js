import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 10,
  },

  header: {
    marginTop: 20,
    backgroundColor: '#fafafa',
    // flexDirection: 'row',
    padding: 20,
    // height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },

  avatar: {
    width: 80,
    height: 80,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: '#f6f6f6',
  },

  name: {
    fontFamily: 'NunitoSans',
    marginTop: 10,
    color: 'black',
    fontWeight: 'bold',
  },
});
