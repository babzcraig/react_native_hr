import React, { Component } from 'react';
import { Card, CardSection, MyButton, Input } from './common'

class EmployeeCreate extends Component {
    render() {
        return (
            <Card>
                <CardSection>
                    <Input 
                        label="Name"
                        placeholder="Jane"/>
                </CardSection>

                <CardSection>
                    <Input 
                        label="Phone"
                        placeholder="555-456-7777"/>
                </CardSection>

                <CardSection>
                </CardSection>

                <CardSection>
                    <MyButton>
                        Create
                    </MyButton>
                </CardSection>
            </Card>
        )
    }
}

export default EmployeeCreate;
