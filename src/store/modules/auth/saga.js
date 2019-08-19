import { takeLatest, call, put, all } from 'redux-saga/effects';

import { Alert } from 'react-native';

import api from '~/services/api';

import { signSuccess, signFail } from './actions';

export function* signIn({ payload }) {
  try {
    const { email, password } = payload;

    const response = yield call(api.post, 'user/login', {
      email,
      password,
    });

    const { user } = response.data;

    api.defaults.headers.Authorization = `Bearer ${user.token}`;

    yield put(signSuccess(user));
  } catch (e) {
    Alert.alert('erro ao fazer login, tente mais tarde');
    yield put(signFail());
  }
}

export function* signUp({ payload }) {
  const { name, email, password } = payload;
  try {
    const response = yield call(api.post, 'user/store', {
      name,
      email,
      password,
      c_password: password,
    });

    const { user } = response.data;

    api.defaults.headers.Authorization = `Bearer ${user.token}`;

    yield put(signSuccess(user));
  } catch (e) {
    Alert.alert('Erro no login', 'Falha ao logar');
    yield put(signFail());
  }
}

/**
 * Utilizado para pegar o que está no cache
 * e trazer como default para o app
 */
export function setToken({ payload }) {
  if (!payload) return;

  const { token } = payload.auth;

  if (token) {
    api.defaults.headers.Authorization = `Bearer ${token}`;
  }
}

export default all([
  takeLatest('persist/REHYDRATE', setToken),
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
  takeLatest('@auth/SIGN_UP_REQUEST', signUp),
  // takeLatest('@auth/SIGN_OUT', signOut),
]);
