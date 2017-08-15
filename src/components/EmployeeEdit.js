import React, { Component } from 'react';
import { Card, CardSection, MyButton} from './common';
import EmployeeForm from './EmployeeForm';
import { Text } from 'react-native';
import { employeeUpdate, employeeEdit } from '../actions';
import { connect } from 'react-redux';
import _ from 'lodash';
import Communications from 'react-native-communications';

class EmployeeEdit extends Component {
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
            </Card>
        );
    }
};

mapStateToProps = ({employeeForm}) => {
    return { ...employeeForm };
}

export default connect(mapStateToProps, { employeeEdit, employeeUpdate })(EmployeeEdit);
