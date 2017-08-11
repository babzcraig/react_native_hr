import { EMAIL_CHANGED ,
          PASSWORD_CHANGED,
          LOGIN_USER_SUCCESS,
          LOGIN_USER_FAILED,
          LOGIN_USER
} from './types';
import firebase from 'firebase';

export const emailChanged = (text) => {
  return {
    type: EMAIL_CHANGED,
    payload: text
  };
};

export const passwordChanged = (text) => {
  return {
    type: PASSWORD_CHANGED,
    payload: text
  }
};

export const loginUser = ({email, password}) => {
  console.log('dispatched')
  return (dispatch) => {
    dispatch({type: LOGIN_USER});

    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(user => {
        loginUserSuccess(dispatch, user);
      })
      .catch(error => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .then(user => {
            loginUserSuccess(dispatch, user);
          })
          .catch(error => {
            loginUserFailed(dispatch);
          })
      });
  };
};

const loginUserFailed = (dispatch) => {
  dispatch({ type: LOGIN_USER_FAILED });
}

const loginUserSuccess = (dispatch, user) => {
  dispatch({
    type: LOGIN_USER_SUCCESS,
    payload: user
  })
}
