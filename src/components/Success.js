import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
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
    return (
      <MuiThemeProvider>
         <React.Fragment>
            <AppBar title="success"/>
                <h1>The employee data has been added success fully</h1>
                <p> you can downlode the file in json format</p>
            <br/><br/><br/>
         <RaisedButton
         label= "Download"
         primary={true}
         style={StyleSheet.button}
         onClick={this.Download}
         />
         </React.Fragment>
      </MuiThemeProvider>
    );
  }
}

export default AddingEmp_details;
