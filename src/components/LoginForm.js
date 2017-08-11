import React, { Component } from 'react';
import { Card, CardSection, Input, MyButton } from './common';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged, loginUser } from '../actions';

console.log('login');

class LoginForm extends Component {
  onEmailChange(text) {
    this.props.emailChanged(text);
  }

  onPasswordChange(text) {
    this.props.passwordChanged(text);
  }

  onButtonPress() {
    const { email, password } = this.props;
    this.props.loginUser({ email, password });
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label="Email"
            value={this.props.email}
            onChangeText={this.onEmailChange.bind(this)}
            placeholder="email@gmail.com" />
        </CardSection>

        <CardSection>
          <Input
            secureTextEntry
            label="Password"
            onChangeText={this.onPasswordChange.bind(this)}
            placeholder="Password" />
        </CardSection>

        <CardSection>
          <MyButton onPress={this.onButtonPress.bind(this)}>
            Login
          </MyButton>
        </CardSection>
      </Card>
    );
  }
}

const mapStateToProps = (state) => {
  const { email, password } = state.auth
  return {
    email: email,
    password: password
  }
};

export default connect(mapStateToProps, { emailChanged, passwordChanged, loginUser })(LoginForm);