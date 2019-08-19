export function sigInRequest(email, password) {
  return {
    type: '@auth/SIGN_IN_REQUEST',
    payload: { email, password },
  };
}

// export function sigInSuccess(token, user) {
//   return {
//     type: '@auth/SIGN_IN_SUCCESS',
//     payload: { token, user },
//   };
// }

export function signUpRequest(name, email, password) {
  return {
    type: '@auth/SIGN_UP_REQUEST',
    payload: { name, email, password },
  };
}
export function signFail() {
  return {
    type: '@auth/SIGN_FAILURE',
  };
}

export function signOut() {
  return {
    type: '@auth/SIGN_OUT',
  };
}

export function signSuccess(user) {
  return {
    type: '@auth/SIGN_SUCCESS',
    payload: { user },
  };
}
