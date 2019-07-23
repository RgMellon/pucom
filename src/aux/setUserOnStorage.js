import { AsyncStorage } from 'react-native';

import Reactotron from 'reactotron-react-native';

async function setUserOnStorage(user) {
  await AsyncStorage.setItem('userToken', JSON.stringify(user.user));

  return true;
}

export default setUserOnStorage;
