import { StyleSheet } from 'react-native';

export default StyleSheet.create({

  container: {
    marginTop: 20,
  },

  description: {
    // flex: 1,
    backgroundColor: '#6400F2',
    paddingHorizontal: 10,
    height: 150,
    // marginTop: 20,
    position: 'relative',
    flexDirection: 'row',
    borderRadius: 5,
    marginBottom: 10,
  },

  imageWrapper: {
    height: 222,
    borderWidth: 1,
    borderColor: '#fafafa',
  },

  detailLeft: {
    width: 30,
    height: 30,
    borderRadius: 80,
    position: 'absolute',
    backgroundColor: '#fafafa',
    marginLeft: -18,
    marginTop: 69,
  },

  detailRight: {
    width: 30,
    height: 30,
    borderRadius: 80,
    position: 'absolute',
    backgroundColor: '#fafafa',
    right: -18,
    marginTop: 69,
  },

  discount: {
    width: 75,
    height: 75,
    borderRadius: 80,
    backgroundColor: '#F7DD2D',
    borderStyle: 'dashed',
    borderWidth: 1.5,
    borderColor: '#fff',
    marginTop: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },

  discountPrice: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 18,
  },

  storeName: {
    marginTop: 20,
    color: 'white',
    fontSize: 21,
    fontWeight: 'bold',
    // textAlign: 'center',
  },

  info: {
    // marginLeft: 40,
    alignItems: 'center',
  },

  itemDiscount: {
    marginTop: 15,
    fontSize: 17,
    color: '#fff',
  },

  validate: {
    fontSize: 17,
    color: '#fff',
    marginTop: 15,
  },

});
