import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import {List, ListItem} from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton'; 
export class AddingEmp_details extends Component {
    continue = e => {
      e.preventDefault();
      this.props.nextStep();  
    };
    back = e => {
        e.preventDefault();
        this.props.prevStep();  
      }
  render() {
      const { values: { name, designation, contact, skills, dob } } = this.props;
    return (
      <MuiThemeProvider>
         <React.Fragment>
            <AppBar title="View Data"/>
            <List>
            <ListItem
            primaryText="Name"
            secondaryText={ name }
            />
            <ListItem
            primaryText="Designation"
            secondaryText={ designation }
            />
            <ListItem
            primaryText="Contact"
            secondaryText={ contact }
            />
            <ListItem
            primaryText="Skills"
            secondaryText={ skills }
            />
            <ListItem
            primaryText="dob"
            secondaryText={ dob }
            />
            </List>

            <br/><br/><br/>
         <RaisedButton
         label= "Conform"
         primary={true}
         style={StyleSheet.button}
         onClick={this.continue}
         />
         <br/><br/><br/>
         <RaisedButton
         label= "Back"
         primary={false}
         style={StyleSheet.button}
         onClick={this.back}
         />
         </React.Fragment>
      </MuiThemeProvider>
    );
  }
}

export default AddingEmp_details;
