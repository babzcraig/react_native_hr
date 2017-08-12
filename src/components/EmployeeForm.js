import React, { Component } from 'react';
import { View, Text, Picker } from 'react-native';
import { CardSection, Input } from './common';
import { connect } from 'react-redux';
import { employeeUpdate } from '../actions';

class EmployeeForm extends Component {
    render() {
        return (
            <View>
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
            </View>
        )
    }
}

const mapStateToProps = (state) => {
    const { name, phone, shift } = state.employees;

    return { name, shift, phone };
}
export default connect(mapStateToProps, { employeeUpdate })(EmployeeForm);
