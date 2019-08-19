import produce from 'immer';

const INITIAL_STATE = {
  profile: null,
};

export default function user(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@auth/SIGN_SUCCESS': {
        const userProfile = {
          name: action.payload.user.name,
          email: action.payload.user.email,
        };

        draft.profile = userProfile;
        break;
      }

      case '@user/UPDATE_PROFILE_SUCCESS': {
        draft.profile = action.payload.profile;
        break;
      }

      case '@auth/SIGN_OUT': {
        draft.profile = null;
        break;
      }

      default:
    }
  });
}
