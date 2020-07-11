import React, { Component } from 'react';
import AddingEmp_details from './AddingEmp_details';
import ViewData from './ViewData';
import Success from './Success';
export class UserForm extends Component {
    state = {
        step: 1,
        name:'',
        nameError:'',
        designation:'',
        contact:'',
        skills:'',
        dob:'',
    };
    nextStep = () => {
        const { step } = this.state;
        this.setState({
            step: step + 1
        });
    };
    prevStep = () => {
        const { step } = this.state;
        this.setState({
            step: step - 1
        });
    };
    handleChange = input => e => {
        this.setState({[input]: e.target.values});
    }
    render() {
        const { step } = this.state;
        const { name, designation, contact, skills, dob } = this.state;
        const values = { name, designation, contact, skills, dob }
        switch(step) {
            case 1: 
            return (
                <AddingEmp_details
                nextStep={this.nextStep}
                handleChange={this.handleChange}
                values={values}
                />
            );
            case 2: 
            return (
                <ViewData
                nextStep={this.nextStep}
                prevStep={this.prevStep}
                values={values}
                />
            );   
            case 3: 
             return <Success/> 
        }    
  }
}

export default UserForm;
