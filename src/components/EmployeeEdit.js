import React, { Component } from 'react';
import { Card, CardSection, MyButton, Confirm } from './common';
import EmployeeForm from './EmployeeForm';
import { Text } from 'react-native';
import { employeeUpdate, employeeEdit, employeeDelete } from '../actions';
import { connect } from 'react-redux';
import _ from 'lodash';
import Communications from 'react-native-communications';

class EmployeeEdit extends Component {
    state = {
        showModal: false
    }

    componentDidMount() {
        _.each(this.props.employee, (value, prop) => {
            this.props.employeeUpdate({ prop, value });
        });
    }

    onButtonPress = () => {
        const { name, shift, phone } = this.props;
        this.props.employeeEdit({ name, shift, phone, uid: this.props.employee.uid });
    }

    onTextPress = () => {
        const { phone, shift } = this.props;
        Communications.text(phone, `Your upcoming shift is on ${shift}`);
    }

    onDecline = () => {
        this.setState({ showModal: false })
    }

    onAccept = () => {
        const { uid } = this.props.employee;
        this.props.employeeDelete({ uid });
    }

    render() {
        return (
            <Card>
                <EmployeeForm />
                <CardSection>
                    <MyButton onPress={this.onButtonPress}>
                        Save Changes
                    </MyButton>
                </CardSection>

                <CardSection>
                    <MyButton onPress={this.onTextPress}>
                        Text Schedule
                    </MyButton>
                </CardSection>

                <CardSection>
                    <MyButton onPress={()=> this.setState({ showModal: !this.state.showModal})}>
                        Fire Employee
                    </MyButton>
                </CardSection>

                <Confirm
                    visible={this.state.showModal}
                    onAccept={this.onAccept}
                    onDecline={this.onDecline}>
                    Are you sure you want to delete this?
                </Confirm>
            </Card>
        );
    }
};

mapStateToProps = ({employeeForm}) => {
    return { ...employeeForm };
}

export default connect(mapStateToProps, { employeeEdit, employeeUpdate, employeeDelete })(EmployeeEdit);
