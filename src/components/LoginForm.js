import React, { Component } from 'react';
import { Card, CardSection, Input, MyButton } from './common';

class LoginForm extends Component {
  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label="Email"
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

export default LoginForm;