import React, { Component } from 'react';
import { Card, CardSection, Input, MyButton } from './common';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged } from '../actions';


class LoginForm extends Component {
  onEmailChange(text) {
    this.props.emailChanged(text);
  }

  onPasswordChange(text) {
    this.props.onPasswordChange(text);
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
          <MyButton>
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

export default connect(mapStateToProps, { emailChanged, passwordChanged })(LoginForm);