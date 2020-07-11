import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton'; 
export class AddingEmp_details extends Component {
    continue = e => {
      e.preventDefault();
      this.props.nextStep();  
    };
  render() {
      const { values, handleChange } = this.props;
    return (
      <MuiThemeProvider>
            <React.Fragment>
                    <AppBar title="Add Employee Data"/>
                        <TextField hintText="Enter Your Name"
                            floatingLabelText="Employee Name"
                            onChange={handleChange('name')}
                            defaultValue={values.name}
                        />
                    <br/>
                        <TextField hintText="Enter Your Designation"
                            floatingLabelText="Employee Designation"
                            onChange={handleChange('designation')}
                            defaultValue={values.designation}
                        />
                    <br/>
                        <TextField hintText="Enter Your Contact"
                            floatingLabelText="Employee Contact"
                            onChange={handleChange('contact')}
                            defaultValue={values.contact}
                        />
                    <br/>
                        <TextField hintText="Enter Your Skills"
                            floatingLabelText="Employee Skills"
                            onChange={handleChange('skills')}
                            defaultValue={values.skills}
                        />
                    <br/>
                        <TextField hintText="Enter Your Date of Birth"
                            floatingLabelText="Employee Date of Birth"
                            onChange={handleChange('dob')}
                            defaultValue={values.dob}
                        />
                    <br/><br/><br/>
                        <RaisedButton
                            label= "Add Employee Data"
                            primary={true}
                            style={styles.button}
                            onClick={this.continue}
                        />
                </React.Fragment>
      </MuiThemeProvider>
    );
  }
}

const styles = {
    button: {
        margin: 15
    }
}
export default AddingEmp_details;
