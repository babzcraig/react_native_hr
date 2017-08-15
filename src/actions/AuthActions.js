import { EMAIL_CHANGED ,
    PASSWORD_CHANGED,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAILED,
    LOGIN_USER
} from './types';
import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';

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
      console.log('first err: ', error);
      loginUserFailed(dispatch, error);
    })
});
};
};

const loginUserFailed = (dispatch, error) => {
dispatch({ type: LOGIN_USER_FAILED, payload: error.message });
}

const loginUserSuccess = (dispatch, user) => {
dispatch({
type: LOGIN_USER_SUCCESS,
payload: user
});
Actions.main();
}
