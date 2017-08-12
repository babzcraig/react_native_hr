import React, { Component } from 'react';
import { Card, CardSection, MyButton } from './common';
import { connect } from 'react-redux';
import { employeeUpdate, employeeCreate } from '../actions';
import EmployeeForm from './EmployeeForm';

class EmployeeCreate extends Component {

    onButtonPressed = () => {
        const { name, phone, shift, employeeCreate } = this.props
        employeeCreate({ name, phone, shift: shift || 'Monday' });
    }

    render() {
        const { name, phone, shift, employeeUpdate } = this.props

        return (
            <Card>
                <EmployeeForm {...this.props} />
                <CardSection>
                    <MyButton onPress={this.onButtonPressed}>
                        Create
                    </MyButton>
                </CardSection>
            </Card>
        )
    }
}

const mapStateToProps = ({ employeeForm }) => {
    const { name, shift, phone } = employeeForm;

    return { name, shift, phone }
}

export default connect(mapStateToProps, { employeeUpdate, employeeCreate })(EmployeeCreate);


