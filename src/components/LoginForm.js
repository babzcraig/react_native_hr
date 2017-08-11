import React, { Component } from 'react';
import {Text} from 'react-native';
import { Card, CardSection, Input, MyButton, Spinner } from './common';
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

  renderButton() {
    if (this.props.loading) {
      return (
        <Spinner size={"large"} />
      );
    }

    return (
      <MyButton onPress={this.onButtonPress.bind(this)}>
        Login
      </MyButton>
    )
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

        <Text style={styles.errorTextStyle}>{this.props.error}</Text>
        <CardSection>
          {this.renderButton()}
        </CardSection>
      </Card>
    );
  }
}

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
}

const mapStateToProps = ({ auth }) => {
  const { email, password, error, user, loading } = auth
  return { email, password, error, user, loading };
};

export default connect(mapStateToProps, { emailChanged, passwordChanged, loginUser })(LoginForm);