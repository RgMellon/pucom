import { StyleSheet } from 'react-native';

export default StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#6400F2',
  },

  header: {
    backgroundColor: '#6400F2',
    height: 270,
    alignItems: 'center',
    justifyContent: 'center',
    // borderBottomRightRadius: 10,
    // borderBottomLeftRadius: 10,
  },

  subTitle: {
    marginTop: 30,
    color: '#6400F2',
    borderBottomColor: '#6400F2',
    borderBottomWidth: 2,
    fontFamily: 'NunitoSans',

  },

  wrapperLogin: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 5,
    marginBottom: 20,
  },

  textLogin: {
    color: '#fff',
    fontSize: 20,
    fontFamily: 'NunitoSans',

  },

  trace: {
    height: 200,
    width: '90%',
    borderStyle: 'dashed',
    borderWidth: 1.5,
    borderColor: '#CCC',
    borderRadius: 4,
  },

  traceIcon: {
    marginLeft: -10,
    marginTop: 40,
    width: 20,
    height: 20,
  },

  wrapperLogo: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -27,
  },

  btnFacebook: {
    height: 60,
    width: '90%',
    backgroundColor: '#1774EB',
    borderRadius: 3,
    marginTop: 50,

    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    alignItems: 'center',
  },

  btnGoogle: {
    height: 60,
    width: '90%',
    backgroundColor: '#EA4335',
    borderRadius: 3,
    marginTop: 40,

    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    alignItems: 'center',
  },

  btnPucom: {
    height: 60,
    width: '90%',
    backgroundColor: '#F7DD2D',
    borderRadius: 3,
    marginTop: 40,
    marginBottom: 40,

    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    alignItems: 'center',
  },

  buttonsLogin: {
    alignItems: 'center',
    backgroundColor: '#fff',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },

  loginText: {
    fontFamily: 'NunitoSans',
    color: '#fff',
    marginRight: 80,
    fontSize: 18,
  },

  input: {
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 15,
    marginTop:80,
    fontSize: 16,
  },

});
