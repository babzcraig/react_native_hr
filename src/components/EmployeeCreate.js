import React, { Component } from 'react';
import { Picker } from 'react-native';
import { Card, CardSection, MyButton, Input } from './common';
import { connect } from 'react-redux';
import { employeeUpdate, employeeCreate } from '../actions';

class EmployeeCreate extends Component {

    onButtonPressed = () => {
        const { name, phone, shift, employeeCreate } = this.props
        employeeCreate({ name, phone, shift: shift || 'Monday' });
    }

    render() {
        const { name, phone, shift, employeeUpdate } = this.props

        return (
            <Card>
                <CardSection>
                    <Input 
                        label="Name"
                        value={name}
                        onChangeText={(value)=> employeeUpdate({ prop: 'name', value })}
                        placeholder="Jane"/>
                </CardSection>

                <CardSection>
                    <Input 
                        label="Phone"
                        value={phone}
                        onChangeText={(value)=> employeeUpdate({ prop: 'phone', value })}
                        placeholder="555-456-7777"/>
                </CardSection>

                <CardSection>
                    <Picker style={{ flex: 1 }} selectedValue={shift} onValueChange={value => employeeUpdate({ prop: 'shift', value })}>
                        <Picker.Item label="Monday" value="Monday" />
                        <Picker.Item label="Tuesday" value="Tuesday" />
                        <Picker.Item label="Wednesday" value="Wednesday" />
                        <Picker.Item label="Thursday" value="Thursday" />
                        <Picker.Item label="Friday" value="Friday" />
                        <Picker.Item label="Saturday" value="Saturday" />
                        <Picker.Item label="Sunday" value="Sunday" />
                    </Picker>
                </CardSection>

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


