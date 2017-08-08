import React, { Component } from 'react';
import { Card, CardSection, Input, MyButton } from './common';
import { connect } from 'react-redux';
import { emailChanged } from '../actions';


class LoginForm extends Component {
  onEmailChange(text) {
    this.props.emailChanged(text);
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label="Email"
            onChangeText={this.onEmailChange.bind(this)}
            placeholder="email@gmail.com" />
        </CardSection>

        <CardSection>
          <Input
            secureTextEntry
            label="Password"
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

export default connect(null, {emailChanged})(LoginForm);