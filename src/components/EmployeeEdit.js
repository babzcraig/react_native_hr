import React, { Component } from 'react';
import { Card, CardSection, MyButton} from './common';
import EmployeeForm from './EmployeeForm';
import { Text } from 'react-native';
import { employeeUpdate } from '../actions';
import { connect } from 'react-redux';
import _ from 'lodash';

class EmployeeEdit extends Component {
    componentDidMount() {
        _.each(this.props.employee, (value, prop) => {
            this.props.employeeUpdate({ prop, value });
        });
    }

    onButtonPress = () => {
        const { name, shift, phone } = this.props;
        console.log(name, shift, phone);
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
            </Card>
        );
    }
};

mapStateToProps = ({employeeForm}) => {
    // return { ...employeeForm }
    const { phone, name, shift } = employeeForm;
    return { phone, name, shift };
}

export default connect(mapStateToProps, { employeeUpdate })(EmployeeEdit);
